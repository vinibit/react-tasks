import React, { PropsWithChildren } from 'react'

import style from './Button.module.scss'

interface ButtonProps extends PropsWithChildren {
	type?: "button" | "submit" | "reset",
	onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ type = 'button', onClick, children }) => {

	return (
		<button 
			type={type} 
			className={style.botao}
			onClick={onClick}>
				{children}
		</button>
	)
}

export default Button