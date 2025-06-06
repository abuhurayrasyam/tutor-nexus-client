import React, { Suspense, useContext, useEffect } from 'react';
import { AuthContext } from '../../../contexts/AuthContext/AuthContext';
import Loading from '../../../components/Loading';
import BookingList from '../components/BookingList';
import { myTutorsPromise } from '../../../api/myTutorsApi';
import useDocumentTitle from '../../../hooks/useDocumentTitle';

const MyBookedTutors = () => {

    const {user} = useContext(AuthContext);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useDocumentTitle("Tutor Nexus | My Booked Tutors");

    return (
        <div className='min-h-screen'>
            <Suspense fallback={<Loading></Loading>}>
                <BookingList myTutorsPromise={myTutorsPromise(user.email)}></BookingList>
            </Suspense>
        </div>
    );
};

export default MyBookedTutors;