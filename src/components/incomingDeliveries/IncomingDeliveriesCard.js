import React from 'react'
import styled from 'styled-components'
import DeliveryDates from './DeliveryDates'
import PropTypes from 'prop-types'

const IncomingDeliveriesCard = ({ data }) => {
  const deliveriesByDayBySupplier = {}
  data.forEach(({ formattedDeliveryDate, supplier, productName, quantity }) => {
    if (!deliveriesByDayBySupplier.hasOwnProperty(formattedDeliveryDate)) {
      deliveriesByDayBySupplier[formattedDeliveryDate] = {}
    }
    if (
      !deliveriesByDayBySupplier[formattedDeliveryDate].hasOwnProperty(supplier)
    ) {
      deliveriesByDayBySupplier[formattedDeliveryDate][supplier] = []
    }
    deliveriesByDayBySupplier[formattedDeliveryDate][supplier].push({
      productName,
      quantity,
    })
  })

  return (
    <>
      <Wrapper>
        <DeliveryDates deliveriesByDayBySupplier={deliveriesByDayBySupplier} />
      </Wrapper>
    </>
  )
}
IncomingDeliveriesCard.propTypes = {
  data: PropTypes.array.isRequired,
}

export default IncomingDeliveriesCard

const Wrapper = styled.ul`
  ::-webkit-scrollbar {
    display: none;
  }
  display: flex;
  flex-direction: column;
  max-height: 30vh;
  overflow-y: scroll;
  li:nth-child(even) {
    background-color: rgb(255, 232, 214, 0.6);
  }
  list-style-type: none;
  margin: 0;
  padding: 0;
`
