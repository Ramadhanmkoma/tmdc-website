import React from 'react';
import logo from '/assets/images/community-log.png';

const Header = () => {
    return (
        <header className="sticky top-0 w-full p-4">
            <nav className="relative flex justify-between items-center my-navbar">
                <div className="container mx-auto flex flex-wrap justify-between items-center my-navbar">
                    <img src={logo} alt="tdmc" width={50} height={50} />
                    <div className="nav-menu pr-8">
                        <ul className="flex flex-wrap gap-8 p-4 text-white">
                            <li><a className="" href="#">Home</a></li>
                            <li><a className="" href="#">About Us</a></li>
                            <li><a className="" href="#">Projects</a></li>
                            <li><a className="" href="#">Contact US</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
