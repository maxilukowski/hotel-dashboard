import React from 'react'
import styled from 'styled-components'
import Supplies from './Supplies'
import PropTypes from 'prop-types'

const Supplier = ({ deliveriesByDay }) => {
  return (
    <>
      {Object.keys(deliveriesByDay).map((supplier, index) => {
        return (
          <Wrapper key={index}>
            {supplier}:
            <Supplies deliveriesByDay={deliveriesByDay[supplier]} />
          </Wrapper>
        )
      })}
    </>
  )
}
Supplier.propTypes = {
  deliveriesByDay: PropTypes.object.isRequired,
}

export default Supplier

const Wrapper = styled.div`
  margin-right: 10px;
  width: 25%;
`
