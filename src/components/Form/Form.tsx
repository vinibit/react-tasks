import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import style from './Form.module.scss'

import Button from '../Button/Button'
import { ITask } from '../../types/task'

const initialState: ITask = {
    id: '',
    name: '',
    time: '00:00:00',
    selected: false,
    completed: false
}

interface FormProps {
    onSubmit: React.Dispatch<React.SetStateAction<ITask[]>>
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
    
    const [task, setTask] = useState<ITask>(initialState);

    const addTask = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(actualState => [
            ...actualState,
            {
                ...task,
                id: uuidv4(),
                selected: false,
                completed: false
            }
        ]);
        setTask(initialState);
    }

    return (
        <form className={style.novaTarefa} onSubmit={addTask}>
            <div className={style.inputContainer}>
                <label htmlFor="task">Adicione um novo estudo</label>
                <input
                    type="text"
                    name="task"
                    id="task"
                    placeholder="O que você quer estudar?"
                    required
                    value={task.name}
                    onChange={event => setTask({ ...task, name: event.target.value })}
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="time">Tempo</label>
                <input
                    type="time"
                    step={1}
                    name="time"
                    id="time"
                    min={"00:00:00"}
                    max={"01:30:00"}
                    required
                    value={task.time}
                    onChange={event => setTask({ ...task, time: event.target.value })}
                />
            </div>
            <Button type="submit">
                Adicionar
            </Button>
        </form>
    )
}

export default Form