import React from 'react';
import style from './RemoteWork.module.css';
import styleContainer from '../../src/common/styles/Container.module.css'


function RemoteWork() {
    return (
        <div className={style.remBlock}>
            <div className={`${styleContainer.container} ${style.remContainer}`}>
                <h2 className={style.h2}>I'm considering options for remote work</h2>
                <button className={style.button}>Hire me</button>
            </div>
        </div>
    );
}

export default RemoteWork;
