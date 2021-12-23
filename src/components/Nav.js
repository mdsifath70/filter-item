import React from 'react';

export default function Nav({ menuList, filterItem }) {
    return (
        <>
            <nav className="navbar">
                <ul className="navbar__nav">
                    {menuList.map((currEl, index) => (
                        <li key={index}>
                            <button onClick={(e) => filterItem(currEl)}>{currEl}</button>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}
