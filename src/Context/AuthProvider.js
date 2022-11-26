import React, { createContext, useEffect, useRef, useState } from 'react';

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const [search, setSearch] = useState(' ');
    const [cars, setCars] = useState([])
    const searchref = useRef();
    useEffect(() => {
        fetch(`https://ancient-tundra-23352.herokuapp.com/carOptions?search=${search}`)
            .then(res => res.json())
            .then(data => {setCars(data)})
    }, [search])
    const handleSearch = ()=>{
        setSearch(searchref.current.value);
        console.log(searchref.current.value);

   }
    const info = {cars, searchref, handleSearch};
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
            
        
    );
};

export default AuthProvider;