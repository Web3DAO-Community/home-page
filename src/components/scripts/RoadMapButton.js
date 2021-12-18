import React from "react";

import '../styles/RoadMapButton.css';

class RoadMapButton extends React.Component{
    render(){
        const {text, img} = this.props;
        return(
                <div className="growAnim buttonDiv no-underline br3 ph3 pv2 ma2 black bg-color-gradient">
                    <p className="textDiv">{text}</p>
                    <img className="btn_img" alt="img" src={img}/>    
                </div>
        );
    }
}

export default RoadMapButton;