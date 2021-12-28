import React from "react";

import '../styles/Box.css';

class Box extends React.Component{
    render(){
        const {text} = this.props;
        return (
            <div className="box-div">
                <p> {text} </p>
            </div>
        );
    }
}

export default Box;