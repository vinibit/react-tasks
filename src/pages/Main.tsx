import React, { useState } from 'react'

import style from './Main.module.scss'

import Form from '../components/Form/Form'
import List from '../components/List/List'
import Cronometer from '../components/Cronometer/Cronometer'
import { ITask } from '../types/task'

const Main: React.FC = () => {

    const [ tasks, setTasks ] = useState<ITask[]>([])
    const [ selected, setSelected ] = useState<ITask>()

    const selectTask = (selectedTask: ITask) => {
        
        setSelected(selectedTask)
        setTasks(actualTasks => actualTasks.map(task => {          
            return { ...task, selected: task.id === selectedTask.id }
        }))
    }

    return (
        <div className={style.AppStyle}>
            <Form onSubmit={setTasks} />
            <List 
                tasks={tasks} 
                onItemSelected={selectTask}
            />
            <Cronometer time={selected?.time} />
        </div>
    )
}

export default Main