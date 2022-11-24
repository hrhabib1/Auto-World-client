import React, { useEffect, useState } from 'react';
import CarCard from './CarCard';

const Home = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 m-2'>
            {
                        cars.slice(0).reverse().map(car => <CarCard
                            key={car.carName}
                            car={car}
                        ></CarCard>)
                    }
        </div>
    );
};

export default Home;