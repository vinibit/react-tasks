import React from 'react'

import styles from './Main.module.scss'

import Form from '../components/Form/Form'
import List from '../components/List/List'

const Main: React.FC = () => {
    return (
        <div className={styles.AppStyle}>
            <Form />
            <List />
        </div>
    )
}

export default Main