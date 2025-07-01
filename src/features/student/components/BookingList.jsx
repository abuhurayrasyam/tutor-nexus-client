import React, { use } from 'react';
import BookingCard from './BookingCard';
import { Link } from 'react-router';

const BookingList = ({myTutorsPromise}) => {

   const myTutors = use(myTutorsPromise);

    return (
        <div>
            <div>
                {
                    myTutors.length > 0 ? (
                        <>
                            <h1 className='text-xl md:text-2xl lg:text-4xl font-bold text-center my-10'>My Booked Tutors</h1>
                            <div className='w-11/12 mx-auto'>
                                {myTutors.map(myTutor => <BookingCard key={myTutor._id} myTutor={myTutor}></BookingCard>)}
                            </div>
                        </>
                    ) : (
                        <div className='flex items-center justify-center h-screen'>
                            <div className="text-center py-10">
                                <h2 className="text-2xl font-semibold text-natural">You haven't booked any tutors yet.</h2>
                                <p className="text-secondary mt-2">Start by booking a tutor to see it listed here.</p>
                                <Link to={'/student/find-tutors'}><button className='btn mt-5 bg-secondary hover:bg-[#B6B09F] border-1 border-dashed border-primary text-primary'>See Tutors</button></Link>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default BookingList;