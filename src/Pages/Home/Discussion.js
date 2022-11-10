import { Button } from 'flowbite-react';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Discussion = () => {
    return (
        <div>
            <div className="overflow-hidden bg-green-700">
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    {/* Discussion header  */}
                    <div className="flex flex-col items-center justify-between xl:flex-row">
                        <div className="w-full max-w-xl mb-12 xl:pr-16 xl:mb-0 xl:w-7/12">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                Providing your business with a quality IT service is our passion.
                            </h2>
                            {/* Discussion details  */}
                            <p className="max-w-xl mb-4 text-base text-white md:text-lg">
                                When you work with passion you get to drive excellence and you can see continual improvement in the customer service sector. With passion you can easily win the hearts of customers by providing them extraordinary service 24/7. The simplest definition of passion in customer service is remaining enthusiastic and committed to what you are doing no matter whether you reach your target or not. So how does passion drive customer service?
                            </p>
                            <Button color="light" className='flex items-center  text-black'>
                                <Link to={'/blog'}>Learn More</Link> <FaArrowRight className='ml-1' />
                            </Button>
                        </div>
                        <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                            <div className="relative">
                                {/* Discussion image  */}
                                <div className="relative bg-white rounded shadow-2xl p-7 sm:p-10">
                                    <img src="https://i.ibb.co/ymTKLGG/pexels-valentine-tanasovich-2588757-1.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Discussion;