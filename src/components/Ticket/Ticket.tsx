import React from 'react'
import style from './Ticket.module.css'
import turkishairlines from '../../assets/image/turkishairlines.png'
import vector from '../../assets/image/Vector1.png'
import { TicketProps } from '../../assets/hooks/useSortTicker'

interface TickProps {
	item: TicketProps
}

const Ticket: React.FC<TickProps> = ({ item }) => {
	const { price, departure_time, origin, origin_name, departure_date,
		arrival_time, destination, destination_name, arrival_date, stops
	} = item

	const convertDate = (date: any) => date
		.toLocaleDateString("ru", { day: "numeric", year: "numeric", weekday: 'short', month: "short" })
		.replace(/[\s,. ]+/g, " ");

	const currentDate = convertDate(new Date(departure_date)).split(' ')
	const dateA = [currentDate[1], currentDate[2], currentDate[3]].join(' ')

	const nextDate = convertDate(new Date(arrival_date)).split(' ')
	const dateB = [currentDate[1], currentDate[2], currentDate[3]].join(' ')


	return (<>
		<div
			className={style.ticket}
		>
			<div
				className={style.ticket__button}
			>
				<img
					src={turkishairlines}
					className={style.ticket__button_image}
				/>
				<button
					className={style.ticket__btn}
				>
					<div>Купить</div>
					<div
						className={style.ticket__price}
					>
						за {price} <span>
							P
						</span>
					</div>
				</button>
			</div>
			<div
				className={style.ticket__container}
			>
				<div
					className={style.ticket__container_info}
				>
					<div
						className={style.ticket__container_time}
					>
						{departure_time}
					</div>
					<div
						className={style.ticket__container_name}
					>
						{origin}, <span>
							{origin_name}
						</span>
					</div>
					<div
						className={style.ticket__container_data}
					>
						<span>
							{dateA}, {currentDate[0]}
						</span>
					</div>
				</div>
				<div
					className={style.ticket__container_transfer}
				>
					<div
						className={style.transfer__element_stops}
					>
						{stops} {
							stops > 1
								? 'ПЕРЕСАДКИ'
								: stops === 0
									? 'ПЕРЕСАДОК'
									: 'ПЕРЕСАДКA'
						}
					</div>
					<div
						className={style.transfer__element}
					>
						<div
							className={style.transfer__element_item}
						>
						</div>
						<img src={vector} />
					</div>
				</div>
				<div
					className={style.ticket__container_info}
				>
					<div
						className={style.ticket__container_time}
					>
						{arrival_time}
					</div>
					<div
						className={style.ticket__container_name}
					>
						{destination_name}, <span>
							{destination}
						</span>
					</div>
					<div
						className={style.ticket__container_data}
					>
						<span>{dateB}, {nextDate[0]}</span>
					</div>
				</div>
			</div>
		</div>
	</>
	)
}

export default Ticket