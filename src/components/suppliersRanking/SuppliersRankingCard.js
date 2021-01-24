import React, { useState } from 'react'
import styled from 'styled-components'
import SuppliersRankingByQuantity from './SuppliersRankingByQuantity'
import SuppliersRankingByPrice from './SuppliersRankingByPrice'
import PropTypes from 'prop-types'
import Underlining from '../UnderLining'

const SuppliersRankingCard = ({ data }) => {
  const [togglePriceVsQuantity, setTogglePriceVsQuantity] = useState(true)
  const topThreeSupplier = {}

  data.forEach(({ supplier, quantity, price }) => {
    if (!topThreeSupplier.hasOwnProperty(supplier)) {
      topThreeSupplier[supplier] = {
        totalQuantity: 0,
        totalPrice: 0,
      }
    }
    topThreeSupplier[supplier].totalQuantity += Number(quantity)
    topThreeSupplier[supplier].totalPrice += Number(price * quantity)
  })

  return (
    <Wrapper>
      <Headline>
        <h1>Supplier Ranking</h1>
        <StyledButton
          onClick={() => setTogglePriceVsQuantity(!togglePriceVsQuantity)}
        >
          {togglePriceVsQuantity ? 'price' : 'quantity'}
        </StyledButton>
      </Headline>
      <Underlining />
      {togglePriceVsQuantity ? (
        <SuppliersRankingByQuantity topThreeSupplier={topThreeSupplier} />
      ) : (
        <SuppliersRankingByPrice topThreeSupplier={topThreeSupplier} />
      )}
    </Wrapper>
  )
}
SuppliersRankingCard.propTypes = {
  data: PropTypes.array.isRequired,
}

export default SuppliersRankingCard

const Wrapper = styled.div`
  padding: 10px;
`
const Headline = styled.div`
  display: flex;
  justify-content: space-between;
`
const StyledButton = styled.button`
  border: none;
  outline: none;
  color: var(--card);
  background-color: var(--secondary);
  border-radius: 5px;
  height: 2rem;
  width: 4rem;
  :hover {
    background-color: rgba(234, 129, 148, 1);
  }
`
