import { Footer } from 'flowbite-react';
import React from 'react';

const FootSection = () => {
    return (
        <div className=''>
            {/* footer logo  */}
            <Footer container={true} className="bg-slate-300">
                <div className="w-full text-center">
                    <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                        <Footer.Brand
                            href="/"
                            src="https://i.ibb.co/XyC99s8/attachment-82859174-removebg-preview.png"
                            alt="my tech Logo"
                            name=" IT Technician"
                            className='capitalize text-green-900'
                        />
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
                </div>
            </Footer>
        </div>
    );
};

export default FootSection;