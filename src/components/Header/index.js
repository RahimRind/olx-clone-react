// Header.js
import React from 'react';
import './Header.css';

function Header() {
    return (
        <>
            <div className="ab container">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">
                            <img src="../images/download.png" alt="" width="50px" height="30px" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">
                                        <img src="../images/Car_icon_alone.png" alt="" width="20px" height="20px" />
                                        MOTORS
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">
                                        <img src="../images/download (1).png" alt="" width="20" height="20px" />
                                        PROPERTY
                                    </a>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <div className="d-flex">
                                    <input className="form-control m-1" type="search" placeholder="Pakistan" aria-label="Search" />
                                    <input className="form-control m-1" type="search" placeholder="Find Cars, Mobile Phones and more..." aria-label="Search" />
                                </div>
                                <button type="button" className="btn btn-link text-dark m-1">Login</button>
                                <button className="button1 btn" type="submit">+SELL</button>
                            </form>
                        </div>
                    </div>
                </nav>
                <br />
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="../images/Screenshot 2022-07-24 180715.png" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="../images/Screenshot 2022-07-24 180715.png" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="../images/Screenshot 2022-07-24 180715.png" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <br />
            
            <div className="container">

                <select className="form-select">
                    <option>ALL CATEGORIES</option>
                    <option>Mobiles Phones</option>
                    <option>Cars</option>
                    <option>Motorcycles</option>
                    <option>Houses</option>
                    <option>TV-Video-Audio</option>
                    <option>Tablets</option>
                    <option>Land & Plots</option>
                </select>

            </div>
            <br />
        </>
    );
}

export default Header;