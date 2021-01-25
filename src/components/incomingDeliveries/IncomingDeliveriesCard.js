import React from 'react'
import styled from 'styled-components'
import DeliveryDates from './DeliveryDates'
import PropTypes from 'prop-types'
import Underlining from '../UnderLining'

const IncomingDeliveriesCard = ({ data }) => {
  // deliveriesByDayBySupplier stores the orderamount by each supplier for each day
  const deliveriesByDayBySupplier = {}

  // creates initial entries for unique deliverydays
  // each day then gets a supplier entry in which the ordered product and the
  // ordered quantity gets pushed into
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
      <Wrapper data-testid='incomingDeliveriesCard'>
        <Headline>
          <h1>Incoming Deliveries</h1>
          <ColorCodeWrapper>
            <YumWrapper>Yum Food</YumWrapper>
            <BoozWrapper>Booz drinks</BoozWrapper>
            <AllstuffWrapper>Allstuff supplies</AllstuffWrapper>
          </ColorCodeWrapper>

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
    background-color: rgba(234, 129, 148, 0.1);
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
const ColorCodeWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 0.9rem;
`

const YumWrapper = styled.div`
  background-color: rgba(234, 129, 148, 0.8);
  border-radius: 5px;
  padding: 2px;
`
const BoozWrapper = styled.div`
  background-color: rgba(69, 123, 157, 0.8);
  border-radius: 5px;
  padding: 2px;
`
const AllstuffWrapper = styled.div`
  background-color: rgba(129, 178, 154, 0.8);
  border-radius: 5px;
  padding: 2px;
`
