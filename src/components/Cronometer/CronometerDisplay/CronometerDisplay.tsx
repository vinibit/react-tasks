import React from 'react'

import style from './CronometerDisplay.module.scss'

interface CronometerDisplayProps {
    time: number | undefined;
}

const CronometerDisplay: React.FC<CronometerDisplayProps> = ({ time = 0}) => {
    
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minDez, minUnits] = minutes.toString().padStart(2, '0');
    const [secDez, secUnits] = seconds.toString().padStart(2, '0');

    return (
        <>
            <span className={style.relogioNumero}>{minDez}</span>
            <span className={style.relogioNumero}>{minUnits}</span>
            <span>:</span>
            <span className={style.relogioNumero}>{secDez}</span>
            <span className={style.relogioNumero}>{secUnits}</span>
        </>
    )
};

export default CronometerDisplay