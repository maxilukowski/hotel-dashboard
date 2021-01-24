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
                topThreeSupplier['Yum Food'].totalPrice.toFixed(2),
                topThreeSupplier['Booz drinks'].totalPrice.toFixed(2),
                topThreeSupplier['Allstuff supplies'].totalPrice.toFixed(2),
              ],
              backgroundColor: [
                'rgba(234, 129, 148, 0.8)',
                'rgba(69, 123, 157, 0.8)',
                'rgba(129, 178, 154, 0.8)',
              ],
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
