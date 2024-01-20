// Header.js
import React from 'react';
import { useNavigate } from 'react-router-dom'
import './Header.css';
import 'bootstrap/dist/css/bootstrap.css';
// import Singnup from '../Signup/Signup';

function Header() {
    const navigate = useNavigate();


    




    return (
        <>
            <div className="ab container">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <a className="navbar-brand m-3" href="/">
                            <img src="../images/olx.png" alt=""  width="30px" height="20px" />
                        </a>
                        
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item m-7">
                                    <a className="nav-link active" aria-current="page" href="/">
                                        <img src="../images/car.png" alt="" width="20px" height="20px" />
                                        MOTORS
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link m-7" href="/">
                                        <img src="../images/home.png" alt="" width="20" height="20px" />
                                        PROPERTY
                                    </a>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <div className="d-flex">
                                    <input className="form-control m-1 " type="search" placeholder="Pakistan" aria-label="Search" />
                                    <input className="form-control m-1" type="search" placeholder="Find Cars, Mobile Phones and more..." aria-label="Search" />
                                </div>
                                <div >
                                <button onClick={()=>navigate("../Signup")} type="button" className="btn btn-link text-dark m-1">Login</button>
                                <button className="button1 btn" type="submit">+SELL</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </nav>
                <br />
                <div>
                    <img className='mainImg' src='https://images.olx.com.pk/thumbnails/423979386-800x600.webp'/>
                </div>


                <br/>
                
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