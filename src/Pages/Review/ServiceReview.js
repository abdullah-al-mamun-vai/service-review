import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';

const ServiceReview = ({ service_id }) => {
    const [reviews, setReview] = useState([]);
    const [current, setCurrent] = useState(false);

    useEffect(() => {
        fetch(`https://services-server-nu.vercel.app/service-review/${service_id}`)
            .then(res => res.json())
            .then(data => {
                setReview(data)
                setCurrent(!current)

            })
            .catch(err => console.log(err))
    }, [current]);
    return (
        <div className='grid lg:grid-cols-2 gap-3 lg:w-4/5 mx-auto'>
            {
                reviews.map(review => <div key={review._id} className=" flex flex-col w-4/5 p-3 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
                    <div className="flex justify-between p-4">
                        <div className="flex space-x-4">
                            <div>
                                <img src={review.reviewer_photo} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                            </div>
                            <div>
                                <h4 className="font-bold">{review.reviewer_name}</h4>
                                <span className="text-xs dark:text-gray-400">2 days ago</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 dark:text-yellow-500">
                            <FaStar className='text-orange-600'></FaStar>
                            <span className="text-xl font-bold">{review.rating}</span>
                        </div>
                    </div>
                    <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                        <p>{review.message}</p>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ServiceReview;