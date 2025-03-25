import React from 'react';

const BuyMeCoffee = () => {
    return (
        <div>
            <div class="py-8 px-4 sm:px-6 lg:px-8">
                <div class="max-w-7xl mx-auto">
                    <div class="max-w-3xl mx-auto text-center">
                        <h2 class="text-3xl font-extrabold text-gray-900  sm:text-4xl">
                            Enjoying my content?
                        </h2>
                        <p class="mt-3 text-xl text-gray-500 dark:text-gray-400 sm:mt-4">
                            Consider buying me a coffee to support my work!
                        </p>
                        <div class="mt-8">
                            <a href="buymeacoffee.com/awaissaddiqui" target='_blank'>
                                <img class="mx-auto h-14" src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me a Coffee" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuyMeCoffee;