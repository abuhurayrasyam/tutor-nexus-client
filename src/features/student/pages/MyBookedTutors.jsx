import React, { Suspense, useContext, useEffect } from 'react';
import { AuthContext } from '../../../contexts/AuthContext/AuthContext';
import Loading from '../../../components/Loading';
import BookingList from '../components/BookingList';
import useDocumentTitle from '../../../hooks/useDocumentTitle';
import myTutorsApi from '../../../api/myTutorsApi';

const MyBookedTutors = () => {

    const {user} = useContext(AuthContext);

    const {myTutorsPromise} = myTutorsApi();

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