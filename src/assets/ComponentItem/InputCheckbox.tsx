import React from 'react'
import style from '../../components/SisebarFilter/SisebarFilter.module.css'
const InputCheckbox: React.FC<any> = ({ children, active, value, id, onChange }) => {
	return (
		<div
			className={style.element__input}
		>
			<input
				className={style.element__input_checkbox}
				type="checkbox"
				checked={value}
				id={id}
				onChange={onChange}
			/>
			
			<div className={style.element__input_label}
			>
				{children}
			</div>
			<span
				className={style.element__input_text}
			>
				    только
			</span>
		</div>
	)
}

export default InputCheckbox