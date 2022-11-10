import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import UseTitle from '../../TitleHook/TitleHook';
import { UserContext } from '../Auth/AuthContext';

const ReviewForm = ({ service }) => {
    const { service_name, img, price, _id } = service
    const { user } = useContext(UserContext)

    return (
        <div>
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
                            <textarea rows="3" placeholder="Message..." name='message' className="p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900" required></textarea>
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

export default ReviewForm;