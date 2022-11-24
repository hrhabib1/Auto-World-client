import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className="navbar grid grid-cols-12 border-b-2">
            <div className="border-r-[2px] px-3 lg:col-span-8 md:col-span-6 col-span-6">
                <FaSearch />
                <input type="text" placeholder="Search" className="input border-0 w-full" />
                <button>X</button>
            </div>
            <div className="lg:col-start-9 lg:col-end-13 md:col-start-7 md:col-end-13 col-start-7 col-end-13">
                <div className="grid grid-cols-2 items-center">
                    <div>
                    <Link to='/addRentalCar' className='ml-2 bg-red-200 border-0 py-2 lg:px-4 text-warning sm:px-4'>Sell a car</Link>
                    </div>
                   <div>
                   <Link to='/addRentalCar' className='text-primary bg-gray-200 border-0 py-2 lg:px-4 sm:px-4'>Add rental car</Link>
                   </div>
                </div>

            </div>
        </div>
    );
};

export default Header;