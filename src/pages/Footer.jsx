import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="text-white py-20 h-[400px] pt-[14px]" style={{
      background: 'linear-gradient(to right,#4c51bf,#805ad5,#4fd1c5, #63b3ed )',
    }}>
            <div className="container mx-auto px-20 lg:px-20 py-20 flex flex-col gap-10 md:flex-row justify-between border-t border-slate-800">
                {/* <div className="flex">
                    <div className="font-bold text-center">
                        <h1 className="text-[32px] mt-[89px]">Uzair Graphic & Printing</h1>
                    </div>
                </div> */}

                <div>
                    <p>Let us help</p>
                    <div className="flex flex-col text-start mb-4 md:mb-0">
                        {[
                            { name: 'Home', path: '/' },
                            { name: 'About Us', path: '/' },
                            { name: 'Contact Us', path: '/' },
                            { name: 'Services', path: '/' },
                            { name: 'Disclaimer', path: '/' }
                        ].map(({ name, path }) => (
                            <Link
                                key={name}
                                to={path}
                                className="block md:inline-block py-2 hover:text-gray-500"
                            >
                                {name}
                            </Link>
                        ))}
                    </div>
                </div>

                <div>
                    <div className="flex flex-col text-start mb-4 md:mb-0 text-[14px]">
                        {[
                            { name: 'Terms and Conditions', path: '/' },
                            { name: 'Privacy Policy', path: '/' },
                            { name: 'License Agreement', path: '/' },
                            { name: 'Copyright Information', path: '/' },
                            { name: 'Cookies Policy', path: '/' }
                        ].map(({ name, path }) => (
                            <Link
                                key={name}
                                to={path}
                                className="block md:inline-block py-2 hover:text-gray-500"
                            >
                                {name}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col">
                    <p>SOCIAL MEDIA</p>
                    <div className="flex mt-4 gap-3">
                        {[
                            { icon: FaFacebook, bgColor: 'bg-blue-600', link: '#' },
                            { icon: FaInstagram, bgColor: 'bg-pink-600', link: '#' },
                            { icon: FaTwitter, bgColor: 'bg-blue-600', link: '#' },
                            { icon: FaYoutube, bgColor: 'bg-red-600', link: '#' }
                        ].map(({ icon: Icon, bgColor, link }, index) => (
                            <a
                                key={index}
                                href={link}
                                className={`${bgColor} p-1.5 rounded-sm text-white hover:text-gray-500 hover:scale-110`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center py-10 mt-[-103px]">
                <span className="leading-10">© Copyright, All Rights Reserved by infoprintsolution</span>
            </div>
        </footer>
    );
};

export default Footer;
