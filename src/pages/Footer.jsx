// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

// const Footer = () => {
//     return (
//         <footer className="text-white py-20 h-[400px] pt-[14px]" style={{
//       background: 'linear-gradient(to right,#4c51bf,#805ad5,#4fd1c5, #63b3ed )',
//     }}>
//             <div className="container mx-auto px-20 lg:px-20 py-20 flex flex-col gap-10 md:flex-row justify-between border-t border-slate-800">
//                 {/* <div className="flex">
//                     <div className="font-bold text-center">
//                         <h1 className="text-[32px] mt-[89px]">Uzair Graphic & Printing</h1>
//                     </div>
//                 </div> */}

//                 <div>
//                     <p>Let us help</p>
//                     <div className="flex flex-col text-start mb-4 md:mb-0">
//                         {[
//                             { name: 'Home', path: '/' },
//                             { name: 'About Us', path: '/' },
//                             { name: 'Contact Us', path: '/' },
//                             { name: 'Services', path: '/' },
//                             { name: 'Disclaimer', path: '/' }
//                         ].map(({ name, path }) => (
//                             <Link
//                                 key={name}
//                                 to={path}
//                                 className="block md:inline-block py-2 hover:text-gray-500"
//                             >
//                                 {name}
//                             </Link>
//                         ))}
//                     </div>
//                 </div>

//                 <div>
//                     <div className="flex flex-col text-start mb-4 md:mb-0 text-[14px]">
//                         {[
//                             { name: 'Terms and Conditions', path: '/' },
//                             { name: 'Privacy Policy', path: '/' },
//                             { name: 'License Agreement', path: '/' },
//                             { name: 'Copyright Information', path: '/' },
//                             { name: 'Cookies Policy', path: '/' }
//                         ].map(({ name, path }) => (
//                             <Link
//                                 key={name}
//                                 to={path}
//                                 className="block md:inline-block py-2 hover:text-gray-500"
//                             >
//                                 {name}
//                             </Link>
//                         ))}
//                     </div>
//                 </div>

//                 <div className="flex flex-col">
//                     <p>SOCIAL MEDIA</p>
//                     <div className="flex mt-4 gap-3">
//                         {[
//                             { icon: FaFacebook, bgColor: 'bg-blue-600', link: '#' },
//                             { icon: FaInstagram, bgColor: 'bg-pink-600', link: '#' },
//                             { icon: FaTwitter, bgColor: 'bg-blue-600', link: '#' },
//                             { icon: FaYoutube, bgColor: 'bg-red-600', link: '#' }
//                         ].map(({ icon: Icon, bgColor, link }, index) => (
//                             <a
//                                 key={index}
//                                 href={link}
//                                 className={`${bgColor} p-1.5 rounded-sm text-white hover:text-gray-500 hover:scale-110`}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                             >
//                                 <Icon size={18} />
//                             </a>
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             <div className="flex items-center justify-center py-10 mt-[-103px]">
//                 <span className="leading-10">© Copyright, All Rights Reserved by infoprintsolution</span>
//             </div>
//         </footer>
//     );
// };

// export default Footer;



import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faInstagram, faTwitter, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom'; // Replace Next.js Link with React Router Link

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 text-sm">
      {/* Upper part with links */}
      <div className="max-w-7xl mx-auto py-10 grid grid-cols-2 md:grid-cols-5 gap-8 2xl:ml-[179px] xl:ml-[133px]">
        {/* First Column */}
        <div>
          <ul>
            <li className="mb-2 text-white font-semibold">About Us</li>
            <li className="mb-2 hover:text-gray-400 cursor-pointer">Contact HP</li>
            <li className="mb-2 hover:text-gray-400 cursor-pointer">Careers</li>
            <li className="mb-2 hover:text-gray-400 cursor-pointer">Investor relations</li>
            <li className="mb-2 hover:text-gray-400 cursor-pointer">Sustainable impact</li>
            <li className="mb-2 hover:text-gray-400 cursor-pointer">Diversity, Equity and Inclusion</li>
            <li className="mb-2 hover:text-gray-400 cursor-pointer">Press center</li>
            <li className="mb-2 hover:text-gray-400 cursor-pointer">The Garage</li>
            <li className="mb-2 hover:text-gray-400 cursor-pointer">HP Store Newsletter</li>
            <li className="mb-2 hover:text-gray-400 cursor-pointer">HP Printables Newsletter</li>
          </ul>
        </div>

        {/* Second Column */}
        <div>
          <ul>
            <li className="mb-2 text-white font-semibold">Ways to buy</li>
            <li className="mb-2 hover:text-gray-400 cursor-pointer">Shop online</li>
            <li className="mb-2 hover:text-gray-400 cursor-pointer">Call an HP rep</li>
            <li className="mb-2 hover:text-gray-400 cursor-pointer">Find a reseller</li>
            <li className="mb-2 hover:text-gray-400 cursor-pointer">Enterprise store</li>
            <li className="mb-2 hover:text-gray-400 cursor-pointer">Public sector purchasing</li>
          </ul>
        </div>

        {/* Third Column */}
        <div>
          <ul>
            <li className="mb-2 text-white font-semibold">Support</li>
            <Link to="/privacypolicy" className="mb-2 hover:text-gray-400 cursor-pointer">Privacy Policy</Link>
            <br/>
            <Link to="/Disclaimer" className="mb-2 hover:text-gray-400 cursor-pointer">Disclaimer</Link>
            <li className="mb-2 hover:text-gray-400 cursor-pointer">Download drivers</li>
            <li className="mb-2 hover:text-gray-400 cursor-pointer">Register your product</li>
            <li className="mb-2 hover:text-gray-400 cursor-pointer">Authorized service providers</li>
            <li className="mb-2 hover:text-gray-400 cursor-pointer">Check repair status</li>
            <li className="mb-2 hover:text-gray-400 cursor-pointer">Fraud alert</li>
            <li className="mb-2 hover:text-gray-400 cursor-pointer">Security Center</li>
          </ul>
        </div>

        {/* Fourth Column */}
        <div>
          <ul>
            <li className="mb-2 text-white font-semibold">HP Partners</li>
            <li className="mb-2 hover:text-gray-400 cursor-pointer">HP Amplify Partner Program</li>
            <li className="mb-2 hover:text-gray-400 cursor-pointer">HP Partner Portal</li>
            <li className="mb-2 hover:text-gray-400 cursor-pointer">Developers</li>
          </ul>
        </div>

        {/* Fifth Column: Stay Connected */}
        <div>
          <ul>
            <li className="mb-2 text-white font-semibold">Stay connected</li>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-400 text-3xl">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="#" className="text-white hover:text-gray-400 text-3xl">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" className="text-white hover:text-gray-400 text-3xl">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="text-white hover:text-gray-400 text-3xl">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="text-white hover:text-gray-400 text-3xl">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a href="#" className="text-white hover:text-gray-400 text-3xl">
                <FontAwesomeIcon icon={faTiktok} />
              </a>
            </div>
          </ul>
        </div>
      </div>

      {/* Lower part with terms and conditions */}
      <div className="border-t border-gray-600 py-4 text-center">
        <p className="text-[17px] text-gray-400">
          © Copyright, All Rights Reserved by infoprintsolution
        </p>
      </div>
    </footer>
  );
};

export default Footer;
