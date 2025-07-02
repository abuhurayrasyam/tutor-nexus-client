import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';

const Logout = () => {

    const {signOutUser} = useContext(AuthContext);

    const handleLogoutUser = () => {
            signOutUser()
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Logout successful!",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(() => {
                Swal.fire({
                    title: "Logout unsuccessful!",
                    icon: "error",
                    draggable: true
                });
            })
        }

    return (
        <button onClick={handleLogoutUser} className='bg-secondary border border-primary rounded-sm text-gray-800 text-xs md:text-base font-semibold px-2.5 py-2 md:px-4 cursor-pointer'>Logout</button>
    );
};

export default Logout;