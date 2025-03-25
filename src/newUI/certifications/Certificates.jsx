import React, { useState } from "react";

import { FiExternalLink } from "react-icons/fi";
import { LiaCertificateSolid } from "react-icons/lia";
const certificationsData = [
    {
        title: "Database Design and Basic SQL in PostgreSQL",
        issuer: "University of Michigan",
        issuedDate: "Mar 2025",
        provider: 'Coursera',
        link: "https://www.coursera.org/account/accomplishments/verify/WPJYIKXP64Q2",
        tags: ["PostgreSQL", "SQL", "Database Design"],
    },
    {
        title: "Generative AI for Developers: AI-Powered Pair Programming",
        issuer: "LinkedIn Learning",
        issuedDate: "Mar 2025",
        provider: 'LinkedIn',
        link: "https://www.linkedin.com/learning/certificates/5411765a8ca950b133a222d25de030b89e75e0f21a98f30f4f8068ea64347cc4?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B%2BWtMRdf8T7OeBI8eVUlpiA%3D%3D",
        tags: ["Generative AI", "AI-Powered Pair Programming , Full Stack Development"],
    },
    {
        title: "Cert Prep: Unity Certified Associate Game Developer Scripting with C#",
        issuer: "LinkedIn Learning",
        issuedDate: "Feb 2025",
        provider: 'LinkedIn',
        link: "https://www.linkedin.com/learning/certificates/d9f3e626dc5faa9e5ace10420d8dcaa953f7a80ab1a122a5b3488cf1ad2d3412",
        tags: ["Unity", "Game Development", "C#"],

    },
    {
        title: "Next.js: Creating and Hosting a Full-Stack Site",
        issuer: "LinkedIn Learning",
        issuedDate: "Jan 2025",
        provider: 'LinkedIn',
        link: "https://www.linkedin.com/learning/certificates/733486fdd6d4e45e88569d2c6c955de29123ba7ac77e14076c936cf394fbcb13",
        tags: ["Next.js", "Server Side Rendering",],
    },
    {
        title: "Advanced React",
        issuer: "Meta",
        issuedDate: "December 2023",
        link: "https://coursera.org/share/d7b1009ecdb3db7421f52ad7b197af74",
        tags: ["React", "JavaScript", "Frontend Development"],
        provider: 'Coursera',
    },

];

const Certificates = () => {
    const [showAll, setShowAll] = useState(false);
    const visibleCertifications = showAll ? certificationsData : certificationsData.slice(0, 4);

    return (
        <div className="w-full mx-auto p-8 bg-gray-900 text-white  pb-8">
            <h2 className="text-4xl font-bold font-titleFont mb-4 col-span-3 text-center">
                Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
                {visibleCertifications.map((cert, index) => (
                    <div key={index} className="border relative border-gray-400 p-5 rounded-lg  shadow-lg">
                        <LiaCertificateSolid className="absolute text-3xl right-0 top-0 text-gray-400 mx-auto" />
                        <span className="text-xs bg-gray-700 text-white px-2 py-1 rounded-full">{cert.provider}</span>
                        <h3 className="text-white font-semibold mt-3 text-xl">{cert.title}</h3>
                        <p className="text-gray-400 text-md">{cert.issuer}</p>
                        <p className="text-gray-500 text-sm mt-2">📅 Issued {cert.issuedDate}</p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mt-3">
                            {cert.tags.map((tag, i) => (
                                <span key={i} className="text-sm bg-gray-700 text-gray-300 px-2 py-1 rounded-lg">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* View Certificate Button */}
                        <a href={cert.link} target="_blank" rel="noopener noreferrer">

                            <button className="mt-4 text-md flex flex-row  hover:cursor-pointer hover:text-blue-300 transition">
                                <FiExternalLink /> <span className="ml-2">

                                    View Certificate
                                </span>
                            </button>
                        </a>
                    </div>
                ))}
            </div>

            {/* View More Button */}
            <div className="flex justify-center mt-6">
                <button
                    className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition"
                    onClick={() => setShowAll(!showAll)}
                >
                    {showAll ? "Show Less" : "View More"}
                </button>
            </div>
        </div>
    );
};

export default Certificates;
