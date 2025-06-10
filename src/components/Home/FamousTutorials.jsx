import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import TutorCard from '../../features/student/components/TutorCard';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import Loading from '../Loading';

const FamousTutorials = () => {

    const {loading, setLoading} = useContext(AuthContext);

    const [famousTutorials, setFamousTutorials] = useState([]);

    useEffect(() => {
        axios.get('https://tutor-nexus.vercel.app/tutorials/famous')
        .then(res => {
            setFamousTutorials(res.data);
            setLoading(false);
        })
    },[setLoading])

    if(loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold text-center mb-10">Top Rated Tutor</h2>
            <div>
                {
                    famousTutorials.map(tutorData => <TutorCard tutorData={tutorData}></TutorCard>)
                }
            </div>
        </div>
    );
};

export default FamousTutorials;