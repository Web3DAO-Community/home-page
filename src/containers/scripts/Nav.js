import React from "react";

import Button from "../../components/scripts/Button";
import '../styles/Nav.css';

import urls from '../../assets/Resources/URLs.json';

class Nav extends React.Component{

     navSlide(){
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');
        const burger = document.querySelector('.burger');

        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index)=> {
            link.style.animation = `navLinkFades 0.5s ease`;
        })

        burger.classList.toggle('toggle');

    }

    displayNav =() => {
        return(
            <header className="fixed">
            <nav className="db dt-l border-box bg-color">
                <a className="logo db dtc-l v-mid white link dim w-100 w-25-l tc tl-l mb2 mb0-l h2" href="#" title="Home">🚀  Web3DAO
                </a>
                <div className="navItems db dtc-l v-mid w-100 w-75-l tc tr-l">
                    <a className="link dim white f6 f5-l dib mr3 mr4-l" href="#" title="About us">About us</a>
                    <a className="link dim white f6 f5-l dib mr3 mr4-l" href="#" title="Roadmap">Roadmap</a>
                    <a className="link dim white f6 f5-l dib mr3 mr4-l" href="#" title="Faq">Faq</a>
                    <Button text={'Join The Discord'} link={urls.link.discord}/>  
                </div>
            </nav>
            
            </header>
        );
    }
    render(){
        return(
            <nav>
                <div className="logo">
                    <h4> <a href="/" title="home"> 🚀  Web3DAO </a></h4>
                </div>
                <ul className="nav-links">
                    <li>
                        <a href="#aboutPageId" title="about_us"> About Us</a>
                    </li>
                    <li>
                        <a href="#roadmapPageId" title="roadmap"> Roadmap</a>
                    </li>
                    <li>
                        <a href="#" title="faq"> FAQ</a>
                    </li>
                    <li>
                    <Button text={'Join The Discord'} link={urls.link.discord}/>  
                    </li>
                </ul>
                <div className="burger" onClick={this.navSlide}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
            // this.displayNav()
        );
    }


}

export default Nav;