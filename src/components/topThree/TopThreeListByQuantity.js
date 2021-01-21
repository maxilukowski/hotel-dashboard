import React from 'react'

const TopThreeListByQuantity = ({ data }) => {
  const compare = (a, b) => b.quantity - a.quantity
  const sortedData = data.sort(compare)
  const topThreeEntries = sortedData.slice(0, 3)

  return (
    <>
      {topThreeEntries.map(({ quantity, productName }, index) => {
        return <div key={index}>{`${quantity} - ${productName}`}</div>
      })}
    </>
  )
}

export default TopThreeListByQuantity
