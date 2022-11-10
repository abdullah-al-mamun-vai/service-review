import { Footer } from 'flowbite-react';
import React from 'react';

const FootSection = () => {
    return (
        <div className='container'>
            <Footer container={true}>
                <div className="w-full text-center">
                    <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                        <Footer.Brand
                            href="/"
                            src="https://i.ibb.co/thR8b6T/attachment-82859174.png"
                            alt="my tech Logo"
                            name="my tech"
                            className='uppercase'
                        />
                        <Footer.LinkGroup>
                            <Footer.Link href="#">
                                About
                            </Footer.Link>
                            <Footer.Link href="#">
                                Privacy Policy
                            </Footer.Link>
                            <Footer.Link href="#">
                                Licensing
                            </Footer.Link>
                            <Footer.Link href="#">
                                Contact
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <Footer.Divider />
                    <Footer.Copyright
                        href="#"
                        by="reserved by Abdullah AL Mamun"
                        year={2023}
                    />
                </div>
            </Footer>
        </div>
    );
};

export default FootSection;