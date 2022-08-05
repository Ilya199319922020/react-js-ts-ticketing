import { TicketProps } from './../assets/hooks/useSortTicker'

export interface isStateCheckboxType {
	zeroTransfer: boolean,
	allTransfer: boolean,
	theTransfer: boolean,
	secondTransfer: boolean,
	thirdTransfer: boolean,
	filterTicker: Array<TicketProps>,
}

export const reducer = (state: isStateCheckboxType, action: {
	type: string, value: { isFilter: boolean, valueFilterTicket: Array<TicketProps> },
}) => {
	switch (action.type) {
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
						.filter((o: TicketProps) => o.stops !== 1)
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
						.filter((o: TicketProps) => o.stops !== 2)
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
						.filter((o: TicketProps) => o.stops !== 3)
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
						.filter((o: TicketProps) => o.stops !== 0)
			}
		default: return state
	}
}