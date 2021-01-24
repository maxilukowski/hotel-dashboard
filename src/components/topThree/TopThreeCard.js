import React, { useState } from 'react'
import styled from 'styled-components'
import TopThreeListByQuantity from './TopThreeListByQuantity'
import TopThreeListByValue from './TopThreeListByValue'
import PropTypes from 'prop-types'
import Underlining from '../UnderLining'

const TopThreeCard = ({ data }) => {
  const [toggleValueVsQuantity, setToggleValueVsQuantity] = useState(true)
  return (
    <Wrapper>
      <Headline>
        <h1>Best Seller</h1>
        <StyledButton
          onClick={() => setToggleValueVsQuantity(!toggleValueVsQuantity)}
        >
          {toggleValueVsQuantity ? 'value' : 'quantity'}
        </StyledButton>
      </Headline>
      <Underlining />
      {toggleValueVsQuantity ? (
        <StypedP>by quantity</StypedP>
      ) : (
        <StypedP>by value</StypedP>
      )}
      {toggleValueVsQuantity ? (
        <TopThreeListByQuantity data={data} />
      ) : (
        <TopThreeListByValue data={data} />
      )}
    </Wrapper>
  )
}
TopThreeCard.propTypes = {
  data: PropTypes.array.isRequired,
}
export default TopThreeCard

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

const StypedP = styled.p`
  text-align: center;
`
