import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="logo"><h1>Logo</h1></div>
            <div className="link">
                <Link to = '/friend'>Friend</Link>
                <Link to = '/person'>Person</Link>
                <Link to = '/'>Home</Link>
            </div>
        </div>
    );
};

export default Header;