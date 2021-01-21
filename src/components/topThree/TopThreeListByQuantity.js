import React from 'react'

const TopThreeListByQuantity = ({ data }) => {
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
