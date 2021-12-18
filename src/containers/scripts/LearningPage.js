import React from "react";

import RoadMapButton from "../../components/scripts/RoadMapButton";

import '../styles/LearningPage.css'
import ether_img from '../../assets/images/ethereum.svg';
import solana_img from '../../assets/images/solana.svg';
import blockchain_img from '../../assets/images/blockchain.svg';

class LearingPage extends React.Component{

    render(){
        return(
            <div className="flex flex-column justify-around w-75 center h-100">
                <div className="ma5">
                    <header className="tc pa3">
                        <h1 className="f3 f2-m f1-l fw2 black-90 mv3">
                            <strong>Learning by <mark className="f-color-gradient"> building </mark></strong>
                        </h1>
                        <h2 className="f-description black-90 mt0 lh-copy">
                            Follow proven paths to success.
                        </h2>
                    </header>
                </div>
                <div className="roadmapDiv w-100">
                    <RoadMapButton text={'Roadmap to become an ETH Dev'} img={ether_img}/>
                    <RoadMapButton text={'Roadmap to become a SOL Dev'} img={solana_img}/>
                    <RoadMapButton text={'Blockchain basics'} img={blockchain_img}/>
                </div>
                <div></div>
                <div className="w-100 h4 pa5">
                    <p className="tc"> and more...</p>
                </div>
                
            </div>
        );
    }
}
export default LearingPage;