import React from 'react'
import IncomingDeliveriesCard from './components/incomingDeliveries/IncomingDeliveriesCard'
import OrderVolumeCard from './components/orderVolume/OrderVolumeCard'
import SuppliersRankingCard from './components/suppliersRanking/SuppliersRankingCard'
import TopThreeCard from './components/topThree/TopThreeCard'
import { DragDropContext } from 'react-beautiful-dnd'

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
          return <div key={id}>{cardName}</div>
        })}
      </DragDropContext>
    </>
  )
}

export default App
