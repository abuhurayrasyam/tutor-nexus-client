import React, { Suspense, useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext/AuthContext';
import Loading from '../../../components/Loading';
import BookingList from '../components/BookingList';
import { myTutorsPromise } from '../../../api/myTutorsApi';

const MyBookedTutors = () => {

    const {user} = useContext(AuthContext);

    return (
        <div className='min-h-screen'>
            <Suspense fallback={<Loading></Loading>}>
                <BookingList myTutorsPromise={myTutorsPromise(user.email)}></BookingList>
            </Suspense>
        </div>
    );
};

export default MyBookedTutors;