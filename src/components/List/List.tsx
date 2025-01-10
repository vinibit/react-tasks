import { ITask } from "../../types/task"
import style from "./List.module.scss"
import ListItem from "./ListItem"

function List({ tasks }: { tasks: ITask[] }) {    

    return (
        <aside className={style.listaTarefas}>
            <h2> 
                Estudos do dia 
            </h2>
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