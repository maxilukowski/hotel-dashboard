import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Supplies = ({ deliveriesByDay }) => {
  return (
    <>
      {deliveriesByDay.map(({ productName, quantity }, index) => {
        return (
          <Wrapper key={index}>
            <span>{quantity}x</span>
            <span>{productName}</span>
          </Wrapper>
        )
      })}
    </>
  )
}
Supplies.propTypes = {
  deliveriesByDay: PropTypes.array.isRequired,
}
export default Supplies

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3px;
`
