import React from "react"

import style from "./List.module.scss"
import ListItem from "./ListIten"

function List() {

    const tasks = [
        {
            name: "React",
            time: "01:30:00"
        },
        {
            name: "Javascript",
            time: "01:00:00"
        },
        {
            name: ".Net Core APIs",
            time: "00:50:00"
        },
        {
            name: "Typescript",
            time: "03:00:00"
        }
    ]

    return (
        <aside className={style.listaTarefas}>
            <h2> Estudos do dia </h2>
            <ul>
                {
                    tasks.map((task, index) => (
                        <ListItem key={index} { ...task } />
                    ))
                }
            </ul>
        </aside>
    )
}

export default List