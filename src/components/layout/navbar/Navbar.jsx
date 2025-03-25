import React from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
    { name: 'Home', href: '#home', current: true },
    { name: 'Recent work', href: '#work', current: false },
    { name: 'Services', href: '#service', current: false },
    { name: 'Get In Touch', href: '#contact', current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
    return (
        <Disclosure as="nav" className="bg-bgNav md:mx-20 xl:mx-30 rounded-b-lg">
            <div className="mx-auto max-w-7xl md:flex md:justify-around sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    {/* Hamburger menu button for mobile and tablet */}
                    <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                        </DisclosureButton>
                    </div>

                    <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                        <div className="hidden md:block md:ml-6">
                            <div className="flex justify-center space-x-6 md:space-x-20">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        aria-current={item.current ? 'page' : undefined}
                                        className="text-textColor font-navbarFont hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="absolute inset-y-0 right-0 flex items-center space-x-2 md:space-x-5 pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
                        <a href="https://www.upwork.com/freelancers/~011fe6ce84d3da23e7?mp_source=share" target="_blank" rel="noopener noreferrer">
                            <img src="https://img.icons8.com/?size=100&id=HKdmFbFm7xQV&format=png&color=000000" alt="Freelancer upwork awais" aria-hidden="true" className="h-8 w-8" />
                        </a>
                        <a href="https://github.com/awaissaddiqui" target="_blank" rel="noopener noreferrer">
                            <img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="Github awais" aria-hidden="true" className="h-8 w-8" />
                        </a>
                        <a href="https://www.linkedin.com/in/awais-saddiqui-69b80020a/" target="_blank" rel="noopener noreferrer">
                            <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="linkedin awais" aria-hidden="true" className="h-8 w-8" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Mobile and tablet menu */}
            <DisclosurePanel className="md:hidden">
                <div className="flex flex-col items-center space-y-2 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                                item.current ? 'text-textColor' : 'text-textColor hover:bg-gray-700 hover:text-white',
                                'block rounded-md px-3 py-2 text-base font-medium',
                            )}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    );
};

export default Navbar;
