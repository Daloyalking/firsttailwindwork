import React, {useState} from "react";
import {AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai'
import {BsFillCartFill, BsFillSaveFill} from 'react-icons/bs'
import {TbTruckDelivery} from 'react-icons/tb'
import {MdFavorite, MdHelp} from 'react-icons/md'
import {FaUserFriends, FaWallet} from 'react-icons/fa'


const Navbar=()=>{
    const [nav,setNav]=useState(false)
    return (
        
        <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
            <div className="cursor-pointer">
                <AiOutlineMenu onClick={()=>setNav(!nav)} size={30}/>
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl px-2">Best <span className="font-bold">Eats</span></h1>
            <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
                <p className="bg-black text-white rounded-full p-2">Delivery</p>
                <p className="p-1">Pickup</p>
            </div>

        </div>
        <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
            <AiOutlineSearch size={25}/>
            <input className="bg-transparent p-2 w-full focus:outline-none" type="text" placeholder="Search Here"/>
        </div>
        <button className="border border-black rounded-full px-5 py-2 hidden md:flex items-center">
            <BsFillCartFill size={20} className='mr-1'/> Cart
        </button>

        {/* Overlay */}
        {nav ? <div className="bg-black/50 w-full h-screen fixed z-10 left-0 top-0"></div>:''}
        
        <div className={nav ? 'bg-white fixed w-[300px] h-screen z-10 left-0 top-0 duration-300':'bg-white fixed w-[300px] h-screen z-10 left-[-100%] top-0 duration-300'}>

            <AiOutlineClose onClick={()=>setNav(!nav)} size={30} className="absolute right-4 top-4 cursor-pointer"/>
            <h2 className= "text-2xl p-4">Best <span className="font-bold">Eats</span></h2>
            <nav>
                <ul className="flex flex-col text-gray-500 p-4">
                    <li className="py-4 text-xl flex"><TbTruckDelivery size={25} className="mr-4
                    "/> Orders</li>
                     <li className="py-4 text-xl flex"><MdFavorite size={25} className="mr-4
                    "/> Favorites</li>
                     <li className="py-4 text-xl flex"><FaWallet size={25} className="mr-4
                    "/> Wallet</li>
                     <li className="py-4 text-xl flex"><MdHelp size={25} className="mr-4
                    "/> Help</li>
                     <li className="py-4 text-xl flex"><AiFillTag size={25} className="mr-4
                    "/> Promotions</li>
                     <li className="py-4 text-xl flex"><BsFillSaveFill size={25} className="mr-4
                    "/> Best Ones</li>
                     <li className="py-4 text-xl flex"><FaUserFriends size={25} className="mr-4
                    "/> Invite Friends</li>
                </ul>
            </nav>
        </div>
        </div>
    )
}
export default Navbar