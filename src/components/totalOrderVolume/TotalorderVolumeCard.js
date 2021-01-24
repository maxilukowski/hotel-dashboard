import React, { useState } from 'react'
import styled from 'styled-components'
import { Line } from 'react-chartjs-2'
import PropTypes from 'prop-types'

const TotalOrderVolumeCard = ({ data }) => {
  const [appliedFilter, setAppliedFilter] = useState('total')
  const timeSpan = [
    ...new Set(data.map((entry) => entry.formattedDeliveryDate)),
  ]

  const filteredSelectboxOptions = [
    ...new Set(data.map((entry) => entry.supplier)),
    ...new Set(data.map((entry) => entry.productCategory1)),
    ...new Set(data.map((entry) => entry.productCategory2)),
    ...['total'],
  ]

  function appliedFilterExists(entry, appliedFilter) {
    return (
      entry.productCategory1 === appliedFilter ||
      entry.productCategory2 === appliedFilter ||
      entry.supplier === appliedFilter
    )
  }

  const orderVolume = []
  const filteredData =
    appliedFilter === 'total'
      ? [...data]
      : [...data.filter((entry) => appliedFilterExists(entry, appliedFilter))]

  timeSpan.forEach((formattedDeliveryDate, index) => {
    const entriesPerDay = filteredData.filter((entry) => {
      return formattedDeliveryDate === entry.formattedDeliveryDate
    })

    const sumOfDay = entriesPerDay.reduce((sum, current) => {
      return sum + Number(current.price * current.quantity)
    }, 0)
    orderVolume[index] = sumOfDay
  })

  return (
    <Wrapper>
      <h1>Total Order Volume</h1>
      <select
        value={appliedFilter}
        onChange={(e) => setAppliedFilter(e.target.value)}
      >
        {filteredSelectboxOptions.map((entry, index) => {
          return (
            <option key={index} value={entry}>
              {entry}
            </option>
          )
        })}
      </select>
      <div>
        <Line
          data={{
            labels: timeSpan,
            datasets: [
              {
                label: appliedFilter,
                data: orderVolume,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',

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
    </Wrapper>
  )
}

TotalOrderVolumeCard.propTypes = {
  data: PropTypes.array.isRequired,
}

export default TotalOrderVolumeCard

const Wrapper = styled.div`
  padding: 10px;
`
