import React, { useContext } from 'react';
import axios from "axios";
import { AuthContext } from '../contexts/AuthContext/AuthContext';
import Swal from 'sweetalert2';

const axiosInstance = axios.create({
  baseURL: 'https://tutor-nexus.vercel.app/',
});

const useAxiosSecure = () => {
  const {user, signOutUser} = useContext(AuthContext);

  axiosInstance.interceptors.request.use(config => {
      config.headers.authorization = `Bearer ${user.accessToken}`
      return config;
  });

  axiosInstance.interceptors.response.use(
    res => {
      return res;
    },
    err => {
      if(err.status === 401 || err.status === 403){
        signOutUser()
        .then(() => {
            Swal.fire({
                title: `You are logged out because of an error with ${err.status} code!`,
                icon: "error",
                draggable: true
            });
        })
        .catch(err => {
            console.log(err);
        })
      }
      return Promise.reject(err);
    }
  );

  return axiosInstance;
};

export default useAxiosSecure;
