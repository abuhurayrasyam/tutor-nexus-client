import React, { useContext, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { HiOutlineCurrencyBangladeshi } from 'react-icons/hi';
import { IoLanguage } from 'react-icons/io5';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../contexts/AuthContext/AuthContext';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const BookingCard = ({myTutor}) => {

    const axiosSecure = useAxiosSecure();

    const {user} = useContext(AuthContext);

    const [tutor, setTutor] = useState(myTutor);

    const {_id, image, name, tutorialImage, tutorialLanguage, tutorialPrice, tutorialDescription, tutorialReview} = tutor;

   const handleReview = (id) => {
    axiosSecure.patch(`/tutorials/review/${id}`, {email: user.email})
        .then(res => {
            const bookingModified = res.data.bookingUpdate?.modifiedCount;
            const tutorialModified = res.data.tutorialUpdate?.modifiedCount;

            if (bookingModified > 0 && tutorialModified > 0) {
                setTutor((previous) => ({...previous, tutorialReview: previous.tutorialReview + 1}));
                Swal.fire({
                    icon: "success",
                    title: "Review added successfully!",
                    timer: 1500,
                    showConfirmButton: false,
                });
            }
            else {
                Swal.fire({
                    icon: "error",
                    title: "Review not added!",
                    timer: 1500,
                    showConfirmButton: false,
                });
            }
        })
        .catch(err => {
            if (err.response?.status === 400) {
                Swal.fire({
                icon: "warning",
                title: err.response.data.error || "You already reviewed this tutor!",
                timer: 2000,
                showConfirmButton: false,
                });
            } else {
                Swal.fire({
                icon: "error",
                title: "Something went wrong!",
                timer: 2000,
                showConfirmButton: false,
                });
            }
        });
    };
 
    return (
        <div className='w-11/12 mx-auto'>
            <div className="card grid grid-cols-1 md:grid-cols-12 bg-[#D4C9BE] border border-[#123458] w-full shrink-0 shadow-sm p-5 md:p-8 my-10">
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
                    <button onClick={() => handleReview(_id)} className="btn bg-[#123458] text-[#D4C9BE] border border-dotted border-[#F1EFEC] shadow-none w-full">Review</button>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;