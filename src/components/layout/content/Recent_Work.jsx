import React, { useEffect } from 'react';
import { projects } from '../../../data/work_history';
import Projects from './Projects';
import * as AOS from 'aos';
import 'aos/dist/aos.css';


const RecentWork = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])
    return (
        <div className="my-10 pt-8 px-8 md:px-8 lg:px-16" id='work' data-aos="fade-up">
            {/* Header Section */}
            <div className="text-center mb-8">
                <h2 className="text-4xl font-bold font-titleFont mb-4" >Recent Work</h2>
                <p className="text-gray-600 mb-16 max-w-2xl mx-auto font-navbarFont">
                    Here are some of the projects I’ve worked on recently. Click on the links to learn more about each project.
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-3 gap-8' data-aos="fade-up">
                {projects.map((project, index) => (
                    <Projects key={index} {...project} />
                ))}
            </div>
        </div>
    );
};

export default RecentWork;
