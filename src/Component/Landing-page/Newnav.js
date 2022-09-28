import React from 'react';
import Logo from '../../Image/Landing/logo.svg';
import { Link } from 'react-router-dom';
import Menu from '../../Image/Landing/menu.png';

function Newnav() {
  return (
    <div className='flex place-content-between'>
      <div className='flex'>
        <div className='w-14 h-16 mt-14 md:ml-24 '>
          <img src={Logo} alt='' />
        </div>
        <div className=' mt-20 ml-3 text-[#FFFFFF]  font-bold text-4xl '>
          Lilies
        </div>
      </div>

      <div>
        <div className='md:hidden w-14 h-14 pt-20 mr-4'>
          <img src={Menu} alt='' />
        </div>
        <div className='md:flex pt-2 md:pt-20  mt-10 font-medium text-2xl '>
          <div className=' text-[#FBDDBB] mr-11 pt-3 '>
            <Link to='/'>
              {' '}
              <button> Home </button>{' '}
            </Link>
          </div>
          <div className='text-[#FFFFFFDE] mr-11 pt-3'>
            {' '}
            <Link to='/Login'>
              {' '}
              <button>Login</button>{' '}
            </Link>
          </div>
          <div className='md:bg-[#E2B887]  w-36 h-14 md:rounded-lg text-[ #00302E] md:text-center pt-3 mr-28'>
            {' '}
            <Link to='/Registration'>
              <button> Sign up </button>{' '}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newnav;
