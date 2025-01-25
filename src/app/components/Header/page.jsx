import React from "react"

export default function Header() {
    return (
        <header id="header" className="header d-flex align-items-center sticky-top" style={{position: "fixed"}}>
            <div className="container-fluid container-xl position-relative d-flex align-items-center">

            <a href="index.html" className="logo d-flex align-items-center me-auto">
                {/* Uncomment the line below if you also wish to use an image logo */}
                <img src="assets/img/logo.png" alt="" />
            </a>

            <nav id="navmenu" className="navmenu">
                <ul>
                <li><a href="#hero" className="active">Home<br /></a></li>
                <li className="dropdown"><a href="/about.html"><span>About</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                    <ul>
                    <li><a href="#">Team</a></li>
                    <li><a href="#">Impact</a></li>
                    </ul>
                </li>
                <li><a href="#strategy">Strategy</a></li>
                <li><a href="#career">Career</a></li>
                <li className="dropdown"><a href="#"><span>Downloads</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                    <ul>
                    <li><a href="#">Investment Policy Statement</a></li>
                    <li className="dropdown"><a href="#"><span>Report</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                        <ul>
                        <li><a href="#">H2 2024</a></li>
                        <li><a href="#">H1 2024</a></li>
                        <li><a href="#">H2 2023</a></li>
                        <li><a href="#">H1 2023</a></li>
                        <li><a href="#">H2 2022</a></li>
                        </ul>
                    </li>
                    </ul>
                </li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#insight">Insight</a></li>
                </ul>
                <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
            </nav>
            <a className="btn-getstarted" href="index.html#about">Get Started</a>
            </div>
        </header>
    )
}