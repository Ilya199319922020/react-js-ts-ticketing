import React from 'react'

const InputCheckbox: React.FC<any> = ({ children, active, value, id, onChange}) => {
	return (
		<div>
			<input
				type="checkbox"
				checked={value}
				id={id}
				onChange={onChange}
			/>
			<label >{children}</label>
		</div>
	)
}

export default InputCheckbox