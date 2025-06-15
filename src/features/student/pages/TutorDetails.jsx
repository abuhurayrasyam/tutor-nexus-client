import React, { useContext, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { IoLanguage } from 'react-icons/io5';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../../contexts/AuthContext/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';
import { HiOutlineCurrencyBangladeshi } from 'react-icons/hi';
import useDocumentTitle from '../../../hooks/useDocumentTitle';

const TutorDetails = () => {

    const {user} = useContext(AuthContext);

    const {_id, image, name, email, tutorialImage, tutorialLanguage, tutorialPrice, tutorialDescription, tutorialReview} = useLoaderData();

    const handleBookingTutor = () => {
        const tutorData = {
            tutorId: _id,
            image,
            name,
            tutorEmail: email,
            userEmail: user.email,
            tutorialImage,
            tutorialLanguage,
            tutorialPrice,
            tutorialReview
        };

        axios.post('https://tutor-nexus.vercel.app/bookings', tutorData)
        .then(res => {
            if(res.data.insertedId){
                    Swal.fire({
                    icon: "success",
                    title: "You booked this tutorial successfully!",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })
        .catch(err => {
            if (err.response?.status === 400) {
                Swal.fire({
                icon: "warning",
                title: err.response.data.error || "You have already booked this tutor!",
                showConfirmButton: false,
                timer: 2000
                });
            } else {
                Swal.fire({
                icon: "error",
                title: "Something went wrong! Please try again later.",
                showConfirmButton: false,
                timer: 2000
                });
            }
        });
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useDocumentTitle("Tutor Nexus | Tutor Details");

    return (
        <div className='w-11/12 mx-auto'>
            <div className="card grid grid-cols-1 md:grid-cols-12 bg-[#D4C9BE] border-2 border-dotted border-[#123458] shrink-0 shadow-sm p-5 md:p-8 my-10 w-11/12 mx-auto">
                <figure className='col-span-4'>
                    <img className='w-80 h-60 object-cover rounded-xl' src={tutorialImage} />
                </figure>
                <div className="card-body col-span-8">
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-2'>
                            <div className="avatar">
                                <div className="ring-[#123458] w-8 rounded-full ring-1">
                                    <img src={image} />
                                </div>
                            </div>
                            <h2 className="card-title text-[#123458]">{name}</h2>
                        </div>
                        <div className='flex items-center gap-1'>
                            <p className='text-black font-semibold text-xl'>{tutorialReview}</p>
                            <FaStar size={20} className="text-yellow-600 mb-[1px]" />
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <IoLanguage className='text-black' size={20} />
                        <p className='text-gray-700 font-semibold'>{tutorialLanguage}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <HiOutlineCurrencyBangladeshi className='text-black' size={21} />
                        <p className='text-gray-700 font-semibold'>{tutorialPrice}</p>
                    </div>
                    <p className='text-gray-600'>{tutorialDescription}</p>
                    <button onClick={handleBookingTutor} className="btn bg-[#123458] text-[#D4C9BE] border border-dotted border-[#F1EFEC] shadow-none w-full">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default TutorDetails;