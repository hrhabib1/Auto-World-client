import React from 'react';
import { SiSpeedtest } from 'react-icons/si';
import { GiBattery0 } from 'react-icons/gi';
import { MdLocationPin } from 'react-icons/md';
import { FaWrench } from 'react-icons/fa';
import { IoIosColorPalette } from 'react-icons/io';
import { AiOutlinePlus, AiOutlineDollarCircle, AiOutlineMinus, AiOutlineSetting } from 'react-icons/ai';
const LaftsideNav = () => {
    return (
        <div className='bg-gray border-r-[2px] lg:h-screen md:h-screen flex flex-col'>
            <div className='py-4 px-6 border-b-2 flex items-center'>
                <SiSpeedtest className='text-red-400 text-3xl' />
                <h1 className='text-xl font-bold ml-2'>AUTO WORLD</h1>
            </div>
            <div className='py-4 px-6 md:px-0 border-b-2 flex justify-between items-center'>
                <div className='flex items-center'>
                    <GiBattery0 className='text-black text-xl' />
                    <h1 className='font-bold mx-2'>Basic information</h1>
                </div>
                <AiOutlinePlus className='text-black text-xl' />
            </div>
            <div className='border-b-2'>
                <div className='py-4 px-6 flex justify-between items-center'>
                    <div className='flex items-center'>
                        <AiOutlineDollarCircle className='text-black text-xl' />
                        <h1 className='font-bold mx-2'>car cost</h1>
                    </div>
                    <AiOutlineMinus className='text-black text-xl' />
                </div>
                <div className='flex justify-around md:flex-col lg:flex-row my-3'>
                    <div className='bg-white py-3 px-10 m-2'>
                        <p className='text-success'>Price from:</p>
                        <p className='font-bold'>$ 21000</p>
                    </div>
                    <div className='bg-white py-3 px-10 m-2'>
                        <p className='text-success'>Price up to:</p>
                        <p className='font-bold'>$ 34000</p>
                    </div>
                </div>
                <div className='px-6 text-red-600'>
                <div className="w-full flex justify-between text-xs px-2">
                        <span>|</span>
                        <span>|</span>
                        <span>|</span>
                        <span>|</span>
                        <span>|</span>
                    </div>
                    <input type="range" min="0" max="100" value="25" className="range" step="25" />
                    
                </div>
                <div className='bg-white flex mx-10 my-2 p-3'>
                    <input type="checkbox" name="" id="" className='mr-3 ' />
                    <p>Possible bargaining</p>
                </div>
                <div className='bg-white flex mx-10 my-2 p-3'>
                    <input type="checkbox" name="" id="" className='mr-3 ' />
                    <p>Exchange for real estate</p>
                </div>
                <div className='bg-white flex mx-10 my-2 p-3'>
                    <input type="checkbox" name="" id="" className='mr-3 ' />
                    <p>Car exchange</p>
                </div>
            </div>
            <div className='py-4 px-6 border-b-2 flex justify-between items-center'>
                <div className='flex items-center'>
                    <MdLocationPin className='text-black text-xl' />
                    <h1 className='font-bold mx-2'>Search region</h1>
                </div>
                <AiOutlinePlus className='text-black text-xl' />
            </div>
            <div className='py-4 px-6 border-b-2 flex justify-between items-center'>
                <div className='flex items-center'>
                    <FaWrench className='text-xl' />
                    <h1 className='font-bold mx-2'>Vehice condition</h1>
                </div>
                <AiOutlinePlus className='text-xl' />
            </div>
            <div className='py-4 px-6 border-b-2 flex justify-between items-center'>
                <div className='flex items-center'>
                    <AiOutlineSetting className='text-black text-xl' />
                    <h1 className='font-bold mx-2'>Add. characteristics</h1>
                </div>
                <AiOutlinePlus className='text-black text-xl' />
            </div>
            <div className='py-4 px-6 border-b-2 flex justify-between items-center'>
                <div className='flex items-center'>
                    <IoIosColorPalette className='text-black text-xl' />
                    <h1 className='font-bold mx-2'>Color</h1>
                </div>
                <AiOutlinePlus className='text-black text-xl' />
            </div>
            <div className='py-4 px-6'>
                <div className='flex items-center'>
                    <p className='text-success font-bold mr-2'>Found cars: </p>
                    <strong> 12 321</strong>
                </div>
                <div className='flex justify-center items-end my-3'>
                    <p className='bg-red-500 py-2 px-16 text-white'>Show</p>
                    <button className='bg-red-200 p-2 ml-5 md:ml-2 lg:ml-5'>X</button>
                </div>
            </div>

        </div>
    );
};

export default LaftsideNav;