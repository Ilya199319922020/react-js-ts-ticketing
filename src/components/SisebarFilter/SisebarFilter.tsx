import React, { useEffect, useReducer, useState } from 'react'
import InputCheckbox from '../../assets/ComponentItem/InputCheckbox'
import { TicketProps } from '../../assets/hooks/useSortTicker'
import { reducer } from '../../store/reducer'
import style from './SisebarFilter.module.css'

interface SisebarFilterProps {
	sortTicker: TicketProps[],
	setNewSortTicker: (a: TicketProps[]) => void,
}

const SisebarFilter: React.FC<SisebarFilterProps> = ({ sortTicker, setNewSortTicker, }) => {
	const [newState, setNewState] = useState<TicketProps[]>([])

	const [state, dispatch] = useReducer(reducer, {
		zeroTransfer: false,
		allTransfer: false,
		theTransfer: false,
		secondTransfer: false,
		thirdTransfer: false,
		filterTicker: [],
	})

	const handler = (e: any) => {
		const { target } = e
		const isFilter = target.type === 'checkbox' ? target.checked : target.value
		dispatch({
			type: target.id, value: {
				isFilter: isFilter,
				valueFilterTicket: newState
			}
		})
	}

	useEffect(() => {
		if (state.filterTicker.length) {
			setNewSortTicker(state.filterTicker)
		} else {
			setNewSortTicker([])
		}
	}, [state])

	useEffect(() => {
		if (sortTicker.length) {
			setNewState(sortTicker)
		}
	}, [sortTicker])

	return (
		<div
			className={style.sidebar}
		>
			<div
				className={style.sidebar__currency}
			>
				<div
					className={style.sidebar__currency_header}
				>ВАЛЮТА
				</div>
				<div
					className={style.sidebar__currency_btn}
				>
					<button
						className={style.sidebar__currency_btnEl}
					>RUB
					</button>
					<button
						className={style.sidebar__currency_btnEl}
					>
						USD
					</button>
					<button
						className={style.sidebar__currency_btnEl}
					>
						EUR
					</button>
				</div>
			</div>
			<div
				className={style.sidebar__transfer}
			>
				<div
					className={style.sidebar__currency_header}
				>КОЛИЧЕСТВО ПЕРЕСАДОК
				</div>
				<div>
					<InputCheckbox
						id={'all'}
						onChange={handler}
						checked={state.allTransfer}
					>
						Все
					</InputCheckbox>
					<InputCheckbox
						id={'zero'}
						onChange={handler}
						checked={state.zeroTransfer}
					>
						Без пересадок
					</InputCheckbox>
					<InputCheckbox
						id={'tho'}
						onChange={handler}
						checked={state.theTransfer}
					>
						1 пересадка
					</InputCheckbox>
					<InputCheckbox
						id={'second'}
						onChange={handler}
						checked={state.secondTransfer}
					>
						2 пересадки
					</InputCheckbox>
					<InputCheckbox
						id={'third'}
						onChange={handler}
						checked={state.thirdTransfer}
					>
						3 пересадки
					</InputCheckbox>
				</div>
			</div>
		</div>
	)
}

export default SisebarFilter