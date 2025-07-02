import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthContext/AuthContext';
import { useParams } from 'react-router';
import Swal from 'sweetalert2';
import useDocumentTitle from '../../../hooks/useDocumentTitle';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Loading from '../../../components/Loading';

const UpdateTutorial = () => {

    useDocumentTitle("Tutor Nexus | Update Tutorial");

    const { id } = useParams();
    const [tutorial, setTutorial] = useState(null);
    const axiosSecure = useAxiosSecure();
    const {user, loading, setLoading} = useContext(AuthContext);

    useEffect(() => {
        axiosSecure.get(`/tutorials/${id}`)
        .then(res => {
            setTutorial(res.data);
            setLoading(false);
        })
        .catch(() => {
            setLoading(false);
        });

        window.scrollTo(0, 0);
    }, [id, axiosSecure, setLoading]);

    if (loading || !tutorial) return <Loading />;

    const {_id, tutorialImage, tutorialLanguage, tutorialPrice, tutorialDescription, tutorialReview} = tutorial;
    
    const handleUpdateTutorials = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const updateTutorial = Object.fromEntries(formData.entries());

        axiosSecure.put(`/tutorials/${_id}`, updateTutorial)
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
           <div className='w-11/12 mx-auto'>
                 <div className="card bg-base-100 border border-gray-300 w-11/12 mx-auto max-w-sm shrink-0 shadow-sm pb-3">
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
                        <input type="number" className="input" name='tutorialPrice' placeholder="Enter tutorial price" defaultValue={tutorialPrice} required />
                        <label className="label">Tutorial Description</label>
                        <textarea type="text" className="input pt-2" name='tutorialDescription' placeholder="Enter tutorial description" defaultValue={tutorialDescription} required />
                        <label className="label">Tutorial Review</label>
                        <p className='input'>{tutorialReview}</p>
                        <input type="submit" className="btn btn-primary border-dotted shadow-none border-gray-50 mt-4" value="Update" />
                        </form>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default UpdateTutorial;