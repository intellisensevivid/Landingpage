   
   import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom'; // Import Link from React Router

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items with paths
  const navItems = [
    { id: 1, text: 'Home', path: '/' }, // Set path for each navigation item
    // { id: 2, text: 'About Us', path: '/about' },
    // { id: 3, text: 'Services', path: '/services' },
    { id: 5, text: 'Industries', path: '/industries' },
    { id: 4, text: 'Contact', path: '/contact' },
    // { id: 6, text: 'Blog', path: '/blog' },
  ];

  return (
    <div className='bg-black sticky top-0 z-50 border-b-2 border-yellow-500 flex justify-between items-center md:h-[84px] h-[55px] mx-auto px-[10px] text-white'>
      {/* Logo */}
      <div className='bg-neutral-800 w-fit md:border-r-[8px] md:pt-0 pt-[3px] border-r-[4px] border-yellow-500 h-full pb-[10px] pl-[10px]'>
        <h1 className='md:text-[38px] text-[20px] font-bold p-4  text-yellow-500 mt-[-14px]'>DEX</h1>
        <p className='md:text-[12px] text-[9px] bg-yellow-500 font-bold text-black md:w-[100px] w-fit pl-[10px] px-1 md:mt-[-25px] mt-[-20px] mr-[-40px]'>Technologies</p>
      </div>
      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 hover:bg-yellow-500 rounded-xl m-2 cursor-pointer duration-300 text-[18px] font-[500] hover:text-black'
          >
            <Link to={item.path}>{item.text}</Link> {/* Use Link component */}
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] linear duration-300'
            : 'ease-in-out w-[60%] duration-300 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <div className='bg-neutral-800 w-[2] h-[100px] border-r-[2px] border-yellow-500 pb-[10px] pl-[10px]'>
          <h1 className='md:text-[38px] text-[26px] font-bold p-4  text-yellow-500 mt-[-14px]'>Bematron</h1>
          <p className='text-[12px] bg-yellow-500 font-bold text-black w-[100px] pl-[10px] px-1 md:mt-[-25px] mt-[-20px] mr-[-40px]'>Technologies</p>
        </div>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl hover:bg-yellow-500 duration-300 font-bold hover:text-black cursor-pointer border-gray-600'
          >
            <Link to={item.path}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;





//   import React, { useState } from 'react';
// import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
// import { Link } from 'react-router-dom'; // Import Link from React Router

// const Navbar = () => {
//   // State to manage the navbar's visibility
//   const [nav, setNav] = useState(false);

//   // Toggle function to handle the navbar's display
//   const handleNav = () => {
//     setNav(!nav);
//   };

//   // Array containing navigation items with paths
//   const navItems = [
//     { id: 1, text: 'Home', path: '/' }, // Set path for each navigation item
//     { id: 2, text: 'About Us', path: '/about' },
//     { id: 3, text: 'Services', path: '/services' },
//     { id: 4, text: 'Industries', path: '/industries' },
//   ];

//   return (
//     <div className='bg-black sticky top-0 z-50 border-b-2 border-yellow-500 flex justify-between items-center md:h-[84px] h-[65px] mx-auto px-[10px] text-white'>
//       {/* Logo */}
//       <div className='bg-neutral-800 w-[2] border-r-[8px] border-yellow-500 h-full pb-[10px] pl-[10px]'>
//         <h1 className='md:text-[38px] text-[26px] font-bold p-4  text-yellow-500 mt-[-14px]'>Bematron</h1>
//         <p className='text-[12px] bg-yellow-500 font-bold text-black w-[100px] pl-[10px] px-1 md:mt-[-25px] mt-[-20px] mr-[-40px]'>Technologies</p>
//       </div>
//       {/* Desktop Navigation */}
//       <ul className='hidden md:flex items-center justify-center flex-1'>
//         {navItems.map(item => (
//           <li
//             key={item.id}
//             className='p-4 hover:bg-yellow-500 rounded-xl m-2 cursor-pointer duration-300 text-[18px] font-bold hover:text-black'
//           >
//             <Link to={item.path}>{item.text}</Link> {/* Use Link component */}
//           </li>
//         ))}
//       </ul>

//       {/* SignUp Button */}
//       <Link to="/signup" className="hidden md:block p-4 hover:bg-yellow-500 rounded-xl m-2 cursor-pointer duration-300 text-[18px] font-bold hover:text-black">
//         Sign Up
//       </Link>

//       {/* Mobile Navigation Icon */}
//       <div onClick={handleNav} className='block md:hidden'>
//         {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
//       </div>

//       {/* Mobile Navigation Menu */}
//       <ul
//         className={
//           nav
//             ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] linear duration-300'
//             : 'ease-in-out w-[60%] duration-300 fixed top-0 bottom-0 left-[-100%]'
//         }
//       >
//         {/* Mobile Logo */}
//         <div className='bg-neutral-800 w-[2] h-[100px] border-r-[2px] border-yellow-500 pb-[10px] pl-[10px]'>
//           <h1 className='md:text-[38px] text-[26px] font-bold p-4  text-yellow-500 mt-[-14px]'>Bematron</h1>
//           <p className='text-[12px] bg-yellow-500 font-bold text-black w-[100px] pl-[10px] px-1 md:mt-[-25px] mt-[-20px] mr-[-40px]'>Technologies</p>
//         </div>

//         {/* Mobile Navigation Items */}
//         {navItems.map(item => (
//           <li
//             key={item.id}
//             className='p-4 border-b rounded-xl hover:bg-yellow-500 duration-300 font-bold hover:text-black cursor-pointer border-gray-600'
//           >
//             <Link to={item.path}>{item.text}</Link>
//           </li>
//         ))}
//         {/* SignUp Button for Mobile */}
//         <li className="p-4 border-b rounded-xl hover:bg-yellow-500 duration-300 font-bold hover:text-black cursor-pointer border-gray-600">
//           <Link to="/signup">Sign Up</Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Navbar;








//  import React, { useState } from 'react';
// import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
// import { Link } from 'react-router-dom'; // Import Link from React Router

// const Navbar = () => {
//   // State to manage the navbar's visibility
//   const [nav, setNav] = useState(false);

//   // Toggle function to handle the navbar's display
//   const handleNav = () => {
//     setNav(!nav);
//   };

//   // Array containing navigation items with paths
//   const navItems = [
//     { id: 1, text: 'Home', path: '/' }, // Set path for each navigation item
//     { id: 2, text: 'About Us', path: '/about' },
//     { id: 3, text: 'Services', path: '/services' },
//     { id: 4, text: 'Industries', path: '/industries' },
//   ];

//   return (
//     <div className='bg-black sticky top-0 z-50 border-b-2 border-yellow-500 flex justify-between items-center md:h-[84px] h-[65px] mx-auto px-[10px] text-white'>
//       {/* Logo */}
//       <div className='bg-neutral-800 w-[2] border-r-[8px] border-yellow-500 h-full pb-[10px] pl-[10px]'>
//         <h1 className='md:text-[38px] text-[26px] font-bold p-4  text-yellow-500 mt-[-14px]'>Bematron</h1>
//         <p className='text-[12px] bg-yellow-500 font-bold text-black w-[100px] pl-[10px] px-1 md:mt-[-25px] mt-[-20px] mr-[-40px]'>Technologies</p>
//       </div>
//       {/* Desktop Navigation */}
//       <ul className='hidden md:flex items-center justify-center flex-1'>
//         {navItems.map(item => (
//           <li
//             key={item.id}
//             className='p-4 hover:bg-yellow-500 rounded-xl m-2 cursor-pointer duration-300 text-[18px] font-bold hover:text-black'
//           >
//             <Link to={item.path}>{item.text}</Link> {/* Use Link component */}
//           </li>
//         ))}
//       </ul>

//       {/* Signup Button (Visible only on larger screens when nav is opened) */}
//       <button className={`md:hidden mr-4 ${nav ? 'block' : 'hidden'} bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded`}>
//         Sign Up
//       </button>

//       {/* Mobile Navigation Icon */}
//       <div onClick={handleNav} className='block md:hidden'>
//         {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
//       </div>

//       {/* Mobile Navigation Menu */}
//       <ul
//         className={
//           nav
//             ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] linear duration-300'
//             : 'ease-in-out w-[60%] duration-300 fixed top-0 bottom-0 left-[-100%]'
//         }
//       >
//         {/* Mobile Logo */}
//         <div className='bg-neutral-800 w-[2] h-[100px] border-r-[2px] border-yellow-500 pb-[10px] pl-[10px]'>
//           <h1 className='md:text-[38px] text-[26px] font-bold p-4  text-yellow-500 mt-[-14px]'>Bematron</h1>
//           <p className='text-[12px] bg-yellow-500 font-bold text-black w-[100px] pl-[10px] px-1 md:mt-[-25px] mt-[-20px] mr-[-40px]'>Technologies</p>
//         </div>

//         {/* Mobile Navigation Items */}
//         {navItems.map(item => (
//           <li
//             key={item.id}
//             className='p-4 border-b rounded-xl hover:bg-yellow-500 duration-300 font-bold hover:text-black cursor-pointer border-gray-600'
//           >
//             <Link to={item.path}>{item.text}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Navbar;


