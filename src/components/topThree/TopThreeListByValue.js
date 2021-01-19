import React from 'react'
import data from './../../AVISIO frontend challenge orders.json'

const TopThreeListByValue = ({ setToggle, toggle }) => {
  const compare = (a, b) => b.quantity * b.price - a.quantity * a.price
  const sortedData = data.sort(compare)
  const topThreeEntries = sortedData.slice(0, 3)

  return (
    <>
      <button onClick={() => setToggle(!toggle)}>Quantity</button>
      {topThreeEntries.map(({ quantity, price, productId, productName }) => {
        const value = (quantity * price).toFixed(2)
        return (
          <div key={(productId * quantity) / price}>
            {`${value}$ - ${productName}`}
          </div>
        )
      })}
    </>
  )
}

export default TopThreeListByValue
