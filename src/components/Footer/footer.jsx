import React from 'react';
import './footer.css';
import {OverlayTrigger} from "react-bootstrap";

// my components
import BritishIcon from '../../assets/images/flags/britishicon.png';
import CroatianIcon from '../../assets/images/flags/croatianicon.png';
import GermanIcon from '../../assets/images/flags/germanicon.png';
import { Tooltip } from 'react-bootstrap';

function LanguageFooter() {
    return (
        <div className="sticky-footer">
            <OverlayTrigger overlay={
                <Tooltip id="language-tooltip">
                    Translated by me :)
                </Tooltip>
            }>
            <img className="flag-img" src={BritishIcon} alt="English" onClick={e => { localStorage.setItem("language", 0) 
            window.location.reload()}}/>
            </OverlayTrigger>
            <OverlayTrigger overlay={
                <Tooltip id="language-tooltip">
                    Translated by me :)
                </Tooltip>
            }>
            <img className="flag-img" src={CroatianIcon} alt="Croatian" onClick={e => {localStorage.setItem("language", 1)
            window.location.reload()}}/>
            </OverlayTrigger>
            <OverlayTrigger overlay={
                <Tooltip id="language-tooltip">
                    Translated by me :)
                </Tooltip>
            }>
            <img className="flag-img" src={GermanIcon} alt="German" onClick={e => {localStorage.setItem("language", 2) 
            window.location.reload()}} /> 
            </OverlayTrigger>
        </div>
    );
}

export default LanguageFooter;