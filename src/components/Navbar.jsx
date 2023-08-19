import React, { useState } from 'react'
import {AiOutlineMenu,AiOutlineShoppingCart,AiOutlineSearch, AiOutlineClose, AiFillTag} from 'react-icons/ai';
import {BsFillSaveFill} from 'react-icons/bs';
import {TbTruckDelivery} from 'react-icons/tb';
import {FaUserFriends, FaWallet} from 'react-icons/fa';
import {MdFavorite, MdHelp} from 'react-icons/md';

const Navbar = () => {
    const [nav,setNav] = useState(false);
  return (
    <div className='flex items-center justify-between max-w-[1460px] mx-auto p-4'>
        <div className='flex items-center'>
        <div className='cursor-pointer'>
        <AiOutlineMenu onClick={() => setNav(!nav)} size={30} />
        </div>
        <div className='px-2'>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl'>Best <span className='font-bold'>Eats</span></h1>
        </div>
        <div className='hidden lg:flex items-center border rounded-full bg-gray-200'>
        <p className='bg-black text-white border rounded-full p-2'>Delivery</p>
        <p className='px-2'>Pickup</p>
        </div>
    </div>
    <div className=' flex items-center w-[200px] sm:w-[400px] md:w-[550px] shadow border rounded-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'>
        <AiOutlineSearch size={20}/>
    <input className="px-2 appearance-none focus:outline-none w-full" id="username" type="text" placeholder="Search foods...." />
    </div>
    <button className='hidden md:flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full'>
    <AiOutlineShoppingCart size={20}/>
        Cart
        </button>

        {nav ? <div className='bg-black/70 w-full h-screen fixed top-0 left-0 z-10'>

        </div> : null }
  
        <div className= {nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' 
        : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-600'}>
            <AiOutlineClose onClick={() => setNav(!nav)} size={20} className='absolute top-4 right-4 cursor-pointer'/>
            <h1 className='text-2xl p-2'>Best <span className='font-bold'>Eats</span></h1>
            <nav>
                <ul className='flex flex-col p-2'>
                    <li className='flex gap-2 items-center py-4 cursor-pointer'><TbTruckDelivery size ={20} />  Orders</li>
                    <li className='flex gap-2 items-center py-4 cursor-pointer'><MdFavorite size ={20} />  Favourites</li>
                    <li className='flex gap-2 items-center py-4 cursor-pointer'><FaWallet size ={20} />  Wallet</li>
                    <li className='flex gap-2 items-center py-4 cursor-pointer'><MdHelp size ={20} />  Help</li>
                    <li className='flex gap-2 items-center py-4 cursor-pointer'><AiFillTag size ={20} />  Promotions</li>
                    <li className='flex gap-2 items-center py-4 cursor-pointer'><BsFillSaveFill size ={20} />  Best One</li>
                    <li className='flex gap-2 items-center py-4 cursor-pointer'><FaUserFriends size ={20} />  Invite Friends</li>

                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navbar