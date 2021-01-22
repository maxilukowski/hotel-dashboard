import React from 'react'
import styled from 'styled-components'
import { Bar } from 'react-chartjs-2'

const SuppliersRankingCard = ({ data }) => {
  let topThreeSupplier = {}

  data.forEach(({ supplier, quantity, price }) => {
    if (!topThreeSupplier.hasOwnProperty(supplier)) {
      topThreeSupplier[supplier] = {
        totalQuantity: 0,
        totalPrice: 0,
      }
    }
    topThreeSupplier[supplier].totalQuantity += Number(quantity)
    topThreeSupplier[supplier].totalPrice += Number(price * quantity)
  })

  return (
    <Wrapper>
      <Bar
        data={{
          labels: Object.keys(topThreeSupplier),
          datasets: [
            {
              label: 'by amount',
              data: [
                topThreeSupplier['Yum Food'].totalQuantity,
                topThreeSupplier['Booz drinks'].totalQuantity,
                topThreeSupplier['Allstuff supplies'].totalQuantity,
              ],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
              ],
              borderWidth: 1,
            },
          ],
        }}
        options={{
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      />
    </Wrapper>
  )
}

export default SuppliersRankingCard

const Wrapper = styled.div`
  padding: 10px;
`
