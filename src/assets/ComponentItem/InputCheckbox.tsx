import React from 'react'

const InputCheckbox: React.FC<any> = ({ children, active, }) => {
	return (
		<div>
			<input
				type="checkbox"
			/>
			<label >{children}</label>
		</div>
	)
}

export default InputCheckbox