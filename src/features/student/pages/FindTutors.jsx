import React from 'react';
import { useLoaderData } from 'react-router';
import TutorCard from '../components/TutorCard';

const FindTutors = () => {

    const tutorsData = useLoaderData();

    return (
        <div className='w-11/12 mx-auto min-h-screen'>
            <h1 className='text-center text-md md:text-xl lg:text-2xl font-bold my-10'>Find Expert Online Tutors to Help You Learn a New Language</h1>
            <div>
                {
                    tutorsData.map(tutorData => <TutorCard key={tutorData._id} tutorData={tutorData}></TutorCard>)
                }
            </div>
        </div>
    );
};

export default FindTutors;