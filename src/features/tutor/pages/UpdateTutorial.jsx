import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext/AuthContext';
import { useLoaderData } from 'react-router';
import axios from 'axios';
import Swal from 'sweetalert2';

const UpdateTutorial = () => {

    const {user} = useContext(AuthContext);

    const {_id, tutorialImage, tutorialLanguage, tutorialPrice, tutorialDescription, tutorialReview} = useLoaderData();

    const handleUpdateTutorials = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const updateTutorial = Object.fromEntries(formData.entries());

        axios.put(`http://localhost:3000/tutorials/${_id}`, updateTutorial)
        .then((res) => {
             if(res.data.modifiedCount){
                Swal.fire({
                    icon: "success",
                    title: "Your tutorial updated successfully!",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })
    }

    return (
        <div className="hero bg-base-200 min-h-screen py-10">
            <div className="card bg-base-100 border border-gray-300 w-full max-w-sm shrink-0 shadow-sm pb-3">
                <div className="card-body">
                    <h1 className="font-semibold text-center text-xl">Update Tutorial</h1>
                    <form onSubmit={handleUpdateTutorials} className="fieldset">
                    <label className="label">Your Name</label>
                    <input type="text" className="input" name='name' defaultValue={user?.displayName} readOnly required />
                    <label className="label">Your Email</label>
                    <input type="email" className="input" name='email' defaultValue={user?.email} readOnly required />
                    <label className="label">Tutorial Image URL</label>
                    <input type="url" className="input" name='tutorialImage' placeholder="Enter tutorial image url" defaultValue={tutorialImage} required />
                    <label className="label">Tutorial Language</label>
                    <select className="select" name='tutorialLanguage' defaultValue={tutorialLanguage} required>
                        <option value="" disabled selected>Select a Tutorial Language</option>
                        <option value="arabic">Arabic</option>
                        <option value="english">English</option>
                        <option value="spanish">Spanish</option>
                        <option value="french">French</option>
                        <option value="portuguese">Portuguese</option>
                        <option value="mandarin">Mandarin Chinese</option>
                        <option value="japanese">Japanese</option>
                        <option value="korean">Korean</option>
                        <option value="bengali">Bengali</option>
                    </select>
                    <label className="label">Tutorial Price</label>
                    <input type="number" className="input" name='tutorialPrice' placeholder="Enter tutorial price" defaultValue={tutorialPrice} required />
                    <label className="label">Tutorial Description</label>
                    <textarea type="text" className="input pt-2" name='tutorialDescription' placeholder="Enter tutorial description" defaultValue={tutorialDescription} required />
                    <label className="label">Tutorial Review</label>
                    <input type="number" className="input" name='tutorialReview' defaultValue={tutorialReview} readOnly required />
                    <input type="submit" className="btn btn-neutral border-dotted shadow-none border-gray-50 mt-4" value="Update" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateTutorial;