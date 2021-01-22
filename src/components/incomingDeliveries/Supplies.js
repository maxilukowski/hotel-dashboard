import React from 'react'

const Supplies = ({ deliveriesByDay }) => {
  return (
    <>
      {deliveriesByDay.map(({ productName, quantity }, index) => {
        return (
          <div key={index}>
            {productName} - {quantity}
          </div>
        )
      })}
    </>
  )
}

export default Supplies
