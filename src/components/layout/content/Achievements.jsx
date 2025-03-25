import React from "react";
import { items } from "../../../data/achiveItems.js";

const AchievementPage = () => {
    return (
        <div className="bg-gray-50 flex flex-col items-center p-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-10">
                ACHIEVEMENTS
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-2 w-full">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`relative flex flex-col items-center ${item.color} text-white rounded-xl shadow-lg p-6`}
                    >
                        {/* Icon */}
                        <div className="absolute -top-10 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                            <img
                                src={item.icon}
                                alt={item.title}
                                className="w-16 h-16 object-contain"
                            />
                        </div>

                        {/* Content*/}
                        <div className="w-full pt-16 pb-6 px-6 text-center flex-grow">
                            <h2 className="text-lg font-semibold">{item.title}</h2>
                            <p className="mt-4 text-md text-gray-200 text-justify tracking-tight break-words leading-6">

                                {item.para}
                            </p>
                        </div>

                        {/* Button - Centered & Styled */}
                        <div className="w-full p-4 flex justify-center">
                            <a
                                href={item.link}
                                target='_blank'
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center font-navbarFont bg-primary text-white py-3 px-8 rounded-md shadow-lg hover:bg-green-700 transition duration-300 w-full md:w-auto"
                            >
                                Read more
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AchievementPage;
