import React, { useState } from 'react'

import style from './Main.module.scss'

import Form from '../components/Form/Form'
import List from '../components/List/List'
import Cronometer from '../components/Cronometer/Cronometer'
import { ITask } from '../types/task'

const Main: React.FC = () => {

    const [ tasks, setTasks ] = useState<ITask[]>([])
    const [ selected, setSelected ] = useState<ITask | null>(null)

    const selectTask = (selectedTask: ITask) => {
        
        setSelected(selectedTask)
        setTasks(actualTasks => actualTasks.map(task => {          
            return { ...task, selected: task.id === selectedTask.id }
        }))
    }

    const completeTask = () => {
        
        if (selected) {
            setSelected(null)
            setTasks(actualTasks => actualTasks.map(task => {
                if (task.id === selected.id) {
                    return { ...task, selected: false, completed: true }
                }
                return task
            }))
        }
    }

    return (
        <div className={style.AppStyle}>
            <Form onSubmit={setTasks} />
            <List 
                tasks={tasks} 
                onItemSelected={selectTask}
            />
            <Cronometer 
                time={selected?.time} 
                onStop={completeTask} />
        </div>
    )
}

export default Main