import React from 'react'
import { Bar } from 'react-chartjs-2'
import PropTypes from 'prop-types'

const SuppliersRankingByQuantity = ({ topThreeSupplier }) => {
  return (
    <div data-testid='chart-container-rankingByQuantity'>
      <Bar
        data={{
          labels: Object.keys(topThreeSupplier),
          datasets: [
            {
              label: 'Total Quantity',
              data: [
                topThreeSupplier['Yum Food'].totalQuantity,
                topThreeSupplier['Booz drinks'].totalQuantity,
                topThreeSupplier['Allstuff supplies'].totalQuantity,
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
SuppliersRankingByQuantity.propTypes = {
  topThreeSupplier: PropTypes.object.isRequired,
}

export default SuppliersRankingByQuantity
