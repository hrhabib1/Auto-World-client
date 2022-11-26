import React from 'react';

const AddRentalCar = () => {
    return (
        <div className='p-10'>
            <form >
                <h1 className="text-2xl mb-5 text-center">Please add your new rental car: </h1>

                <div className='grid gap-5 grid-cols-1 lg:grid-cols-2 md:grid-cols-1'>

                    <input type="text" name="carName" placeholder='Enter your Car name' className='input input-ghost input-bordered' />

                    <input type="text" name="mileage" placeholder='Enter Car Mileage' className='input input-ghost input-bordered' />

                    <input type="text" name="imgURL" placeholder='Enter your Car photo URL' className='input input-ghost input-bordered' />

                    <input type="text" name="location" placeholder='Enter your Location name' className='input input-ghost input-bordered my-3' required />

                    <input type="text" name="price" placeholder='Enter your Car price' className='input input-ghost input-bordered' required />

                    <input type="text" name="engine" placeholder='Enter your Car Engine name' className='input input-ghost input-bordered my-3' />

                    <input type="text" name="date" placeholder='Enter date' className='input input-ghost input-bordered my-3' />

                    <input type="text" name="transmission" placeholder='Enter your Car Transmission' className='input input-ghost input-bordered my-3' />


                </div>
                <div className='text-center my-5'>
                    <button type="submit" className="btn btn-warning px-10">Submit</button>
                </div>

            </form>
        </div>
    );
};

export default AddRentalCar;