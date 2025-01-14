import React, { PropsWithChildren } from 'react'

import style from './Button.module.scss'

class Button extends React.Component<PropsWithChildren<{ 
	type?: "button" | "submit" | "reset",
	onClick?: () => void
}>> {
	render() {
		
		const { type = 'button', onClick } = this.props

		return (
			<button 
				type={type} 
				className={style.botao}
				onClick={onClick}>
				{this.props.children}
			</button>
		)
	}
}

export default Button