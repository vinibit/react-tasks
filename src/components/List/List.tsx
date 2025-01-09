import React from "react"

import style from "./List.module.scss"

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
                        <li className={style.item} key={index}>
                            <h3>{task.name}</h3>
                            <span>{task.time}</span>
                        </li>
                    ))
                }
            </ul>
        </aside>
    )
}

export default List