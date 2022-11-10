import { Button, Table } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { UserContext } from '../Auth/AuthContext';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import UseTitle from '../../TitleHook/TitleHook';

const MyReview = () => {
    // title set 
    UseTitle('My Review')
    const { user } = useContext(UserContext)
    const [myReview, setMyReview] = useState([])
    const [current, setCurrent] = useState(false);

    useEffect(() => {
        fetch(`https://services-server-nu.vercel.app/my-reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('service-token')}`
            }
        })
            .then(res => res.json())
            .then(data => setMyReview(data))
            .catch(err => console.log(err))
    }, [user?.email, current])
    const handleDlt = (id) => {
        fetch(`https://services-server-nu.vercel.app/my-reviews/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                toast.success("successfully deleted")
                setCurrent(!current)
            })
            .catch(err => console.log(err))
    }
    return (
        <div className='container mx-auto'>
            <Table hoverable={true}>
                <Table.Head>
                    <Table.HeadCell className="!p-4">

                    </Table.HeadCell>
                    <Table.HeadCell>
                        Product name
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Rating
                    </Table.HeadCell>

                    <Table.HeadCell>
                        Price
                    </Table.HeadCell>
                    <Table.HeadCell>
                        <span className="sr-only">
                            Edit
                        </span>
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {
                        myReview.map(review => <Table.Row key={review._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="!p-4">
                                <button onClick={() => handleDlt(review._id)}> <FaTrash></FaTrash></button>
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {review.service_name}
                            </Table.Cell>
                            <Table.Cell>
                                {review.rating}
                            </Table.Cell>

                            <Table.Cell>

                                {review.price}
                            </Table.Cell>
                            <Table.Cell>
                                <Button>
                                    <Link to={`/edit-reviews/${review._id}`}><FaEdit /></Link>
                                </Button>
                            </Table.Cell>
                        </Table.Row>)
                    }

                </Table.Body>
            </Table>
        </div>
    );
};

export default MyReview;