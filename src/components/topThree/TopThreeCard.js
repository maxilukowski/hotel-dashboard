import React, { useState } from 'react'
import styled from 'styled-components'
import TopThreeListByQuantity from './TopThreeListByQuantity'
import TopThreeListByValue from './TopThreeListByValue'

const TopThreeCard = () => {
  const [toggleValueVsQuantity, setToggleValueVsQuantity] = useState(true)
  return (
    <Wrapper>
      <h1>Top Three</h1>
      <button onClick={() => setToggleValueVsQuantity(!toggleValueVsQuantity)}>
        <span>{toggleValueVsQuantity ? 'value' : 'quantity'}</span>
      </button>
      {toggleValueVsQuantity ? (
        <TopThreeListByQuantity />
      ) : (
        <TopThreeListByValue />
      )}
    </Wrapper>
  )
}

export default TopThreeCard

const Wrapper = styled.div`
  background: var(--card);
  padding: 10px;
  border-radius: 5px;
`
