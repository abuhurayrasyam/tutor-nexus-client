import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import Swal from 'sweetalert2';
import ThemeToggle from './ThemeToggle';
import UserAvatarTooltip from './UserAvatarTooltip';

const Navbar = () => {

    const {user, signOutUser} = useContext(AuthContext);

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

    const navLinks = (
        <>
            <NavLink to={'/'} className={'btn m-2 cursor-pointer bg-[#B6B09F] hover:bg-[#EAE4D5] text-black border border-gray-200 shadow-sm border-none'}>Home</NavLink>
            <NavLink to={'/student/find-tutors'} className={'btn m-2 cursor-pointer bg-[#B6B09F] hover:bg-[#EAE4D5] text-black border border-gray-200 shadow-sm border-none'}>Find Tutors</NavLink>
            <NavLink to={'/student/my-booked-tutors'} className={'btn m-2 cursor-pointer bg-[#B6B09F] hover:bg-[#EAE4D5] text-black border border-gray-200 shadow-sm border-none'}>My Booked Tutors</NavLink>
            <NavLink to={'/tutor/add-tutorials'} className={'btn m-2 cursor-pointer bg-[#B6B09F] hover:bg-[#EAE4D5] text-black border border-gray-200 shadow-sm border-none'}>Add Tutorials</NavLink>
            <NavLink to={'/tutor/my-tutorials'} className={'btn m-2 cursor-pointer bg-[#B6B09F] hover:bg-[#EAE4D5] text-black border border-gray-200 shadow-sm border-none'}>My Tutorials</NavLink>
        </>
    )

    return (
        <div className="bg-[#B6B09F] border-b border-[#EAE4D5] shadow-sm">
            <div className="navbar w-11/12 mx-auto">
                <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="text-[#EAE4D5] p-3 lg:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {" "}
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                        />{" "}
                    </svg>
                    </div>
                    <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-[#B6B09F] rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                    {navLinks}
                    </ul>
                </div>
                <a className="text-black font-semibold lg:text-xl md:text-md text-sm">Tutor <span className='text-white'>Nexus</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{navLinks}</ul>
                </div>
                <div className="navbar-end space-x-1.5 items-center">
                    <ThemeToggle></ThemeToggle>
                    <UserAvatarTooltip></UserAvatarTooltip>
                    {
                        user ? (
                            <button onClick={handleLogoutUser} className='bg-[#EAE4D5] rounded-sm text-gray-800 text-xs md:text-base font-semibold px-2.5 py-2 md:px-4 cursor-pointer'>Logout</button>
                        ) : (
                            <>
                            <Link to={'/auth/signin'} className="bg-[#EAE4D5] rounded-sm text-gray-800 text-xs md:text-base font-semibold px-2.5 py-2 md:px-4 cursor-pointer">Login</Link>
                            <Link to={'/auth/signup'} className="bg-[#EAE4D5] rounded-sm text-gray-800 text-xs md:text-base font-semibold px-2.5 py-2 md:px-4 cursor-pointer"><button>SignUp</button></Link>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;