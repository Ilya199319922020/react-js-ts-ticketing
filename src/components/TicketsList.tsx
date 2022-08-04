import React from 'react'
import { useSortTicker } from '../assets/hooks/useSortTicker'
import SisebarFilter from './SisebarFilter/SisebarFilter'
import Ticket from './Ticket/Ticket'
import style from './TicketsList.module.css'
import angle from '../assets/image/angle.png'

const TicketsList: React.FC<any> = (props) => {
  const [sortTicker] = useSortTicker()

  const listTicker = sortTicker
    .map(el => <Ticket
      key={el.price}
      item={el}
    />
    )

  return (
    <div
      className={style.wrapper}
    >
      <img
        className={style.wrapper__image}
        src={angle} />
      <div
        className={style.main}
      >
        <SisebarFilter />
        <div
          className={style.main__listTicker}
        >
          {
            listTicker
          }
        </div>
      </div>
    </div>
  )
}

export default TicketsList