import React from 'react'

import style from './Cronometer.module.scss'

import CronometerDisplay from './CronometerDisplay/CronometerDisplay'
import Button from '../Button/Button'

const Cronometer: React.FC = () => {
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <CronometerDisplay time={0} />
            </div>
            <Button>
                Coemçar!
            </Button>
        </div>
    );
};

export default Cronometer