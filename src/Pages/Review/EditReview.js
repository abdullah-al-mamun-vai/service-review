import { Button, Label, Modal, TextInput } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../Auth/AuthContext';
import toast, { } from 'react-hot-toast';

const EditReview = () => {
    const navigate = useNavigate()
    const { user } = useContext(UserContext)
    const [myReview, setMyReview] = useState({})
    const router = useParams()
    const { id } = router;
    // get data 
    useEffect(() => {
        fetch(`https://services-server-nu.vercel.app/edit/${id}`)
            .then(res => res.json())
            .then(data => setMyReview(data))
            .catch(err => console.log(err))
    }, [])
    // handleReview edit 
    const handleReview = (e) => {
        e.preventDefault();
        const email = e.target.email.value
        const rating = e.target.rating.value
        const message = e.target.message.value

        const review = {
            email: email,
            rating: rating,
            message: message,
        }
        fetch(`https://services-server-nu.vercel.app/edit/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review),
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Review Successfully Edit!')
                    navigate('/my-reviews')
                }
            })
            .catch(error => console.log(error))

    }
    return (
        <div>
            {/* edit review start  */}
            <div className=" mx-auto flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-900 dark:text-gray-100">
                <form onSubmit={handleReview}>
                    <div className="flex flex-col items-center w-full">
                        <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
                        <div className='w-full mb-2'>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="rating"
                                    value="Your Rating (example: 4.2 or 5)"
                                />
                            </div>
                            <TextInput
                                className='w-full'
                                id="rating"
                                type="text"
                                placeholder="Rating"
                                required={true}
                                name='rating'
                                defaultValue={myReview.rating}
                            />
                        </div>
                        <div className='w-full mb-2'>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="email1"
                                    value="Your email"
                                />
                            </div>
                            <TextInput
                                id="email1"
                                type="email"
                                placeholder="name@email.com"
                                required={true}
                                name='email'
                                defaultValue={user?.email}
                                readOnly
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            <textarea defaultValue={myReview.message} rows="3" placeholder="Message..." name='message' className="p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900" required></textarea>
                            <Button className='mt-3' type="submit">
                                Submit
                            </Button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default EditReview;