import React from 'react'
import styled from 'styled-components'
import DeliveryDates from './DeliveryDates'
import PropTypes from 'prop-types'
import Underlining from '../UnderLining'

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
        <Headline>
          <h1>Incoming Deliveries</h1>
          <Underlining />
        </Headline>
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
  max-height: 45vh;
  overflow-y: scroll;
  li:nth-child(even) {
    background-color: rgba(234, 129, 148, 0.2);
  }
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const Headline = styled.div`
  position: sticky;
  top: 0;
  background-color: var(--card);
`
