import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../../contexts/AuthContext/AuthContext';
import Swal from 'sweetalert2';
import useDocumentTitle from '../../../hooks/useDocumentTitle';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const AddTutorials = () => {

    const axiosSecure = useAxiosSecure();

    const {user} = useContext(AuthContext);

    const handleAddTutorials = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const newTutorial = Object.fromEntries(formData.entries());
        newTutorial.tutorialReview = 0;
        newTutorial.image = user.photoURL;
        
        axiosSecure.post('/tutorials', newTutorial)
        .then((res) => {
            if(res.data.insertedId){
                  Swal.fire({
                    icon: "success",
                    title: "New tutorial added successfully!",
                    showConfirmButton: false,
                    timer: 1500
                });
                form.reset();
            }
        });
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useDocumentTitle("Tutor Nexus | Add Tutorials");

    return (
         <div className="hero bg-base-200 min-h-screen py-10">
            <div className='w-11/12 mx-auto'>
                <div className="card bg-base-100 border border-gray-300 w-11/12 mx-auto max-w-sm shrink-0 shadow-sm pb-3">
                    <div className="card-body">
                        <h1 className="font-semibold text-center text-xl">Add Tutorials</h1>
                        <form onSubmit={handleAddTutorials} className="fieldset">
                        <label className="label">Your Name</label>
                        <input type="text" className="input" name='name' defaultValue={user?.displayName} readOnly required />
                        <label className="label">Your Email</label>
                        <input type="email" className="input" name='email' defaultValue={user?.email} readOnly required />
                        <label className="label">Tutorial Image URL</label>
                        <input type="url" className="input" name='tutorialImage' placeholder="Enter tutorial image url" required />
                        <label className="label">Tutorial Language</label>
                        <select className="select" name='tutorialLanguage' required>
                            <option value="" disabled selected>Select a Tutorial Language</option>
                            <option value="Arabic">Arabic</option>
                            <option value="English">English</option>
                            <option value="Spanish">Spanish</option>
                            <option value="French">French</option>
                            <option value="Portuguese">Portuguese</option>
                            <option value="Chinese">Chinese</option>
                            <option value="Japanese">Japanese</option>
                            <option value="Korean">Korean</option>
                        </select>
                        <label className="label">Tutorial Price</label>
                        <input type="number" className="input" name='tutorialPrice' placeholder="Enter tutorial price" required />
                        <label className="label">Tutorial Description</label>
                        <textarea type="text" className="input pt-2" name='tutorialDescription' placeholder="Enter tutorial description" required />
                        <input type="submit" className="btn btn-neutral border-dotted shadow-none border-gray-50 mt-4" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddTutorials;