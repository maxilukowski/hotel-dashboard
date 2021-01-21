import React from 'react'

const IncomingDeliveriesCard = ({ data }) => {
  const convertedDates = data.map((entry) => {
    const deliveryDate = new Date(entry.deliveryDate)

    return { ...entry, deliveryDate }
  })

  const sortedData = convertedDates.sort(
    (a, b) => a.deliveryDate - b.deliveryDate
  )

  return (
    <>
      {sortedData.map(({ deliveryDate }, index) => {
        return <div key={index}>{deliveryDate.toDateString()}</div>
      })}
    </>
  )
}

export default IncomingDeliveriesCard
