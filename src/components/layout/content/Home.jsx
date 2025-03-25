import React from 'react';
import Navbar from '../navbar/Navbar';
import awais from '../../../assets/awais1.jpg';

const Home = () => {
    return (
        <>
            <div className="" id='home' >
                {/* <Navbar /> */}
                <div className="flex flex-col md:flex-row items-center justify-center max-w-5xl mx-auto py-32">
                    <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 md:w-1/2">
                        <h1 className="text-4xl font-bold text-white font-titleFont">AWAIS SADDIQUI</h1>
                        <p className="text-textColor max-w-md sm:font-small">
                            I am a Computer Systems Engineer with a passion for AI-Powered web application developement. My expertise lies in designing and building efficient, user-friendly websites that meet the unique needs of clients. Explore my work to see how I bring ideas to life through code.
                        </p>
                        <a href="#contact"> <button className="bg-primary font-navbarFont text-white font-semibold py-2 px-7 rounded shadow-md shadow-primary transition duration-300">
                            Let’s get started &gt;
                        </button>
                        </a>
                    </div>
                    <div className="mt-10 md:mt-0 md:ml-10">
                        <img
                            src={awais}
                            alt="Awais saddiqui"
                            className="rounded-full w-96 h-96 object-cover shadow-lg" // Increase the width and height
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
