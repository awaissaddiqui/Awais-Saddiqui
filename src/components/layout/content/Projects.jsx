import React from 'react';

const Projects = ({ image, title, description, link, id }) => {
    return (
        <div className="w-full mx-auto bg-white shadow-lg rounded-2xl overflow-hidden my-2 flex flex-col h-full" id={id}>
            {/* Image Section */}
            <div
                style={{ backgroundImage: `url(${image})` }}
                className="w-full h-60 bg-cover bg-top hover:bg-bottom transition-all duration-2000"
            />

            {/* Content Section */}
            <div className="flex flex-col flex-grow p-6">
                <h3 className="text-xl font-titleFont font-bold mb-3">{title}</h3>
                <p className="text-gray-600 font-navbarFont flex-grow">{description}</p>
            </div>

            {/* Button Section - Fixed at Bottom */}
            <div className="mt-auto flex justify-center mb-4">
                <a
                    href={link}
                    target='_blank'
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center font-navbarFont bg-primary text-white py-3 px-12 rounded-xl shadow-md hover:bg-green-700 transition duration-300 w-full md:w-auto"
                >
                    Know More
                </a>
            </div>
        </div>
    );
};

export default Projects;
