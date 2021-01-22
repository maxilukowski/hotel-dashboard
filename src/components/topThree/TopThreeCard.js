import React, { useState } from 'react'
import styled from 'styled-components'
import TopThreeListByQuantity from './TopThreeListByQuantity'
import TopThreeListByValue from './TopThreeListByValue'

const TopThreeCard = ({ data }) => {
  const [toggleValueVsQuantity, setToggleValueVsQuantity] = useState(true)
  return (
    <Wrapper>
      <Headline>
        <h1>Top Three</h1>
        <StyledButton
          onClick={() => setToggleValueVsQuantity(!toggleValueVsQuantity)}
        >
          {toggleValueVsQuantity ? 'value' : 'quantity'}
        </StyledButton>
      </Headline>
      {toggleValueVsQuantity ? (
        <TopThreeListByQuantity data={data} />
      ) : (
        <TopThreeListByValue data={data} />
      )}
    </Wrapper>
  )
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
  color: var(--card);
  background-color: var(--secondary);
  border-radius: 5px;
  height: 2rem;
`
