// import CustomerReviews from './CustomerReviews';
// import Disclaimer from './Disclaimer';
// import PrinterSetup from './PrinterSetup';
// import PrinterSetupMethod from './PrinterSetupMethod';
// import React, { useState, useEffect } from "react";

// const Home = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const slides = [
//     {
//       backgroundImage:
//         "https://img.freepik.com/premium-photo/multi-function-printer-machine_127657-16535.jpg?w=900",
//       title: "How to Set Up Your Printer",
//       subtitle:
//         "Your trusted partner for all printer solutions. Click Printer Setup for step-by-step guidance on how to setup, configure, and register your printer",
//     },
//     {
//       backgroundImage:
//         "https://png.pngtree.com/background/20230614/original/pngtree-printer-is-sitting-in-a-room-with-large-posters-and-prints-picture-image_3520983.jpg",
//       title: "How to Set Up Your Printer",
//       subtitle:
//         "Your trusted partner for all printer solutions. Click Printer Setup for step-by-step guidance on how to setup, configure, and register your printer",
//     },
//     {
//       backgroundImage:
//         "https://png.pngtree.com/thumb_back/fh260/background/20230703/pngtree-3d-render-of-responsive-devices-in-home-office-setup-image_3765800.jpg",
//       title: "How to Set Up Your Printer",
//       subtitle:
//         "Your trusted partner for all printer solutions. Click Printer Setup for step-by-step guidance on how to setup, configure, and register your printer",
//     },
//     {
//       backgroundImage:
//         "https://img.lovepik.com/bg/20240415/3D-Rendered-Modern-Home-Office-Setup-Desk-Lamp-Computer-and_5832401_wh860.jpg!/fw/860",
//       title: "How to Set Up Your Printer",
//       subtitle:
//         "Your trusted partner for all printer solutions. Click Printer Setup for step-by-step guidance on how to setup, configure, and register your printer",
//     },
//     {
//       backgroundImage:
//         "https://png.pngtree.com/background/20230611/original/pngtree-printer-is-located-in-a-room-with-a-montage-of-mountains-picture-image_3166193.jpg",
//       title: "How to Set Up Your Printer",
//       subtitle:
//         "Your trusted partner for all printer solutions. Click Printer Setup for step-by-step guidance on how to setup, configure, and register your printer",
//     },
//     {
//       backgroundImage:
//         "https://png.pngtree.com/thumb_back/fh260/background/20230707/pngtree-sleek-home-office-setup-with-lamp-computer-and-printer-3d-rendered-image_3824090.jpg",
//       title: "How to Set Up Your Printer",
//       subtitle:
//         "Your trusted partner for all printer solutions. Click Printer Setup for step-by-step guidance on how to setup, configure, and register your printer",
//     },
//   ];

//   useEffect(() => {
//     const slideInterval = setInterval(() => {
//       nextSlide();
//     }, 5000);
//     return () => clearInterval(slideInterval);
//   }, []);

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//   };

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <>
//       <main className="relative">
//         <div className="relative w-full h-[400px] overflow-hidden">
//           {/* Background Slide */}
//           <div className="relative h-full">
//             {slides.map((slide, index) => (
//               <div
//                 key={index}
//                 className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
//                   index === currentSlide ? 'opacity-100' : 'opacity-0'
//                 }`}
//                 style={{
//                   backgroundImage: `url(${slide.backgroundImage})`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                 }}
//               >
//                 {/* Overlay for better text visibility */}
//                 <div className="absolute inset-0 bg-black bg-opacity-40"></div>

//                 {/* Text content without container */}
//                 <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
//                   <h1 className="font-extrabold text-5xl mb-4 tracking-wider drop-shadow-md">
//                     {slide.title}
//                   </h1>
//                   <p className="text-xl mb-6 leading-relaxed drop-shadow-md">{slide.subtitle}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </main>
//       <PrinterSetup />
//       <CustomerReviews />
//       <Disclaimer />
//     </>
//   );
// };

// export default Home;





// import Banner from './Banner';


import Contents from './Content';
import CustomerReviews from './CustomerReviews';
import Disclaimer from './Disclaimer';
import Goodlooking from './Goodlooking';
import Header from './Header';
import PrinterSetup from './PrinterSetup';
import { motion, AnimatePresence } from 'framer-motion';
import React, { useState, useEffect } from 'react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      backgroundImage: "https://png.pngtree.com/background/20230611/original/pngtree-large-print-machine-in-a-office-with-a-display-picture-image_3154301.jpg",
      title: "How to Set Up Your Printer",
      subtitle: "Your trusted partner for all printer solutions.",
    },
    {
      backgroundImage: "https://png.pngtree.com/background/20230614/original/pngtree-printing-large-format-printing-in-the-printer-picture-image_3512495.jpg",
      title: "Effortless Printing Solutions",
      subtitle: "Click Printer Setup for step-by-step guidance.",
    },
    {
      backgroundImage: "https://i1.adis.ws/i/canon/pixma-ts7650i_lifestyle-design-63732-16x9_131c730ed73c424ba756bafa638036d8?$media-collection-full-dt-jpg$",
      title: "Seamless Integration",
      subtitle: "Configure and register your printer easily.",
    },
    // Add more slides as needed...
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <>
      <main className="relative">
        <div className="relative w-full h-[400px] overflow-hidden">
          <AnimatePresence>
            {slides.map((slide, index) => (
              index === currentSlide && (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url(${slide.backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white">
                    <h1 className="font-extrabold text-5xl mb-4 tracking-wider drop-shadow-md">
                      {slide.title}
                    </h1>
                    <p className="text-xl mb-6 leading-relaxed drop-shadow-md">{slide.subtitle}</p>
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer" onClick={prevSlide}>
            <svg className="w-8 h-8 text-white hover:text-gray-300 transition" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer" onClick={nextSlide}>
            <svg className="w-8 h-8 text-white hover:text-gray-300 transition" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>

          {/* Pagination Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full cursor-pointer ${currentSlide === index ? 'bg-white' : 'bg-gray-400'}`}
              />
            ))}
          </div>
        </div>
      </main>
      {/* <Contents/>
      <Banner/> */}
      <Header/>
      <Goodlooking/>
    
      
      
      <PrinterSetup />
      
      <CustomerReviews />
     
      <Disclaimer />
     

    </>
  );
};

export default Home;








