import React from 'react'
import IncomingDeliveriesCard from './components/incomingDeliveries/IncomingDeliveriesCard'
import OrderVolumeCard from './components/orderVolume/OrderVolumeCard'
import SuppliersRankingCard from './components/suppliersRanking/SuppliersRankingCard'
import TopThreeCard from './components/topThree/TopThreeCard'
import { DragDropContext } from 'react-beautiful-dnd'
import styled from 'styled-components'

const cardComponents = [
  {
    cardName: <TopThreeCard />,
    id: 1,
  },
  {
    cardName: <SuppliersRankingCard />,
    id: 2,
  },
  {
    cardName: <OrderVolumeCard />,
    id: 3,
  },
  {
    cardName: <IncomingDeliveriesCard />,
    id: 4,
  },
]

function App() {
  return (
    <>
      <DragDropContext>
        {cardComponents.map(({ cardName, id }) => {
          return <Wrapper key={id}>{cardName}</Wrapper>
        })}
      </DragDropContext>
    </>
  )
}

export default App

const Wrapper = styled.div`
  background: var(--card);
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
`
