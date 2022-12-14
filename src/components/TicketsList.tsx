import React, { useState } from 'react'
import { TicketProps, useSortTicker } from '../assets/hooks/useSortTicker'
import SisebarFilter from './SisebarFilter/SisebarFilter'
import Ticket from './Ticket/Ticket'
import style from './TicketsList.module.css'
import angle from '../assets/image/angle.png'

const TicketsList: React.FC<any> = (props) => {
  const [sortTicker, toogleTicker,] = useSortTicker()
  const [newSortTicker, setNewSortTicker] = useState<Array<TicketProps>>([])

  const listTicker = newSortTicker.length
    ?
    newSortTicker
      .map((el: TicketProps) => <Ticket
        key={el.price}
        item={el}
      />
      )

    :
    sortTicker
      .map((el: TicketProps) => <Ticket
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
        <SisebarFilter
          sortTicker={sortTicker}
          setNewSortTicker={setNewSortTicker}
        />
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