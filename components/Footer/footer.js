import React from 'react';
import {Link} from 'react-router-dom';
import style from './footer.css';
import { CURRENT_YEAR } from '../../confi';

const Footer = () => {
    return (
        <div className = {style.footer}>
            <div>
                <Link to="/" className = {style.logo}>
                  <img alt="nba logo" src="/images/nba_logo.png"/>
                </Link>
            </div>
            <div className={style.right}>
                @NBA {CURRENT_YEAR} all right reserved.
            </div>
        </div>
    )
}

export default Footer;

