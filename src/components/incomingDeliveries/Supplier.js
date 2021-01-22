import React from 'react'
import styled from 'styled-components'
import Supplies from './Supplies'

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

export default Supplier

const Wrapper = styled.div`
  margin-right: 10px;
  width: 25%;
`
