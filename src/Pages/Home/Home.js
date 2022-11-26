import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import CarCard from './CarCard';

const Home = () => {
    const {cars} = useContext(AuthContext);
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