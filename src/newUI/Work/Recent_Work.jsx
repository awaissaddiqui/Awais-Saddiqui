import React from 'react';
import { Vortex } from './Vortex';
import Projects from '../../components/layout/content/Projects';
import { projects } from '../../data/work_history';
const Recent_Work = () => {
    return (

        <div className="w-full rounded-md min-h-screen overflow-x-hidden">
            <Vortex
                backgroundColor="black"
                rangeY={800} // Adjusted rangeY
                particleCount={500}
                baseHue={120}
                className="px-2 h-full w-full"
            >
                <div className="text-center">
                    <h2 className="text-4xl text-white font-bold font-titleFont mb-4" >Recent Work</h2>
                    <p className="text-gray-300 mb-16 max-w-2xl mx-auto font-navbarFont">
                        Here are some of the projects I’ve worked on recently. Click on the links to learn more about each project.
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4'>
                    {projects.map((project, index) => (
                        <Projects key={index} {...project} />
                    ))}
                </div>
            </Vortex>
        </div>
    );
};

export default Recent_Work;