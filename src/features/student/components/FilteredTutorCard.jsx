import React from 'react';
import { FaStar } from 'react-icons/fa';
import { HiOutlineCurrencyBangladeshi } from 'react-icons/hi';
import { IoLanguage } from 'react-icons/io5';
import { Link } from 'react-router';

const FilteredTutorCard = ({tutorData}) => {

    const {_id, image, name, tutorialReview, tutorialLanguage, tutorialPrice} = tutorData;

    return (
        <div className="card grid grid-cols-1 md:grid-cols-12 bg-secondary border border-primary w-11/12 mx-auto shrink-0 shadow-sm p-5 md:p-8 my-10">
            <figure className='col-span-2'>
                <img className='w-50 h-60 object-cover rounded-xl' src={image} />
            </figure>
            <div className="card-body col-span-10">
                <div className='flex justify-between items-center'>
                    <h2 className="card-title text-primary">{name}</h2>
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
                <Link to={`/student/tutor/details/${_id}`}><button className="btn bg-primary text-secondary border border-dotted border-[#F1EFEC] shadow-none w-full md:w-30">See Details</button></Link>
            </div>
        </div>
    );
};

export default FilteredTutorCard;