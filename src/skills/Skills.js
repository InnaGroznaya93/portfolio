import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../../src/common/styles/Container.module.css'
import Skill from "./skill/Skill";

function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={'JS'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                    <Skill title={'CSS'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus et hic id impedit odio rerum sint tempore.'}/>
                    <Skill title={'REACT'} description={' Animi distinctio excepturi iusto praesentium quos saepe? Distinctio exercitationem impedit natus omnis vel?'}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
