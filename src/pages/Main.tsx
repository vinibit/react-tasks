import React, { useState } from 'react'

import style from './Main.module.scss'

import Form from '../components/Form/Form'
import List from '../components/List/List'
import Cronometer from '../components/Cronometer/Cronometer'
import { ITask } from '../types/task'

const Main: React.FC = () => {

    const [ tasks, setTasks ] = useState<ITask[]>([])

    return (
        <div className={style.AppStyle}>
            <Form onSubmit={setTasks} />
            <List tasks={tasks} />
            <Cronometer />
        </div>
    )
}

export default Main