import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TopThreeListByQuantity = ({ data }) => {
  const compare = (a, b) => b.quantity - a.quantity
  const sortedData = [...data].sort(compare)
  const topThreeEntries = sortedData.slice(0, 3)

  return (
    <>
      {topThreeEntries.map(({ quantity, productName }, index) => {
        return (
          <StyledDiv key={index}>
            <span>
              {`${index + 1}  
              ${productName}`}
            </span>
            <span>{quantity} units</span>
          </StyledDiv>
        )
      })}
    </>
  )
}
TopThreeListByQuantity.propTypes = {
  data: PropTypes.array.isRequired,
}
export default TopThreeListByQuantity

const StyledDiv = styled.div`
  width: 20vw;
  display: flex;
  justify-content: space-between;
`
