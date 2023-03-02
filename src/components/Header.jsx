import React from 'react';
// images
// import Logo from '../assets/main.svg'
const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* logo */}
          {/* <a href='#'>
            <img src={Logo} alt=""/>
          </a> */}
          <div>
            <h1 className=' lg:text-[48px] font-bold text-gradient lg:mb-2'>
              IYD
            </h1>
            <h1 className='lg:text-[36px] font-bold'>Production</h1>
          </div>
          {/* button */}
          <button className='btn btn-sm'>Work With Me</button>
        </div>
      </div>
    </header>
  )
};

export default Header;
