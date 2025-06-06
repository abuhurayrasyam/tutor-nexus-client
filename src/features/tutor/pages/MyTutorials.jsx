import React, { Suspense, useContext, useEffect } from 'react';
import Loading from '../../../components/Loading';
import TutorialList from '../components/TutorialList';
import { myTutorialsPromise } from '../../../api/myTutorialsApi';
import { AuthContext } from '../../../contexts/AuthContext/AuthContext';
import useDocumentTitle from '../../../hooks/useDocumentTitle';

const MyTutorials = () => {

    const {user} = useContext(AuthContext);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    useDocumentTitle("Tutor Nexus | My Tutorials");

    return (
        <div className='min-h-screen'>
            <Suspense fallback={<Loading></Loading>}> 
                <TutorialList myTutorialsPromise={myTutorialsPromise(user.email)}></TutorialList>
            </Suspense>
        </div>
    );
};

export default MyTutorials;