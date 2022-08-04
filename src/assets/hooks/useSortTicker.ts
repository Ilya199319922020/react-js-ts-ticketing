import { useEffect, useState } from "react"

export interface TicketProps {
	origin: string,
	origin_name: string,
	destination: string,
	destination_name: string,
	departure_date: string,
	departure_time: string,
	arrival_date: string,
	arrival_time: string,
	carrier: string,
	stops: number,
	price: number
}

export const useSortTicker = () => {
	const [stateTickers, setStateTickers] = useState<Array<TicketProps>>([])
	const [sortTicker, setSortTicker] = useState<Array<TicketProps>>([])

	async function getData() {
		let response = await fetch('data/dataTickets.json', { method: 'GET' })
		let { tickets } = await response.json()
		setStateTickers(tickets)
	}

	useEffect(() => {
		if (stateTickers.length) {
			const addSortTicker = stateTickers.sort((a: any, b: any) => a.price - b.price)
			setSortTicker(addSortTicker)
		} else {
			getData()
		}
	}, [stateTickers])

	return [stateTickers, sortTicker]
}

