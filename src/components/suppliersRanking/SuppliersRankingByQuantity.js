import React from 'react'
import { Bar } from 'react-chartjs-2'
import PropTypes from 'prop-types'

const SuppliersRankingByQuantity = ({ topThreeSupplier }) => {
  return (
    <div>
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
                'rgba(234, 129, 148, 1)',
                'rgba(69, 123, 157, 1)',
                'rgba(129, 178, 154, 1)',
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
