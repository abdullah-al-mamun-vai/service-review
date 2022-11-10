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
         
        </div >
    );
};

export default HomeCard;