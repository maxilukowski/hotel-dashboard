import React from 'react'
import styled from 'styled-components'

const Underlining = () => {
  return <UnderliningDiv></UnderliningDiv>
}

export default Underlining

const UnderliningDiv = styled.div`
  background-color: var(--secondary);
  height: 2px;
  width: 100%;

  margin: 15px auto;
`
