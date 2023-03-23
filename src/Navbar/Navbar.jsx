import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <>
                <nav
                    className="navbg navbar navbar-expand-lg navbar-dark shadow-lg">
                    <div className="container">
                        <Link className="devdev navbar-brand fs-1 fw-bolder" to="header">START REACT</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 gap-3 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="links position-relative nav-link text-white fw-bolder" to="portfolio">PORTFOLIO</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="links position-relative nav-link text-white fw-bolder" to="about">ABOUT</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="links position-relative nav-link text-white fw-bolder" to="contact">CONTACT</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}
