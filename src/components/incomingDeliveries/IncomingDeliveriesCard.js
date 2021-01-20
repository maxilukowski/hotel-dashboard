import React from 'react'
import data from './../../AVISIO frontend challenge orders.json'

const IncomingDeliveriesCard = () => {
  const compare = (a, b) =>
    a.deliveryDate.replace(/\//g, '') - b.deliveryDate.replace(/\//g, '')
  const sortedData = data.sort(compare)
  return (
    <>
      {sortedData.map(({ deliveryDate, productId }) => {
        return <div key={productId + deliveryDate}>{deliveryDate}</div>
      })}
    </>
  )
}

export default IncomingDeliveriesCard
