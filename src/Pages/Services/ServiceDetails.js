import { Button, Card } from 'flowbite-react';
import React, { useContext } from 'react';
import { FaArrowRight, FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import UseTitle from '../../TitleHook/TitleHook';
import { UserContext } from '../Auth/AuthContext';
import ReviewForm from '../Review/ReviewForm';
import ServiceReview from '../Review/ServiceReview';

const ServiceDetails = () => {
    //  title set 
    UseTitle('Service Details')
    const { user } = useContext(UserContext);
    const service = useLoaderData();
    return (
        <div className='container mx-auto'>
            <Card className='w-4/6 mx-auto'>
                <div className='relative w-4/6 mx-auto'>
                    {/* header image  */}
                    <img src={service.img} className='w-full' alt="" />
                    <p className='flex items-center absolute bottom-0 right-0 bg-lime-600 text-white p-3'>{service.rating}<FaStar className='text-amber-500 ml-1' /></p>
                </div>
                {/* service name and full desciption  */}
                <div className=''>
                    <h5 className="h-28 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {service.service_name}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        {service?.description}
                    </p>
                </div>
                <div className='flex justify-between items-center'>
                    <p className='font-semibold capitalize'>Service Fee: {service.price}</p>
                    <Button color="success">
                        <Link to={`/services/${service._id}`} className="flex items-center capitalize"> view details <FaArrowRight className='ml-1' /></Link>
                    </Button>
                </div>
            </Card>

            <ServiceReview service_id={service._id} key={service._id}></ServiceReview>

            {/* review form start  */}
            {
                user ? <><ReviewForm service={service} key={service._id}></ReviewForm></> : <p className='text-center text-2xl font-bold'> Please login to add a review.<Link className='underline text-blue-600' to={'/login'}>Login</Link></p>
            }
        </div>
    );
};

export default ServiceDetails;