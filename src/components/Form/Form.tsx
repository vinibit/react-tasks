import React, { Component } from 'react'
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

class Form extends Component<{ 
    onSubmit: React.Dispatch<React.SetStateAction<ITask[]>> }, 
    ITask> {
    
    state: Readonly<ITask> = initialState    
    
    addTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        this.props.onSubmit(actualState => [
            ...actualState, { 
                ...this.state,
                id: uuidv4(),
                selected: false,
                completed: false
            } 
        ])
        this.setState(initialState)
    }
 
    render() {
        return (
            <form className={style.novaTarefa} onSubmit={(event) => this.addTask(event)}>
                <div className={style.inputContainer}>
                    <label htmlFor="task">Adicione um novo estudo</label>
                    <input
                        type="text"
                        name="task"
                        id="task"
                        placeholder="O que você quer estudar?"
                        required
                        value={this.state.name}
                        onChange={event => this.setState({ ...this.state, name: event.target.value })}                        
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
                        value={this.state.time}
                        onChange={event => this.setState({ ...this.state, time: event.target.value })}                        
                    />
                </div>
                <Button type="submit">
                    Adicionar
                </Button>                 
            </form>
        );
    }
}

export default Form