import { FacebookAuthProvider, updateProfile } from 'firebase/auth';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { FaFacebook } from 'react-icons/fa'
import { UserContext } from './AuthContext';
import toast, { } from 'react-hot-toast';
import UseTitle from '../../TitleHook/TitleHook';

const fbUser = new FacebookAuthProvider();
const Sign = () => {
    // title set 
    UseTitle('Sign Up')
    const { handleSign, handleFb } = useContext(UserContext);
    const handleRegis = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const pass = e.target.password.value
        const name = e.target.name.value
        const photo = e.target.photo.value
        handleSign(email, pass)
            .then((res) => {
                updateProfile(res.user, {
                    displayName: name, photoURL: photo
                })
                toast.success('successfully registered');

            })
            .catch(err => console.log(err))
    }

    const handleFace = () => {
        handleFb(fbUser).then(res => {
            const user = res.user;
        }).catch(err => console.log(err))
    }
    return (
        <div className="lg:w-2/5 mx-auto border py-7 px-3">
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

export default Sign;