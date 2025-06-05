import React, { Suspense, useContext } from 'react';
import Loading from '../../../components/Loading';
import TutorialList from '../components/TutorialList';
import { myTutorialsPromise } from '../../../api/myTutorialsApi';
import { AuthContext } from '../../../contexts/AuthContext/AuthContext';

const MyTutorials = () => {

    const {user} = useContext(AuthContext);

    if (!user) {
        return <Loading />;
    }

    return (
        <div className='min-h-screen'>
            <Suspense fallback={<Loading></Loading>}> 
                <TutorialList myTutorialsPromise={myTutorialsPromise(user?.email)}></TutorialList>
            </Suspense>
        </div>
    );
};

export default MyTutorials;