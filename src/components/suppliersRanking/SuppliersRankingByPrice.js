import React from 'react'
import { Bar } from 'react-chartjs-2'
import PropTypes from 'prop-types'

const SuppliersRankingByPrice = ({ topThreeSupplier }) => {
  return (
    <div>
      <Bar
        data={{
          labels: Object.keys(topThreeSupplier),
          datasets: [
            {
              label: 'Total Price',
              data: [
                topThreeSupplier['Yum Food'].totalPrice,
                topThreeSupplier['Booz drinks'].totalPrice,
                topThreeSupplier['Allstuff supplies'].totalPrice,
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
    </div>
  )
}
SuppliersRankingByPrice.propTypes = {
  topThreeSupplier: PropTypes.object.isRequired,
}

export default SuppliersRankingByPrice
