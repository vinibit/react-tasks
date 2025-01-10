import React, { PropsWithChildren } from 'react'

import style from './Button.module.scss'

class Button extends React.Component<PropsWithChildren<{ 
	type?: "button" | "submit" | "reset" 
}>> {
	render() {
		
		const { type = 'button' } = this.props

		return (
			<button type={type} className={style.botao}>
				{this.props.children}
			</button>
		)
	}
}

export default Button