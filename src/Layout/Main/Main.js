import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Pages/Header/Header';
import LaftsideNav from '../../Pages/LaftsideNav/LaftsideNav';

const Main = () => {
    return (
        <div>
            
            <div class="grid lg:grid-cols-12 md:grid-cols-9 grid-cols-1 gap-2">
                <div className='lg:col-span-3 md:col-span-2'>
                <LaftsideNav></LaftsideNav>
                </div>
                
                <div className='lg:col-span-9 md:col-span-7'>
                     <Header></Header>
                     <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Main;