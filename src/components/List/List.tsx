import { ITask } from "../../types/task"
import style from "./List.module.scss"
import ListItem from "./ListItem/ListItem"

interface ListProps {
    tasks: ITask[]
    onItemSelected: (task: ITask) => void
}

function List({ tasks, onItemSelected }: ListProps) {    

    return (
        <aside className={style.listaTarefas}>
            <h2> 
                Estudos do dia 
            </h2>
            <ul>
                {
                    tasks.map((task) => (
                        <ListItem                             
                            key={task.id} 
                            onClick={() => onItemSelected(task)}
                            {...task}
                        />
                    ))
                }
            </ul>
        </aside>
    )
}

export default List