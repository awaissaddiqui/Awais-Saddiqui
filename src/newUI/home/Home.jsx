import React from "react";
import { BackgroundLines } from "./BackgroundLines";
import Awais from "../../assets/awais.jpg";
import { Button } from "./moving-border"

export function Home() {
    return (

        <BackgroundLines className="pt-12 pb-12 md:pb-0 flex flex-col-reverse items-center justify-center h-full w-full px-10 md:flex-row md:space-x-8 space-y-12 md:space-y-0">
            <div id="home" className="flex flex-col items-center gap-6 md:gap-2 md:items-start text-center md:text-left">
                <h2 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 text-white text-2xl md:text-3xl lg:text-5xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
                    Hello, I'm Awais Saddiqui
                </h2>

                <p className="max-w-xl text-white text-sm md:text-lg text-neutral-700 dark:text-neutral-400">
                    AI-Powered Web Application Developer
                </p>

                <a href="#contact" className="pt-6 md:pt-0">
                    <Button
                        borderRadius="1.85rem"
                        duration={3000}
                        className="text-white border-neutral-200  "
                    >
                        Let’s get started &gt;
                    </Button>
                </a>
            </div>

            {/* Profile Image with Circular Text Animation */}
            <div className="relative flex items-center  justify-center w-48 h-48 md:w-96 md:h-96 z-50">
                {/* Circular Text Above the Image */}
                <svg
                    viewBox="0 0 200 200"
                    className="absolute w-[120%] h-[120%] md:h-[120%] animate-spin-slow z-10"
                >
                    <defs>
                        <path
                            id="circlePath"
                            d="M 100, 100
                   m -85, 0
                   a 85,85 0 1,1 170,0
                   a 85,85 0 1,1 -170,0"
                        />
                    </defs>
                    <text fill="white" fontSize="12" fontWeight="semibold" letterSpacing="2">
                        <textPath href="#circlePath" startOffset="0%">
                            Awais Saddiqui | AI-Powered Web Application Developer | awaissaddiqui |
                        </textPath>
                    </text>
                </svg>

                {/* Profile Image */}
                <img
                    src={Awais}
                    alt="Awais Saddiqui"
                    className="rounded-full w-48 h-48 md:w-96 md:h-96 object-cover shadow-lg relative z-10"
                />
            </div>

        </BackgroundLines>
    );
}
