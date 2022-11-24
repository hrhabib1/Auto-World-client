import React from 'react';
import {AiOutlineStar} from 'react-icons/ai'

const CarCard = ({ car }) => {
    const {carName, date, imgURL } = car;
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
                <img src={imgURL} alt="carImage" className="rounded-xl h-72" />
            </figure>
            <div className="card-body items-center text-center">
                
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default CarCard;