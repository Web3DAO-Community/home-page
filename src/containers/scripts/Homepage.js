import React from "react";

import Button from "../../components/scripts/Button";
import '../styles/HomePage.css';
import background_img from '../../assets/images/background.svg';

import url from '../../assets/Resources/URLs.json';

class HomePage extends React.Component{
    render(){
        return(
            <div className="homepageDiv">
                <div className="ma5 flex flex-column justify-between headingDiv">
                    <div className="w-100 titleDiv ">
                            <h1 className="mv2 bold white f-heading">
                            Start your <mark className="f-color-gradient">web3</mark> developer journey.
                            </h1>
                    </div>
                    <div className="w-100 flex flex-column">
                        <p className="white f-description">
                        From zero to hero, we will take you from setting up your first crypto-wallet all the way to creating a DAO.
                        </p>
                        <p className="white f-description">
                            You are encouraged to complete as many Goal as you can, take the skill
                            tests, and leave feedback. Those of you who are able to graduate will
                            receive the "Contributor" role. First 1200 contributors will have their wallet
                            addresses stored for future airdrops. ️
                        </p>
                    </div>
                    <div className="ma2 hpButtonDiv">
                        <Button text={'Join The Discord'} link={url.link.discord}/>
                    </div>
                    <div className="w-100"></div>
                    <div className="w-100"></div>
                </div>
                <div className="w-50 backgroundImgDiv">
                    <img src={background_img} alt="A bright blue sky" className="mw5" />
                </div>
                
            </div>
        );
    }
}

export default HomePage;

