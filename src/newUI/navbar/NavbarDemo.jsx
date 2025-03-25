import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./navbar-menu";
import { cn } from "../utils";
import ai from "../../assets/skills/ai.jpg";
import backend from "../../assets/skills/backend.png";

import database from "../../assets/skills/database.png";
import deploy from "../../assets/skills/deploy.png";

export function NavbarDemo() {
    return (
        <div className="relative w-full flex items-center justify-center">
            <Navbar className="top-2" />
        </div>
    );
}

function Navbar({ className }) {
    const [active, setActive] = useState(null);

    return (
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="Recent Work">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="#fraudshield">Fraud Shield</HoveredLink>
                        <HoveredLink href="#learning">E-Learning</HoveredLink>
                        <HoveredLink href="#moventure">Moventure</HoveredLink>
                        <HoveredLink href="#testsolz">Testsolz</HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Services">
                    <div className="grid grid-cols-2 gap-10 p-4 text-sm">
                        <ProductItem
                            title="AI-Powered Web Applications"
                            href="#ai-web"
                            src={ai}
                            description="Leverage AI to build intelligent, automated web applications tailored to your needs."
                        />
                        <ProductItem
                            title="Backend Development"
                            href="#backend-web"
                            src={backend}
                            description="Robust and scalable backend solutions to power your applications with efficiency."
                        />

                        <ProductItem
                            title="Database Management"
                            href="#database"
                            src={database}
                            description="Optimized database solutions ensuring security and high availability."
                        />
                        <ProductItem
                            title="Deployment & DevOps"
                            href="#deploy"
                            src={deploy}
                            description="Streamlined deployment pipelines and infrastructure management for reliability."
                        />
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Get In Touch">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink target="_blank" href="https://www.upwork.com/freelancers/~011fe6ce84d3da23e7?mp_source=share">Upwork</HoveredLink>
                        <HoveredLink target="_blank" href="https://www.linkedin.com/in/awais-saddiqui/">LinkedIn</HoveredLink>
                        <HoveredLink target="_blank" href="https://www.fiverr.com/s/YRaZ4Pl">Fiverr</HoveredLink>
                        <HoveredLink target="_blank" href="https://github.com/awaissaddiqui">GitHub</HoveredLink>
                    </div>
                </MenuItem>
            </Menu>
        </div>
    );
}
