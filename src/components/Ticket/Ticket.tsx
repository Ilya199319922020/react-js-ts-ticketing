import React from 'react'
import style from './Ticket.module.css'

const Ticket: React.FC<any> = ({ item }) => {
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
				<span>Картинка</span>
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
				<div>
					<span>{stops} {
						stops > 1
							? 'ПЕРЕСАДКИ'
							: stops === 0
								? 'ПЕРЕСАДОК'
								: 'ПЕРЕСАДКA'
					}
					</span>
					<div>линия с самолётом</div>
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