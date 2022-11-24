import React from 'react';
import {AiOutlineStar} from 'react-icons/ai'

const CarCard = ({ car }) => {
    const {carName, date, imgURL, mileage, location, engine, transmission, price} = car;
    return (
        <div className="card bg-white m-2 px-6 pt-6">
            <div className='flex justify-between items-center'>
              <div>
                   <p>{date}</p>
                   <h1 className='text-2xl'>{carName}</h1>
              </div>
               <button className='bg-red-200 p-2'><AiOutlineStar/></button>
            </div>
            <figure className="mt-4">
                <img src={imgURL} alt="carImage" className="rounded-xl h-60" />
            </figure>
            <div className="my-3">
                <div className='flex justify-between'>
                    <p><span className='text-primary'>Mileage: </span>{mileage}</p>
                    <p><span className='text-primary'>Location: </span>{location}</p>
                </div>
                <div className='flex justify-between'>
                    <p><span className='text-primary'>Engine: </span>{engine}</p>
                    <p><span className='text-primary'>Transmission: </span>{transmission}</p>
                </div>
                <div className='flex justify-between my-3'>
                    <p className='text-2xl font-bold'>{price}</p>
                    <button className='bg-red-500 py-1 px-6 text-white'>More details</button>
                </div>
               
            </div>
        </div>
    );
};

export default CarCard;