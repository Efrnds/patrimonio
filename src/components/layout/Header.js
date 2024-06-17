import React, { memo } from 'react';
import Navbar from './Navbar';

function Header() {
    return (
        <header>
            <nav className="flex justify-between w-full my-auto">
                <h1 className="text-3xl font-bold text-start text-slate-700">React Study</h1>
                <Navbar />
            </nav>
            <hr className="w-full h-px my-10 border-slate-500" />
        </header>
    );
}

export default memo(Header);
