import React, { Component } from 'react'

import styles from './Form.module.scss'

import Button from '../Button/Button'

interface FormState {
    inputValue: string
}

class Form extends Component<{}, FormState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            inputValue: ''
        };
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ inputValue: event.target.value });
    };

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(this.state.inputValue);
    };

    render() {
        return (
            <form className={styles.novaTarefa} onSubmit={this.handleSubmit}>
                <div className={styles.inputContainer}>
                    <label htmlFor="task">Adicione um novo estudo</label>
                    <input
                        type="text"
                        name="task"
                        id="task"
                        placeholder="O que você qer estudar?"
                        required                        
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="time">Tempo</label>
                    <input
                        type="time"
                        step={1}
                        name="time"
                        id="time"
                        min={0}
                        max={"01:30:00"}
                        required                        
                    />
                </div>
                <Button />
            </form>
        );
    }
}

export default Form