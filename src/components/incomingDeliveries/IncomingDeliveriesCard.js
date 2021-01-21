import React from 'react'

const IncomingDeliveriesCard = ({ data }) => {
  const compare = (a, b) =>
    a.deliveryDate.replace(/\//g, '') - b.deliveryDate.replace(/\//g, '')
  const sortedData = data.sort(compare)
  return (
    <>
      {sortedData.map(({ deliveryDate }, index) => {
        return <div key={index}>{deliveryDate}</div>
      })}
    </>
  )
}

export default IncomingDeliveriesCard
