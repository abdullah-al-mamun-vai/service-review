import { Button, Card } from 'flowbite-react';
import React from 'react';
import { FaArrowRight, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';


const Service = ({ service }) => {
    return (
        <div>
            <div className="">
                <Card className='w-11/12 md:w-full lg:w-full mx-auto'>
                    <div className='relative'>
                        {/* service thumbnail  start  */}
                        <PhotoProvider>
                            <PhotoView key={service._id} src={service.img}>
                                <img src={service.img} className='h-44 w-full' alt="" />
                            </PhotoView>
                        </PhotoProvider>
                        <p className='flex items-center absolute bottom-0 right-0 bg-lime-600 text-white p-3'>{service.rating}<FaStar className='text-amber-500 ml-1' /></p>
                    </div>
                    {/* service title adn description  */}
                    <div className='h-36'>
                        <h5 className="h-28 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {service?.service_name.length > 70 ? service.service_name.slice(0, 70) + '...' : service?.service_name}
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            {service?.description.length > 100 ? service.description.slice(0, 100) + '...' : service.description}
                        </p>
                    </div>
                    <div className='flex justify-between items-center my-3'>
                        <p className='font-semibold capitalize'>Service Fee: {service.price}</p>
                        {/* button start  */}
                        <Button color="success">
                            <Link to={`/services/${service._id}`} className="flex items-center capitalize"> view details <FaArrowRight className='ml-1' /></Link>
                        </Button>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Service;