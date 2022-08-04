import React from 'react'
import { useSortTicker } from '../assets/hooks/useSortTicker'
import SisebarFilter from './SisebarFilter/SisebarFilter'
import Ticket from './Ticket/Ticket'
import style from './TicketsList.module.css'

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
  )
}

export default TicketsList