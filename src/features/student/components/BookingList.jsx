import React, { use } from 'react';
import BookingCard from './BookingCard';

const BookingList = ({myTutorsPromise}) => {

   const myTutors = use(myTutorsPromise);

    return (
        <div>
            <div>
                {myTutors.map(myTutor => <BookingCard key={myTutor._id} myTutor={myTutor}></BookingCard>)}
            </div>
        </div>
    );
};

export default BookingList;