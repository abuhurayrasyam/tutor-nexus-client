import React from 'react';
import { FaStar } from 'react-icons/fa';
import { IoLanguage } from 'react-icons/io5';

const TutorCard = ({tutorData}) => {

    const {image, name, tutorialReview, tutorialLanguage, tutorialDescription} = tutorData;

    return (
        <div className="card flex flex-col md:flex-row bg-[#D4C9BE] border-2 border-dotted border-[#123458] w-full shrink-0 shadow-sm p-5 md:p-8 my-10">
            <figure>
                <img className='w-80 h-60 rounded-xl' src={image} />
            </figure>
            <div className="card-body">
                <div className='flex justify-between items-center'>
                    <h2 className="card-title text-[#123458]">{name}</h2>
                    <div className='flex items-center gap-1'>
                        <p className='text-black font-semibold text-xl'>{tutorialReview}</p>
                        <FaStar size={20} className="text-yellow-600 mb-[1px]" />
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <IoLanguage className='text-black' size={20} />
                    <p className='text-gray-700 font-semibold'>{tutorialLanguage}</p>
                </div>
                <div className="card-actions">
                    <p className='text-gray-600'>{tutorialDescription}</p>
                    <button className="btn bg-[#123458] text-[#D4C9BE] border border-dotted border-[#F1EFEC] shadow-none w-full md:w-30">See Details</button>
                </div>
            </div>
        </div>
    );
};

export default TutorCard;