import React, { useState } from 'react'
import styled from 'styled-components'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import IncomingDeliveriesCard from './components/incomingDeliveries/IncomingDeliveriesCard'
import OrderVolumeCard from './components/orderVolume/OrderVolumeCard'
import SuppliersRankingCard from './components/suppliersRanking/SuppliersRankingCard'
import TopThreeCard from './components/topThree/TopThreeCard'

const cardComponents = [
  {
    cardName: <TopThreeCard />,
    id: '1',
  },
  {
    cardName: <SuppliersRankingCard />,
    id: '2',
  },
  {
    cardName: <OrderVolumeCard />,
    id: '3',
  },
  {
    cardName: <IncomingDeliveriesCard />,
    id: '4',
  },
]

function App() {
  const [cards, setCards] = useState(cardComponents)

  function handleOnDragEnd(result) {
    if (!result.destination) return
    const items = [...cards]
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)
    setCards(items)
  }
  return (
    <>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId='dashboard-cards'>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {cards.map(({ cardName, id }, index) => {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                      <Wrapper
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        {cardName}
                      </Wrapper>
                    )}
                  </Draggable>
                )
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
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
