import React from 'react'

import style from './CronometerDisplay.module.scss'

interface Props {
    time: number;
}

const CronometerDisplay: React.FC<Props> = ({ time }) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const formatTime = (unit: number) => String(unit).padStart(2, '0');

    return (
        <>
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioNumero}>0</span>
            <span>:</span>
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioNumero}>0</span>
        </>
    )
};

export default CronometerDisplay