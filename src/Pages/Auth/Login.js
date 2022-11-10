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
            <form onSubmit={handleLogin} className="flex flex-col gap-4 ">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email1"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        id="email1"
                        type="email"
                        placeholder="name@flowbite.com"
                        required={true}
                        name="email"
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password1"
                            value="Your password"
                        />
                    </div>
                    <TextInput
                        id="password1"
                        type="password"
                        required={true}
                        name="password"
                    />
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">
                        Remember me
                    </Label>
                </div>
                <Button type="submit">
                    Submit
                </Button>
            </form>
            <div>
                <Button onClick={handleFace} className='w-full  mt-2'>
                    Log in with <FaFacebook></FaFacebook>
                </Button>
            </div>
        </div>
    );
};

export default Login;