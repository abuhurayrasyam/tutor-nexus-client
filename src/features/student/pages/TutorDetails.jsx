import React, { useContext, useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { IoLanguage } from 'react-icons/io5';
import { useParams } from 'react-router';
import { AuthContext } from '../../../contexts/AuthContext/AuthContext';
import Swal from 'sweetalert2';
import { HiOutlineCurrencyBangladeshi } from 'react-icons/hi';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Loading from '../../../components/Loading';
import useDocumentTitle from '../../../hooks/useDocumentTitle';

const TutorDetails = () => {

    useDocumentTitle("Tutor Nexus | Tutor Details");

    const { id } = useParams();
    const [ tutor, setTutor ] = useState(null);
    const axiosSecure = useAxiosSecure();
    const {user, loading, setLoading} = useContext(AuthContext);

    useEffect(() => {
        axiosSecure.get(`/tutorials/${id}`)
        .then(res => {
            setTutor(res.data);
            setLoading(false);
        })
        .catch(() => {
            setLoading(false);
        });

        window.scrollTo(0, 0);
    }, [id, axiosSecure, setLoading]);

    if (loading || !tutor) return <Loading />;

    const {_id, image, name, email, tutorialImage, tutorialLanguage, tutorialPrice, tutorialDescription, tutorialReview} = tutor;

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

        axiosSecure.post('/bookings', tutorData)
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

    return (
        <div className='w-11/12 mx-auto'>
            <div className="card grid grid-cols-1 md:grid-cols-12 bg-secondary border-2 border-dotted border-primary shrink-0 shadow-sm p-5 md:p-8 my-10 w-11/12 mx-auto">
                <figure className='col-span-4'>
                    <img className='w-80 h-60 object-cover rounded-xl' src={tutorialImage} />
                </figure>
                <div className="card-body col-span-8">
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-2'>
                            <div className="avatar">
                                <div className="ring-primary w-8 rounded-full ring-1">
                                    <img src={image} />
                                </div>
                            </div>
                            <h2 className="card-title text-primary">{name}</h2>
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
                    <button onClick={handleBookingTutor} className="btn bg-primary text-secondary border border-dotted border-[#F1EFEC] shadow-none w-full">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default TutorDetails;