import { Button, Carousel } from 'flowbite-react';
import React from 'react';

const Slider = () => {
    return (
        <div>
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                <Carousel>
                    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white text-center">
                        {/* slider bg image  */}
                        <img className='relative w-full brightness-50' src="https://i.ibb.co/MfDjYLR/pexels-cottonbro-studio-4705610.jpg" alt="" />
                        {/* slider details added */}
                        <div className='absolute top-1/4 text-white'>
                            <h2 className='lg:text-6xl md:text-5xl font-bold uppercase'>Tehnical support</h2>
                            <p className='my-2 lg:my-3 text-sm sm:text-lg lg:text-lg '>I provide top quality support for various issues <br /> related to setting up internet connections,</p>
                            <Button color="success" className='mx-auto font-bold uppercase'>
                                get started
                            </Button>
                        </div>
                    </div>
                    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white text-center">
                        {/* slider bg image  */}
                        <img className='relative w-full brightness-50' src="https://i.ibb.co/ymTKLGG/pexels-valentine-tanasovich-2588757-1.jpg" alt="" />
                        {/* slider details added */}
                        <div className='absolute top-1/4 text-white'>
                            <h2 className='lg:text-6xl md:text-5xl font-bold uppercase'>Tehnical support</h2>
                            <p className='my-2 lg:my-3 text-sm sm:text-lg lg:text-lg '>I provide top quality support for various issues <br /> related to setting up internet connections,</p>
                            <Button className='mx-auto font-bold uppercase'>
                                get started
                            </Button>
                        </div>
                    </div>
                    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white ">
                        {/* slider bg image  */}
                        <img className='relative w-full brightness-50' src="https://i.ibb.co/ygNt5JF/pexels-miguel-padri-n-3930092-1.jpg" alt="" />
                        {/* slider details added */}
                        <div className='absolute top-1/4 text-white'>
                            <h2 className='lg:text-6xl md:text-5xl font-bold uppercase'>Tehnical support</h2>
                            <p className='my-2 lg:my-3 text-sm sm:text-lg lg:text-lg '>I provide top quality support for various issues <br /> related to setting up internet connections,</p>
                            <Button className='mx-auto font-bold uppercase'>
                                get started
                            </Button>
                        </div>
                    </div>

                </Carousel>
            </div>
        </div>
    );
};

export default Slider;