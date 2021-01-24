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
SuppliersRankingByPrice.propTypes = {
  topThreeSupplier: PropTypes.object.isRequired,
}

export default SuppliersRankingByPrice
