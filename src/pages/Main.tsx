import React from 'react'

import './Main.scss'

import Form from '../components/Form/Form'
import List from '../components/List/List'

const Main: React.FC = () => {
    return (
        <div className="AppStyle">
            <Form />
            <List />
        </div>
    )
}

export default Main