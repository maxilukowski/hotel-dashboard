import React from 'react'

const IncomingDeliveriesCard = ({ data }) => {
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
