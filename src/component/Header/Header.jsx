import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
           <Link className='navhome' to={'/'}>Home</Link>
           <Link to={'/login'}>login</Link>
        </div>
    );
};

export default Header;