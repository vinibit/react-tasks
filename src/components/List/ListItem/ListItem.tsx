import style from './ListItem.module.scss'

interface ListItemProps {
    name: string
    time: string
    selected: boolean
    completed: boolean
    onClick: () => void
}

const ListItem = ({ name, time, selected, completed, onClick }: ListItemProps) => {
    
    return (
        <li 
            className={style.item 
                + (!selected ? '' : ` ${style.itemSelecionado}`)
                + (!completed ? '' : ` ${style.itemCompletado}`)}
            onClick={() => !completed && onClick()}>
                <h3>{name}</h3>
                <span>{time}</span>
                {completed && <span className={style.concluido} aria-label="tarefa completada" />}
        </li>
    )
}

export default ListItem