import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TutorCard from '../../features/student/components/TutorCard';

const FamousTutorials = ({setLoading}) => {

    const [famousTutorials, setFamousTutorials] = useState([]);

    useEffect(() => {
        axios.get('https://tutor-nexus.vercel.app/tutorials/famous')
        .then(res => {
            setFamousTutorials(res.data);
            setLoading(false);
        })
    },[setLoading])

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