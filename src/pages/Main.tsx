import React from 'react'

import style from './Main.module.scss'

import Form from '../components/Form/Form'
import List from '../components/List/List'
import Cronometer from '../components/Cronometer/Cronometer'

const Main: React.FC = () => {
    return (
        <div className={style.AppStyle}>
            <Form />
            <List />
            <Cronometer />
        </div>
    )
}

export default Main