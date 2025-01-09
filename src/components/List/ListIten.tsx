import React from 'react'

import style from './List.module.scss'

const ListItem = ({ name, time }: { name: string, time: string }) => {
    
    return (
        <li className={style.item}>
            <h3>{name}</h3>
            <span>{time}</span>
        </li>
    )
}

export default ListItem