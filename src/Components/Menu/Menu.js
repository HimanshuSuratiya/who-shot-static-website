import React from 'react'
import Images from '../../Images/Images';

const Menu = () => {
    return (
        <>
            <header className="header bgColor">
                <nav id="navbar_top" className="navbar navbar-expand-lg h2-nav ">
                    <div className="container">
                        <a className="navbar-brand " href="#">
                            <img className="navbar-logo-image" src={Images.Logo} alt="Logo" />
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#header"
                            aria-controls="header" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="icon-menu"></span>
                        </button>
                        <div className="collapse navbar-collapse hover-dropdown" id="header">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active"><a className="nav-link" href="#!">Home</a></li>
                                <li className="nav-item"><a className="nav-link" href="#!">About Us</a></li>
                                <li className="nav-item"><a className="nav-link" href="#!">Services</a></li>
                                <li className="nav-item"><a className="nav-link" href="#!">Blogs</a></li>
                                <li className="nav-item"><a className="nav-link" href="#!-us">Contact Us</a></li>
                            </ul>
                            <a href="#" className="buttonsignin">Sign In</a>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Menu;