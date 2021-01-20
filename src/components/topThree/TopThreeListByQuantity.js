import React from 'react'
import data from './../../AVISIO frontend challenge orders.json'

const TopThreeListByQuantity = () => {
  const compare = (a, b) => b.quantity - a.quantity
  const sortedData = data.sort(compare)
  const topThreeEntries = sortedData.slice(0, 3)

  return (
    <>
      {topThreeEntries.map(
        ({ quantity, deliveryDate, productId, productName }) => {
          return (
            <div
              key={productId + deliveryDate}
            >{`${quantity} - ${productName}`}</div>
          )
        }
      )}
    </>
  )
}

export default TopThreeListByQuantity
