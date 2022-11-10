import React from 'react';
import { useLoaderData } from 'react-router-dom';
import UseTitle from '../../TitleHook/TitleHook';
import Service from './Service';

const AllServices = () => {
   
    // title set 
    UseTitle('Services')

    return (
        <div className='py-8'>
           

        </div >
    );
};

export default AllServices;