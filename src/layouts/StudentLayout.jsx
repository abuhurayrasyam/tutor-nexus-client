import React from 'react';
import Navbar from '../components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';

const StudentLayout = () => {
    return (
        <div>
            <header className='sticky top-0 z-50'>
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default StudentLayout;