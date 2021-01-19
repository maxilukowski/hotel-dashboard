import React from 'react'
import IncomingDeliveriesCard from './components/incomingDeliveries/IncomingDeliveriesCard'
import OrderVolumeCard from './components/orderVolume/OrderVolumeCard'
import SuppliersRankingCard from './components/suppliersRanking/SuppliersRankingCard'
import TopThreeCard from './components/topThree/TopThreeCard'

function App() {
  return (
    <>
      <TopThreeCard />
      <SuppliersRankingCard />
      <OrderVolumeCard />
      <IncomingDeliveriesCard />
    </>
  )
}

export default App
