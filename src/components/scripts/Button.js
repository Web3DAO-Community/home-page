import React from "react";

import '../styles/Button.css';

class Button extends React.Component{
    btn = (text, link) => {
        return (
            <a className="f6 growAnim  no-underline br-pill ph4 pv3 dib mb2 button-bg" href={link} target="_blank">{text}</a>
        );
    }
    render(){
        const {text, link} = this.props;
        return(
            this.btn(text, link)
        );
    }
}

export default Button;