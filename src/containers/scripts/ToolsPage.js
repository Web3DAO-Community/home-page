import React from "react";

import '../styles/ToolsPage.css';

import ethereum_img from '../../assets/images/ethereum.svg';
import javscript_img from '../../assets/images/javascript.svg';
import react_img from '../../assets/images/react.svg';
import solana_gradient from '../../assets/images/solana_gradient.svg';


class ToolsPage extends React.Component{
    render(){
        return(
            <div className="flex flex-column justify-between w-100 center bg-black">
                <div className="mt5 h-50">
                    <header className="tc ">
                        <h1 className="f3 f2-m f1-l fw2 white mv3">
                            <strong>Build <mark className="f-color-gradient"> alongside  </mark>
                            others</strong>
                        </h1>
                        <h2 className="f-description white mt0 lh-copy">
                        Learn the tools required to be successful in Web3.0
                        </h2>
                        
                    </header>
                </div>
                <div className="h6 center flex flex-column w-100 ma5">
                    <div className="techDiv pa3">
                        <div className="techItemDiv">
                            <img src={ethereum_img} />
                        </div>
                        <div className="techItemDiv">
                            <img src={javscript_img} />
                        </div>
                    </div>
                    <div className="techDiv pa3 justify-center">
                    <div className="techItemDiv">
                            <img src={solana_gradient} />
                        </div>
                        <div className="techItemDiv">
                            <img src={react_img} />
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default ToolsPage;
