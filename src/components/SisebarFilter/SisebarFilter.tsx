import React from 'react'
import InputCheckbox from '../../assets/ComponentItem/InputCheckbox'

const SisebarFilter: React.FC = () => {
	return (
		<>
			<div>
				<h5>ВАЛЮТА</h5>
				<div>
					<button>RUB</button>
					<button>USD</button>
					<button>EUR</button>
				</div>
			</div>
			<div>
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
		</>
	)
}

export default SisebarFilter