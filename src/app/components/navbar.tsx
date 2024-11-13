'use client';

import Link from "next/link";
import { useState } from 'react';
// import Navbar from "@/components/navbar"; // External Navbar if required
import { FC } from 'react'; // Import FC from React for typing functional components

// Define the component
const NavigationBar: FC = () => {
    // Typing for useState
    const [menuVisible, setMenuVisible] = useState<boolean>(false);

    // Function to toggle menu visibility
    const toggleMenu = (): void => {
        setMenuVisible(!menuVisible);
    };

    return (
        <div>
            {/* <nav>
                <Navbar />
            </nav> */}
            <section className="header">
                <div className="inner">
                    <div className="x-container">
                        <div className="x-row">
                            <div className="x-col-12">
                                <div className="nav">
                                    <div className="logo">
                                        <h1>Aliezay</h1>
                                    </div>
                                    <div className="nav-content">
                                        <ul>
                                            <li>
                                                <Link href="/">Home</Link>
                                            </li>
                                            <li>
                                                <Link href="/about">About</Link>
                                            </li>
                                            <li>
                                                <Link href="/projects">Projects</Link>
                                            </li>
                                            <li>
                                                <Link href="/contact">Contact</Link> {/* Absolute path */}
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Hamburger Button */}
                                    <div className={`hamburger ${menuVisible ? 'open' : ''}`} onClick={toggleMenu}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>

                                    {/* Fullscreen Menu */}
                                    <div className={`fullscreen-menu ${menuVisible ? 'visible' : ''}`}>
                                        <div className="menu-content">
                                            <ul>
                                                <li><Link href="/">Home</Link></li>
                                                <li><Link href="/about">About</Link></li>
                                                <li><Link href="/projects">Projects</Link></li>
                                                <li><Link href="/contact">Contact</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NavigationBar;
