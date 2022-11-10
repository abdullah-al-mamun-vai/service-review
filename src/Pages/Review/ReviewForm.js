import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import UseTitle from '../../TitleHook/TitleHook';
import { UserContext } from '../Auth/AuthContext';

const ReviewForm = ({ service }) => {
    const { service_name, img, price, _id } = service
    const { user } = useContext(UserContext)

    return (
        <div>

        </div>
    );
};

export default ReviewForm;