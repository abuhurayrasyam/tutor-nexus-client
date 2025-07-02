import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, NavLink} from 'react-router';

const Sidebar = ({isSidebarOpen}) => {

    return (
      <div className={`fixed z-40 top-0 left-0 w-64 h-full bg-primary p-6 space-y-4 shadow-lg transform transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static md:block flex flex-col justify-between`}>
        <div>
            <h2 className="text-2xl font-bold text-accent mb-4 mt-2">Dashboard</h2>
            <nav className="flex flex-col space-y-2">
              <NavLink to={'/dashboard'} end className={'px-4 py-2 rounded-md font-semibold text-start cursor-pointer bg-primary hover:bg-secondary text-accent hover:text-primary border border-secondary shadow-sm'}>Overview</NavLink>
              <NavLink to={'/dashboard/add-tutorials'} className={'px-4 py-2 rounded-md font-semibold text-start cursor-pointer bg-primary hover:bg-secondary text-accent hover:text-primary border border-secondary shadow-sm'}>Add Tutorials</NavLink>
              <NavLink to={'/dashboard/my-tutorials'} className={'px-4 py-2 rounded-md font-semibold text-start cursor-pointer bg-primary hover:bg-secondary text-accent hover:text-primary border border-secondary shadow-sm'}>My Tutorials</NavLink>
            </nav>
        </div>
        <div className="mt-auto pt-6">
          <NavLink to="/" className="flex items-center gap-2 px-4 py-2 rounded-md bg-accent text-primary hover:bg-secondary transition"><FaArrowLeft /> Go to Home</NavLink>
        </div>
      </div>
    );
};

export default Sidebar;