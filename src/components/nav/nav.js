"use client";
import Link from "next/link";
import navStyles from "./nav.module.css";
import React, { useState } from 'react';

export default function Nav () {
    const mouseHandler = (event) => {
        const relX = (100 * (event.clientX / window.innerWidth));
        document.getElementById("logo").style.left = ((relX - 105) + "vw");
    };

    return (<nav onMouseMove={mouseHandler} className={navStyles.nav}>
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
                <Link href="/shuffleboard">Wood V Ice</Link>
            </li>
            <li>
                <Link href="/history">History</Link>
            </li>
            <li>
                <Link href="/science">Science</Link>
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
            </ul>
        </nav>);
}