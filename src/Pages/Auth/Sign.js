import { FacebookAuthProvider, updateProfile } from 'firebase/auth';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { FaFacebook } from 'react-icons/fa'
import { UserContext } from './AuthContext';
import toast, { } from 'react-hot-toast';
import UseTitle from '../../TitleHook/TitleHook';

const fbUser = new FacebookAuthProvider();
const Sign = () => {

    return (
        <div className="lg:w-2/5 mx-auto border py-7 px-3">

        </div>
    );
};

export default Sign;