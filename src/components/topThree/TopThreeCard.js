import React from 'react'
import styled from 'styled-components'
import TopThreeListByQuantity from './TopThreeListByQuantity'

const TopThreeCard = () => {
  return (
    <Wrapper>
      <h1>Top Three</h1>
      <TopThreeListByQuantity />
    </Wrapper>
  )
}

export default TopThreeCard

const Wrapper = styled.div`
  background: var(--card);
  padding: 10px;
  border-radius: 5px;
`
