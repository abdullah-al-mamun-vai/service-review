import { FacebookAuthProvider } from 'firebase/auth';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { FaFacebook } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import UseTitle from '../../TitleHook/TitleHook';
import { UserContext } from './AuthContext';


const fbUser = new FacebookAuthProvider();

const Login = () => {
    // title set 
    UseTitle('Login')
    const navigate = useNavigate();
    const location = useLocation();
    const [error, setError] = useState('');

    let from = location.state?.from?.pathname || '/'
    const { handleFb, handleLog } = useContext(UserContext);
    // handle login 
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const pass = e.target.password.value
        handleLog(email, pass)
            .then(result => {
                const currentUser = {
                    uid: result.user.email
                }

                fetch('https://services-server-nu.vercel.app/jwt', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(currentUser)
                }).then(res => res.json())
                    .then(data => {
                        toast.success("Successfully Log in")
                        navigate(from, { replace: true });
                        localStorage.setItem('service-token', data.token)
                    })
            })
            .catch(err => setError(err))
        e.target.reset();
    }
    // handle  facebook 
    const handleFace = () => {
        handleFb(fbUser).then(res => {

            const user = res.user;
            navigate(from, { replace: true });

        }).catch(err => console.log(err))
    }
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
                    <Label htmlFor="remember" className='text-red-700'>
                        {error ? 'Username or password incorrect' : ''}
                    </Label>
                </div>
                <Button type="submit" color="success">
                    Submit
                </Button>
            </form>
            <div>
                {/* handle facebook  */}
                <Button onClick={handleFace} color="success" className='w-full  mt-2'>
                    Log in with <FaFacebook className='ml-2'></FaFacebook>
                </Button>
                {/* router another page  */}
                <p className='capitalize font-semibold my-2'>don't have account, Please <Link className='text-blue-500 font-bold' to={'/sign'}>Sign Up</Link></p>
            </div>
        </div>
    );
};

export default Login;