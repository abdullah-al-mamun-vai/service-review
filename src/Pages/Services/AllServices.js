import React from 'react';
import { useLoaderData } from 'react-router-dom';
import UseTitle from '../../TitleHook/TitleHook';
import Service from './Service';

const AllServices = () => {
    const services = useLoaderData();

    // title set 
    UseTitle('Services')

    return (
        <div className='py-8'>
            <div className=' grid grid-cols-3 gap-3'>
                {
                    services.map(service => <Service service={service} key={service._id}></Service>)
                }
            </div>


        </div >
    );
};

export default AllServices;