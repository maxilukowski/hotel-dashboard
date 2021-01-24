import React, { useState } from 'react'
import styled from 'styled-components'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import IncomingDeliveriesCard from './components/incomingDeliveries/IncomingDeliveriesCard'
import TotalOrderVolumeCard from './components/totalOrderVolume/TotalorderVolumeCard'
import SuppliersRankingCard from './components/suppliersRanking/SuppliersRankingCard'
import TopThreeCard from './components/topThree/TopThreeCard'
import data from './AVISIO frontend challenge orders.json'

const convertedDates = data.map((entry) => {
  const deliveryDate = new Date(entry.deliveryDate)

  return {
    ...entry,
    deliveryDate,
    formattedDeliveryDate: deliveryDate.toDateString(),
  }
})

const sortedData = convertedDates.sort(
  (a, b) => a.deliveryDate - b.deliveryDate
)

const cardComponents = [
  {
    cardName: TopThreeCard,
    id: '1',
  },
  {
    cardName: SuppliersRankingCard,
    id: '2',
  },
  {
    cardName: TotalOrderVolumeCard,
    id: '3',
  },
  {
    cardName: IncomingDeliveriesCard,
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
            <StyledList {...provided.droppableProps} ref={provided.innerRef}>
              {cards.map(({ cardName, id }, index) => {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                      <StyledLi
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        {React.createElement(cardName, {
                          data: sortedData,
                        })}
                      </StyledLi>
                    )}
                  </Draggable>
                )
              })}
              {provided.placeholder}
            </StyledList>
          )}
        </Droppable>
      </DragDropContext>
    </>
  )
}

export default App

const StyledLi = styled.li`
  background: var(--card);
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
`
const StyledList = styled.ul`
  list-style-type: none;
`
