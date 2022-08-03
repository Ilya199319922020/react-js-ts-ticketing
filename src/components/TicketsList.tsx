import React, { useEffect, useState } from 'react'
import {  useSortTicker } from '../assets/hooks/useSortTicker'

const TicketsList: React.FC<any> = (props) => {

  const [stateTickers, sortTicker] = useSortTicker()
  console.log(sortTicker)
  return (
    <>
      <div>TicketsList</div>
    </>
  )
}

export default TicketsList