import React from 'react'
import styled from 'styled-components'
import SuppliersRankingByQuantity from './SuppliersRankingByQuantity'
import SuppliersRankingByPrice from './SuppliersRankingByPrice'

const SuppliersRankingCard = ({ data }) => {
  let topThreeSupplier = {}

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
      <SuppliersRankingByQuantity topThreeSupplier={topThreeSupplier} />
      <SuppliersRankingByPrice topThreeSupplier={topThreeSupplier} />
    </Wrapper>
  )
}

export default SuppliersRankingCard

const Wrapper = styled.div`
  padding: 10px;
`
