import React from 'react';
import style from './Body.module.scss';

const Body = (props) => {
    return (
        <div className={style.containerWrapper}>
            <div className={style.container}>
                {props.children}
            </div>
        </div>
    )
}

export default Body
