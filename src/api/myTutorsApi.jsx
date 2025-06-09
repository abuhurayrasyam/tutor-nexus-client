import React from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';

const myTutorsApi = () => {
  const axiosSecure = useAxiosSecure();
  
  const myTutorsPromise = (email) => {
    return axiosSecure.get(`/bookings?email=${email}`)
    .then(res => res.data);
  };

  return {
    myTutorsPromise
  };
};

export default myTutorsApi;
