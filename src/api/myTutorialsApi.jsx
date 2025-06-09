import React from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';

const myTutorialsApi = () => {
    const axiosSecure = useAxiosSecure();

    const myTutorialsPromise = (email) => {
        return axiosSecure.get(`/my-tutorials?email=${email}`)
        .then(res => res.data);
    };

    return {
        myTutorialsPromise
    };
};

export default myTutorialsApi;