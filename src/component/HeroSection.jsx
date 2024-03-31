import React, { useEffect, useRef } from 'react';
import './heroSection.css'
const HeroSection = ({ home, transaction }) => {
    return (<div className="heroSection">
         {home?<><div className="logoImage backGroundHome">C B</div>
        CITY BANK
        <p>...experience your world of digital transactions</p></>:
        <><div className="logoImage backGroundTransaction">C B</div>
        {transaction?'Transaction History':'Transaction'}
        {!transaction&&<p>...A few more steps towards your cashless transaction</p>}</>
        }
    </div>);
}

export default HeroSection;