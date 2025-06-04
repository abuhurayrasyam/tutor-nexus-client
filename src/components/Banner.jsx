import React from 'react';
import { motion } from "motion/react"

const Banner = () => {
    return (
        <div className="hero bg-[#D4C9BE]">
            <div className="hero-content flex-col lg:flex-row-reverse gap-10 md:gap-20 my-10">
                <img className='w-80 md:w-100 lg:w-120 rounded-xl' src="https://img.freepik.com/free-photo/student-online-cute-girl-glasses-sweater-studying-computer-writing-down-notes_140725-164212.jpg?uid=R83316384&ga=GA1.1.130173900.1746345150&semt=ais_hybrid&w=740"/>
                <div className='space-y-5'>
                    <motion.h1 animate={{color: ['#123458', '#030303'], transition: {duration: 2, repeat: Infinity}}} className="text-2xl md:text-3xl lg:text-5xl font-bold">Learn faster <br className='hidden lg:block'/>with your best<br/>language tutor.</motion.h1>
                    <button className="btn bg-[#123458] text-[#D4C9BE] w-full lg:w-50">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;