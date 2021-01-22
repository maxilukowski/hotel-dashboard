import React from 'react'
import styled from 'styled-components'
import Supplier from './Supplier'

const DeliveryDate = ({ deliveriesByDayBySupplier }) => {
  return (
    <>
      {Object.keys(deliveriesByDayBySupplier).map((deliveryDate, index) => {
        return (
          <Wrapper key={index}>
            <DeliveryDateDiv>
              {new Date(deliveryDate).toDateString()}
            </DeliveryDateDiv>
            <Supplier
              deliveriesByDay={deliveriesByDayBySupplier[deliveryDate]}
            />
          </Wrapper>
        )
      })}
    </>
  )
}

export default DeliveryDate

const Wrapper = styled.div`
  display: flex;
`

const DeliveryDateDiv = styled.div`
  margin-right: 10px;
`
