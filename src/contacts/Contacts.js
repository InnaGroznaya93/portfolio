import React from 'react';
import style from './Contacts.module.css';
import styleContainer from '../../src/common/styles/Container.module.css'

function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2>Contacts</h2>
                <form action={''} className={style.form}>
                    <div className={style.inputs}>
                        <input type={'text'} className={style.input}/>
                        <input type={'text'} className={style.input}/>
                        <textarea className={style.textArea}/>
                    </div>
                    <button className={style.button}>Send</button>
                </form>
            </div>
        </div>
    );
}

export default Contacts;
