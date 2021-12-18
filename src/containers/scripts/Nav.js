import React from "react";

import Button from "../../components/scripts/Button";
import '../styles/Nav.css';

import urls from '../../assets/Resources/URLs.json';

class Nav extends React.Component{
    render(){
        return(
            <header className="fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l bg-color">
            <nav className="db dt-l w-100 border-box pa3 ph5-l bg-color">
                <a className="db dtc-l v-mid white link dim w-100 w-25-l tc tl-l mb2 mb0-l h2" href="#" title="Home">🚀  Web3DAO
                </a>
                <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
                    <a className="link dim white f6 f5-l dib mr3 mr4-l" href="#" title="FAQ">FAQ</a>
                    <Button text={'Join The Discord'} link={urls.link.discord}/>
                </div>
            </nav>
            </header>
        );
    }
}

export default Nav;