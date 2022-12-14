import { FacebookAuthProvider, updateProfile } from 'firebase/auth';
import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { FaFacebook } from 'react-icons/fa'
import { UserContext } from './AuthContext';
import toast, { } from 'react-hot-toast';
import UseTitle from '../../TitleHook/TitleHook';
import { Link, useNavigate } from 'react-router-dom';

const fbUser = new FacebookAuthProvider();
const Sign = () => {
    const [error, setError] = useState('');

    // title set 
    UseTitle('Sign Up')
    const { handleSign, handleFb } = useContext(UserContext);
    const navigate = useNavigate();
    // handle register funcion 
    const handleRegis = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const pass = e.target.password.value
        const name = e.target.name.value
        const photo = e.target.photo.value
        if (pass.length < 6) {
            toast.error("password must have 6 character")
            return;
        }
        handleSign(email, pass)
            .then((res) => {
                updateProfile(res.user, {
                    displayName: name, photoURL: photo
                })
                toast.success('successfully registered')
                navigate('/')

            })
            .catch(err => setError(err))
    }
    // handle facebook 
    const handleFace = () => {
        handleFb(fbUser).then(res => {
            const user = res.user;
        }).catch(err => console.log(err))
    }
    return (
        <div className="lg:w-2/5 mx-auto border py-7 px-3">
            {/* sing form  */}
            <form onSubmit={handleRegis} className="flex flex-col gap-4 ">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="name"
                            value="Name"
                        />
                    </div>
                    <TextInput
                        id="name"
                        type="text"
                        placeholder="Name"
                        required={true}
                        name='name'
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="photo"
                            value="Photo URL"
                        />
                    </div>
                    <TextInput
                        id="photo"
                        type="text"
                        placeholder="Photo URL"
                        required={true}
                        name='photo'
                    />
                </div>
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
                        placeholder="name@email.com"
                        required={true}
                        name='email'
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
                        name='password'
                    />
                </div>
                <div className="flex items-center gap-2">
                    <Label htmlFor="remember" className='text-red-700'>
                        {error ? 'email-already-in-use' : ''}
                    </Label>
                </div>
                <Button type="submit" color="success" >
                    Submit
                </Button>
            </form>
            <div>
                {/* facebook handle  */}
                <Button onClick={handleFace} color="success" className='w-full  mt-2'>
                    Log in with <FaFacebook className='ml-2'></FaFacebook>
                </Button>
                {/* route another page added */}
                <p className='capitalize font-semibold my-2'>your have already an account, Please <Link className='text-blue-500 font-bold' to={'/login'}>Login</Link></p>
            </div>
        </div>
    );
};

export default Sign;