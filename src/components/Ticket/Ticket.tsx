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
				<button>Купить за {price} Р</button>
			</div>
			<div
				className={style.ticket__container}
			>
				<div
					className={style.ticket__container_info}
				>
					<div>{departure_time}</div>
					<div>{origin},{origin_name} </div>
					<div>{departure_date}</div>
				</div>
				<div
					className={style.ticket__container_transfer}
				>
					<div>
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
				<div>
					<div>{arrival_time}</div>
					<div>{destination_name},{destination} </div>
					<div>{arrival_date}</div>
				</div>
			</div>
		</div>
	</>
	)
}

export default Ticket