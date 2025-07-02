import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import ThemeToggle from './ThemeToggle';
import UserAvatarTooltip from './UserAvatarTooltip';
import Logout from './Logout';

const Navbar = () => {

    const {user} = useContext(AuthContext);

    const navLinks = (
        <>
            <NavLink to={'/'} className={'btn m-2 cursor-pointer bg-primary hover:bg-secondary text-accent hover:text-primary border border-secondary shadow-sm'}>Home</NavLink>
            <NavLink to={'/student/find-tutors'} className={'btn m-2 cursor-pointer bg-primary hover:bg-secondary text-accent hover:text-primary border border-secondary shadow-sm'}>Find Tutors</NavLink>
            <NavLink to={'/about'} className={'btn m-2 cursor-pointer bg-primary hover:bg-secondary text-accent hover:text-primary border border-secondary shadow-sm'}>About Us</NavLink>
            <NavLink to={'/contact'} className={'btn m-2 cursor-pointer bg-primary hover:bg-secondary text-accent hover:text-primary border border-secondary shadow-sm'}>Contact Us</NavLink>
        </>
    )

    const protectedNavLinks = (
        <>
            <NavLink to={'/student/my-booked-tutors'} className={'btn m-2 cursor-pointer bg-primary hover:bg-secondary text-accent hover:text-primary border border-secondary shadow-sm'}>My Booked Tutors</NavLink>
        </>
    )

    return (
        <div className="bg-primary shadow-sm">
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
                    className="menu menu-sm dropdown-content bg-primary rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                    {navLinks}
                    {
                        user && protectedNavLinks
                    }
                    </ul>
                </div>
                <Link to={'/'} className="text-secondary font-semibold lg:text-xl md:text-md text-sm">Tutor <span className='text-accent'>Nexus</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                    {
                        user && protectedNavLinks
                    }
                </ul>
                </div>
                <div className="navbar-end space-x-1.5 items-center">
                    <ThemeToggle></ThemeToggle>
                    <div className='hidden lg:block'><UserAvatarTooltip></UserAvatarTooltip></div>
                    {
                        user ? (
                            <>
                                <div className="dropdown">
                                <div tabIndex={0} role="button" className="text-secondary p-3 lg:hidden">
                                    <UserAvatarTooltip></UserAvatarTooltip>
                                </div>
                                <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-primary rounded-box z-1 mt-3 w-52 p-2 shadow right-0"
                                >
                                    <Link to={'/dashboard'} className="bg-secondary mb-2 text-center rounded-sm text-gray-800 text-xs md:text-base font-semibold px-2.5 py-2 md:px-4 cursor-pointer">Dashboard</Link>
                                    <Logout></Logout>
                                </ul>
                            </div> 
                            <Link to={'/dashboard'} className="hidden lg:block bg-secondary rounded-sm text-gray-800 text-xs md:text-base font-semibold px-2.5 py-2 md:px-4 cursor-pointer">Dashboard</Link>
                            <div className='hidden lg:block'><Logout></Logout></div>
                            </>
                        ) : (
                            <>
                            <Link to={'/auth/signin'} className="bg-secondary rounded-sm text-gray-800 text-xs md:text-base font-semibold px-2.5 py-2 md:px-4 cursor-pointer">Login</Link>
                            <Link to={'/auth/signup'} className="bg-secondary rounded-sm text-gray-800 text-xs md:text-base font-semibold px-2.5 py-2 md:px-4 cursor-pointer"><button>SignUp</button></Link>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;