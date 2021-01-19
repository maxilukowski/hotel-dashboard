import React from 'react'
import data from './../../AVISIO frontend challenge orders.json'

const TopThreeListByQuantity = () => {
  const compare = (a, b) => b.quantity - a.quantity
  const sortedData = data.sort(compare)
  const topThreeEntries = sortedData.slice(0, 3)

  return (
    <>
      {topThreeEntries.map((entry) => {
        return (
          <div
            key={(entry.productId * entry.quantity) / entry.price}
          >{`${entry.quantity} - ${entry.supplier}`}</div>
        )
      })}
    </>
  )
}

export default TopThreeListByQuantity
