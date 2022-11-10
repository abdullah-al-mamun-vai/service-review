import React, { useEffect, useState } from 'react';
import { Button, Card } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaStar } from 'react-icons/fa'
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
const HomeCard = () => {
    const [homeServices, setHomeServices] = useState([])
    useEffect(() => {
        fetch('https://services-server-nu.vercel.app/services')
            .then(res => res.json())
            .then(data => setHomeServices(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <div className='py-8'>
            <div className=' grid lg:grid-cols-3 gap-3'>
                {/* home services section area  */}
                {
                    homeServices.map(service => <div className="" key={service._id}>
                        <Card className='lg:w-full md:w-4/6 mx-auto'>
                            <div className='relative'>
                                {/* services thumbnail  */}
                                <PhotoProvider>
                                    <PhotoView key={service._id} src={service.img}>
                                        <img src={service.img} className='h-44 md:w-full' alt="" />
                                    </PhotoView>
                                </PhotoProvider>
                                <p className='flex items-center absolute bottom-0 right-0 bg-lime-600 text-white p-3'>{service.rating}<FaStar className='text-amber-500 ml-1' /></p>
                            </div>
                            {/* services title and description  */}
                            <div className='h-44'>
                                <h5 className="h-28 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {service?.service_name.length > 70 ? service.service_name.slice(0, 70) + '...' : service?.service_name}
                                </h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    {service?.description.length > 100 ? service.description.slice(0, 100) + '...' : service.description}
                                </p>
                            </div>
                            <div className='flex justify-between items-center'>
                                <p className='font-semibold capitalize'>Service Fee: {service.price}</p>
                                <Button color="success">
                                    <Link to={`services/${service._id}`} className="flex items-center capitalize"> view details <FaArrowRight className='ml-1' /></Link>
                                </Button>
                            </div>
                        </Card>
                    </div>)
                }
                {/* home services area end  */}
            </div>

            <Button className='mx-auto mt-7' color="success">
                <Link to={'/services'} className="flex items-center"> See All <FaArrowRight className='ml-1' /></Link>
            </Button>
        </div >
    );
};

export default HomeCard;