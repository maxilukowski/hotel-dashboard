import React from 'react'
import Supplies from './Supplies'

const Supplier = ({ deliveriesByDay }) => {
  return (
    <>
      {Object.keys(deliveriesByDay).map((supplier, index) => {
        return (
          <div key={index}>
            {supplier}:
            <Supplies deliveriesByDay={deliveriesByDay[supplier]} />
          </div>
        )
      })}
    </>
  )
}

export default Supplier
