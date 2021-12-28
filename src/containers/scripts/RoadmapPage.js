import React from "react";

import Box from "../../components/scripts/Box";
import '../styles/RoadmapPage.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

import roadmap from '../../assets/Resources/Roadmap.json';
import { Fragment } from "react/cjs/react.production.min";

class RoadmapPage extends React.Component{

    getDownwardArrow = (index) => {
        if(index < roadmap.roadmap.steps.length){
            return(
                <div key={index} className="arrow-div">
                    <FontAwesomeIcon key={'arrow'+index+1} icon={faArrowDown} />
                </div>
            );
        }
    }

    getRoadMap = () => {
        this.count = 0;
        const box = roadmap.roadmap.steps.map((element, index)=>{
                this.count++;
                return(
                    <Fragment key={index}>
                        <Box key={'box'+index} text={element.step}/> 
                        {this.getDownwardArrow(this.count)}
                    </Fragment>
                );
        });
        this.count = 0;
        return box;
    }

    render(){
        return(
                <div className="roadmappage_div">
                    <header className="tc">
                        <h1 className="f3 f2-m f1-l fw2 mv3 white">
                            <strong>🚀  <mark className="f-color-gradient"> Web3DAO </mark>Roadmap</strong>
                        </h1>
                    </header>
                    <div className="roadmap_div">
                        {this.getRoadMap()}
                    </div>
                </div>
        );
    }
}

export default RoadmapPage;