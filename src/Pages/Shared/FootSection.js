import { Footer } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const FootSection = () => {
    return (
        <div className=''>
            {/* footer logo  */}
            <Footer container={true} className="bg-slate-300">
                <div className="w-full text-center">
                    <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                        <Link to={'/'}>

                            <div className='flex items-center overflow-hidden'>
                                <img src="https://i.ibb.co/XyC99s8/attachment-82859174-removebg-preview.png" alt="our logo" className='w-20' />
                                <p className="text-green-900 ml-1 font-bold text-lg">IT Technician</p>
                            </div>
                        </Link>
                        {/* footer link  */}
                        <Footer.LinkGroup>
                            <Footer.Link href="#" className=' text-green-900 ml-2 '>
                                About
                            </Footer.Link>
                            <Footer.Link href="#" className=' text-green-900 ml-2 '>
                                Privacy Policy
                            </Footer.Link>
                            <Footer.Link href="#" className=' text-green-900 ml-2 '>
                                Licensing
                            </Footer.Link>
                            <Footer.Link href="#" className=' text-green-900 ml-2 '>
                                Contact
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <Footer.Divider />
                    {/* footer Copyright area  */}
                    <Footer.Copyright
                        href="#"
                        className='text-green-900'
                        by="reserved by Abdullah AL Mamun"
                        year={2023}
                    />
                </div >
            </Footer >
        </div >
    );
};

export default FootSection;