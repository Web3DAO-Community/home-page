import React from "react";

import twitter_img from '../../assets/images/twitter.svg';
import discord_img from '../../assets/images/discord_img.svg';

import urls from '../../assets/Resources/URLs.json';

class Footer extends React.Component{
    render(){
        return(
            <footer className="pv4 ph3 ph5-m ph6-l white bg-mid-gray">
                <p className="f4 tc">🚀  Web3DAO</p>
                <p className="f5 tc">Start your web3 journey.</p>
                <div className="flex center w-25 justify-around">
                <a className="link grow hover-silver near-black dib h2 w2 mr3 center" href={urls.link.twitter} title="Twitter" target="_blank">
                    <img src={twitter_img} alt="twitter"/>
                </a>
                <a className="link grow hover-silver near-black dib h2 w2 mr3 center" href={urls.link.discord} title="Discord" target="_blank">
                    <img src={discord_img} alt="discord" />
                </a>
                </div>
                <small className="f6 db tc mt3">Copyright © 2021 Web3DAO. All Rights Reserved </small>
            </footer>
        );
    }
}

export default Footer;