import React, { useState, useEffect } from 'react'

import style from './Cronometer.module.scss'

import CronometerDisplay from './CronometerDisplay/CronometerDisplay'
import Button from '../Button/Button'
import { timeToSeconds } from '../../common/utils/time'

interface CronometerProps {    
    time: string | undefined,
    onStop: () => void
}

const Cronometer: React.FC<CronometerProps> = ({ time, onStop }) => {
        
    const [ currTime, setCurrTime ] = useState<number>()    

    useEffect(() => {
        setCurrTime(timeToSeconds(time ?? ''))
    }, [time])

    const startRegressiveCounter = (counter: number = 0) => {
        
        setTimeout(() => {
            if (counter === 0) {
                onStop();
                return
            }
            setCurrTime(counter - 1)
            return startRegressiveCounter(counter - 1)
        }, 1000)
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>            
            <div className={style.relogioWrapper}>
                <CronometerDisplay time={currTime ?? 0} />
            </div>
            <Button onClick={() => startRegressiveCounter(currTime)}>
                Iniciar
            </Button>
        </div>
    );
};

export default Cronometer