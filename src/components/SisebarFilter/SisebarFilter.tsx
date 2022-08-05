import React, { useEffect, useReducer, useState } from 'react'
import InputCheckbox from '../../assets/ComponentItem/InputCheckbox'
import { TicketProps } from '../../assets/hooks/useSortTicker'
import style from './SisebarFilter.module.css'

export interface isStateCheckboxType {
	zeroTransfer: boolean,
	allTransfer: boolean,
	theTransfer: boolean,
	secondTransfer: boolean,
	thirdTransfer: boolean,
	filterTicker: Array<TicketProps>,
}

const SisebarFilter: React.FC<any> = ({ sortTicker, setNewSortTicker }) => {

	const [newState, setNewState] = useState<any>([])

	const reducer = (state: isStateCheckboxType, action: {
		type: string, value: boolean | any,
	}) => {
		switch (action.type) {
			case 'addTicker':
				return {
					...state,
					filterTicker: action.value
				}
			case 'tho':
				let filterTrue = action.value.valueFilterTicket.filter((o: TicketProps) => o.stops === 1)
				return {
					...state,
					theTransfer: action.value.isFilter,

					filterTicker: action.value.isFilter
						?
						(
							state.filterTicker.length
								?
								[...state.filterTicker,
								...filterTrue]
								:
								[...filterTrue]
						)
						:
						[...state.filterTicker]
							.filter((o: TicketProps) => o.stops != 1)
				}
			case 'second':
				let filterTru = action.value.valueFilterTicket.filter((o: TicketProps) => o.stops === 2)
				return {
					...state,
					theTransfer: action.value.isFilter,

					filterTicker: action.value.isFilter
						?
						(
							state.filterTicker.length
								?
								[...state.filterTicker,
								...filterTru]
								:
								[...filterTru]
						)
						:
						[...state.filterTicker]
							.filter((o: TicketProps) => o.stops != 2)
				}
			case 'third':
				let filterTr = action.value.valueFilterTicket.filter((o: TicketProps) => o.stops === 3)
				return {
					...state,
					theTransfer: action.value.isFilter,

					filterTicker: action.value.isFilter
						?
						(
							state.filterTicker.length
								?
								[...state.filterTicker,
								...filterTr]
								:
								[...filterTr]
						)
						:
						[...state.filterTicker]
							.filter((o: TicketProps) => o.stops != 3)
				}
			case 'zero':
				let filterT = action.value.valueFilterTicket.filter((o: TicketProps) => o.stops === 0)
				return {
					...state,
					theTransfer: action.value.isFilter,

					filterTicker: action.value.isFilter
						?
						(
							state.filterTicker.length
								?
								[...state.filterTicker,
								...filterT]
								:
								[...filterT]
						)
						:
						[...state.filterTicker]
							.filter((o: TicketProps) => o.stops != 0)
				}
			default: return state
		}
	}

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

	const [state, dispatch] = useReducer(reducer, {
		zeroTransfer: false,
		allTransfer: false,
		theTransfer: false,
		secondTransfer: false,
		thirdTransfer: false,
		filterTicker: [],
	})

	useEffect(() => {
		if (sortTicker.length) {
			setNewState(sortTicker)
		}
	}, [sortTicker])
	console.log(state.filterTicker)
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