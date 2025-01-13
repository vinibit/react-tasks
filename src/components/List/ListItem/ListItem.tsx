import style from './ListItem.module.scss'

interface ListItemProps {
    name: string
    time: string
    selected: boolean
    onClick: () => void
}

const ListItem = ({ name, time, selected, onClick }: ListItemProps) => {
    
    return (
        <li 
            className={style.item + (!selected ? '' : ` ${style.itemSelecionado}`)}
            onClick={onClick}>
                <h3>{name}</h3>
                <span>{time}</span>
        </li>
    )
}

export default ListItem