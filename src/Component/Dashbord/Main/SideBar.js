import React from 'react';
import Logo from '../../../Image/Landing/logo.svg';
import Homeimg from '../../../Image/Dashboard/homeimg.svg';

function SideBar() {
  return (
    <div className=' md:w-[320px] w-full  absolute bg-[#FBFBFB] h-screen'>
      <div className='flex justify-center py-20'>
        <div className='w-[58px] h-[67px]'>
          <img src={Logo} alt='' />
        </div>
        <div className='mt-6 pl-4 trxt-[#00302E] text-3xl font-bold'>
          Lilies
        </div>
      </div>
      <div className='flex w-[267px] h-[50px]  bg-[#EFEFEF] rounded  ml-3 p-4'>
        <span>
          <img src={Homeimg} alt='' />
        </span>
        <div className='font-normal text-base pl-6'>Dashboard</div>
      </div>
    </div>
  );
}

export default SideBar;
