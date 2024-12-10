"use client";
import Link from "next/link";
import navStyles from "./nav.module.css";
import React, { useState } from 'react';

export default function Nav () {
    
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    
    const mouseHandler = (event) => {
        setMousePos({ x: event.clientX, y: event.clientY });
        const relX = (100 * (event.clientX / window.innerWidth));
        document.getElementById("logo").style.left = ((relX - 105) + "vw");
    };

    return (<div onMouseMove={mouseHandler}>
        <nav className={navStyles.nav}>
            <div className={navStyles.logo} id="logo">
                <div className={navStyles.outBox}>
                    <div className={navStyles.inBox}></div>
                    <div className={navStyles.inBox}></div>
                    <div className={navStyles.inBox}></div>
                </div>
                <img src="curlingStone.svg" alt="" />
            </div>
            <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <Link href="/rules">Rules</Link>
            </li>
            <li>
                <Link href="/tools">Tools</Link>
            </li>
            <li>
                <a href="/science">Science</a>
            </li>
            <li>
                <Link href="/olympics">Olympics</Link>
            </li>
            <li>
                <a href="/USAolympic">USA Olympics</a>
            </li>
            <li>
                <a href="/iconicPlayers">Iconic Players</a>
            </li>
            <li>
                <a href="/account">Account</a>
            </li>
            </ul>
        </nav>
        <div className={navStyles.navGapper}></div>
      </div>)
}