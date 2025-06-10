import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StatsSection = ({setLoading}) => {
    const [stats, setStats] = useState({
        tutorCount: 0,
        totalReviews: 0,
        languageCount: 0,
        userCount: 0,
    });

    useEffect(() => {
        axios.get('https://tutor-nexus.vercel.app/stats')
            .then(res => setStats(res.data));
            setLoading(false);
    }, [setLoading]);

    const statItems = [
        { label: 'Tutors', value: stats.tutorCount },
        { label: 'Total Reviews', value: stats.totalReviews },
        { label: 'Languages', value: stats.languageCount },
        { label: 'Users', value: stats.userCount },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center my-10 w-11/12 mx-auto">
            {statItems.map((item, index) => (
                <div key={index} className="p-4 shadow rounded bg-[#D4C9BE]">
                    <h3 className="text-xl font-bold text-[#123458]">{item.value}</h3>
                    <p className='text-[#123458]'>{item.label}</p>
                </div>
            ))}
        </div>
    );
};

export default StatsSection;
