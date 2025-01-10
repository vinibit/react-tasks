import React from 'react'

import style from './List.module.scss'
import { ITask } from '../../types/task'

const ListItem = (task: ITask) => {
    
    return (
        <li className={style.item}>
            <h3>{task.name}</h3>
            <span>{task.time}</span>
        </li>
    )
}

export default ListItem