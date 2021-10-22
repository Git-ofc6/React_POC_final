/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-light bg-custom sticky-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src="assets/Beep Logo.png" alt="" height="35vh"></img></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                           
                                <li className="nav-item text-dark">
                                    <a className="nav-link font-weight-bold active" href="#"><i className="fas fa-user"></i> My profile
                                        <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link font-weight-bold active" href="#"><i className="fas fa-shopping-basket"></i> 0
                                        Items</a>
                                </li>
                                <li>
                                    <a className="nav-link font-weight-bold " href="#">$0.00</a>
                                </li>
                                <li>
                                    <a className="nav-link font-weight-bold active" href="#"><i className="fas fa-search"></i></a>
                                </li>
                          
                        </ul>

                    </div>
                </div>
            </nav>

            <div className="row ">
                <div className="col-md-12">
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item ">
                                <a href="#">Home</a>
                            </li>
                            <li className="breadcrumb-item">
                                <a href="#" className="text-dark">Accesories</a>
                            </li>

                        </ol>
                    </nav>
                </div>
            </div>

        </div>
    )
};

export default Header;
