import React from 'react'
import InputCheckbox from '../../assets/ComponentItem/InputCheckbox'
import style from './SisebarFilter.module.css'

const SisebarFilter: React.FC = () => {
	return (
		<div
			className={style.sidebar}
		>
			<div
				className={style.sidebar__currency}
			>
				<h5>ВАЛЮТА</h5>
				<div>
					<button>RUB</button>
					<button>USD</button>
					<button>EUR</button>
				</div>
			</div>
			<div
				className={style.sidebar__transfer}
			>
				<h5>КОЛИЧЕСТВО ПЕРЕСАДОК</h5>
				<div>
					<InputCheckbox>
						Все
					</InputCheckbox>
					<InputCheckbox>
						Без пересадок
					</InputCheckbox>
					<InputCheckbox>
						1 пересадка
					</InputCheckbox>
					<InputCheckbox>
						2 пересадки
					</InputCheckbox>
					<InputCheckbox>
						3 пересадки
					</InputCheckbox>
				</div>
			</div>
		</div>
	)
}

export default SisebarFilter