import { FacebookAuthProvider } from 'firebase/auth';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaFacebook } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import UseTitle from '../../TitleHook/TitleHook';
import { UserContext } from './AuthContext';


const fbUser = new FacebookAuthProvider();

const Login = () => {

    return (
        <div className="lg:w-2/5 mx-auto border py-7 px-3">

        </div>
    );
};

export default Login;