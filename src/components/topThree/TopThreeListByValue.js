import React from 'react'
import data from './../../AVISIO frontend challenge orders.json'
import styled from 'styled-components'

const TopThreeListByValue = () => {
  //get top3 supplier by total order value
  const compare = (a, b) => b.quantity * b.price - a.quantity * a.price
  const sortedData = [...data].sort(compare)
  const topThreeEntries = sortedData.slice(0, 3)

  return (
    <>
      {topThreeEntries.map(({ quantity, price, productName }, index) => {
        const value = (quantity * price).toFixed(2)
        return (
          <StyledDiv key={index}>
            <span>{`${index + 1} ${productName}`}</span>
            <span>{value}$</span>
          </StyledDiv>
        )
      })}
    </>
  )
}

export default TopThreeListByValue

const StyledDiv = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
`
