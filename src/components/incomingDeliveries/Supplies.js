import React from 'react'
import PropTypes from 'prop-types'

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
Supplies.propTypes = {
  deliveriesByDay: PropTypes.array.isRequired,
}
export default Supplies
