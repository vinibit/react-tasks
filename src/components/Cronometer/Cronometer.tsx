import React, { useState } from 'react'

import style from './Cronometer.module.scss'

import CronometerDisplay from './CronometerDisplay/CronometerDisplay'
import Button from '../Button/Button'
import { timeToSeconds } from '../../common/utils/time'

interface CronometerProps {    
    time: string | undefined
}

const Cronometer: React.FC<CronometerProps> = ({ time }) => {
    
    const totalSeconds = timeToSeconds(time ?? '00:00:00')
    console.log(totalSeconds)
    const [ currTime, setCurrTime ] = useState<number>(timeToSeconds(time ?? '00:00:00'))
    console.log(currTime)

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            Tempo: {currTime}
            <div className={style.relogioWrapper}>
                <CronometerDisplay time={currTime} />
            </div>
            <Button>
                Iniciar
            </Button>
        </div>
    );
};

export default Cronometer