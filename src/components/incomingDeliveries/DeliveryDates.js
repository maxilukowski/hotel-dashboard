import React from 'react'
import styled from 'styled-components'
import Supplier from './Supplier'
import PropTypes from 'prop-types'

const DeliveryDate = ({ deliveriesByDayBySupplier }) => {
  return (
    <>
      {Object.keys(deliveriesByDayBySupplier).map(
        (formattedDeliveryDate, index) => {
          return (
            <Wrapper key={index}>
              <DeliveryDateDiv>{formattedDeliveryDate}</DeliveryDateDiv>
              <Supplier
                deliveriesByDay={
                  deliveriesByDayBySupplier[formattedDeliveryDate]
                }
              />
            </Wrapper>
          )
        }
      )}
    </>
  )
}
DeliveryDate.propTypes = {
  deliveriesByDayBySupplier: PropTypes.object.isRequired,
}
export default DeliveryDate

const Wrapper = styled.li`
  display: flex;
  margin-bottom: 15px;
  padding: 10px;
`

const DeliveryDateDiv = styled.div`
  margin-right: 10px;
  width: 15%;
`
