import React, { useState } from 'react'
import styled from 'styled-components'
import TopThreeListByQuantity from './TopThreeListByQuantity'
import TopThreeListByValue from './TopThreeListByValue'

const TopThreeCard = ({ data }) => {
  const [toggleValueVsQuantity, setToggleValueVsQuantity] = useState(true)
  return (
    <>
      <Container>
        <h1>Top Three</h1>
        <StyledButton
          onClick={() => setToggleValueVsQuantity(!toggleValueVsQuantity)}
        >
          {toggleValueVsQuantity ? 'value' : 'quantity'}
        </StyledButton>
      </Container>
      {toggleValueVsQuantity ? (
        <TopThreeListByQuantity data={data} />
      ) : (
        <TopThreeListByValue data={data} />
      )}
    </>
  )
}

export default TopThreeCard

const Container = styled.div`
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
