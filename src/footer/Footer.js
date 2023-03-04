import React from 'react';
import style from './Footer.module.css';
import styleContainer from '../../src/common/styles/Container.module.css'

function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h3>Inna Groznaya</h3>
                <div className={style.squareBlock}>
                    <div className={style.square}></div>
                    <div className={style.square}></div>
                    <div className={style.square}></div>
                    <div className={style.square}></div>
                </div>
                <span>&#169; 2023 All rights reserved</span>
            </div>
        </div>
    );
}

export default Footer;
