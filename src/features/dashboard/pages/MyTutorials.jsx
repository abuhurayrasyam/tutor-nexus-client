import React, { Suspense, useContext, useEffect } from 'react';
import Loading from '../../../components/Loading';
import { AuthContext } from '../../../contexts/AuthContext/AuthContext';
import useDocumentTitle from '../../../hooks/useDocumentTitle';
import myTutorialsApi from '../../../api/myTutorialsApi';
import TutorialList from '../components/TutorialList';

const MyTutorials = () => {

    const {user} = useContext(AuthContext);

    const {myTutorialsPromise} = myTutorialsApi();

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