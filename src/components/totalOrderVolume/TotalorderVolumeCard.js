import React, { useState } from 'react'
import styled from 'styled-components'
import { Line } from 'react-chartjs-2'
import PropTypes from 'prop-types'
import Underlining from '../UnderLining'

const TotalOrderVolumeCard = ({ data }) => {
  const [appliedFilter, setAppliedFilter] = useState('total')

  const uniqueDeliveryDates = [
    ...new Set(data.map((entry) => entry.formattedDeliveryDate)),
  ]

  const selectboxOptions = [
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

  const orderVolumeEachDay = []

  const filteredData =
    appliedFilter === 'total'
      ? [...data]
      : [...data.filter((entry) => appliedFilterExists(entry, appliedFilter))]

  // creates an entry in orderVolumeEachDay with the sum of each day for each
  // applied filter/selectboxOption
  uniqueDeliveryDates.forEach((formattedDeliveryDate, index) => {
    const entriesPerDay = filteredData.filter((entry) => {
      return formattedDeliveryDate === entry.formattedDeliveryDate
    })

    const sumOfDay = entriesPerDay.reduce((sum, current) => {
      return sum + Number(current.price * current.quantity)
    }, 0)
    orderVolumeEachDay[index] = sumOfDay
  })

  return (
    <Wrapper>
      <Headline>
        <h1>Total Order Volume</h1>
        <StyledSelect
          data-testid='orderVolume-selectbox'
          value={appliedFilter}
          onChange={(e) => setAppliedFilter(e.target.value)}
        >
          {selectboxOptions.map((entry, index) => {
            return (
              <option key={index} value={entry}>
                {entry}
              </option>
            )
          })}
        </StyledSelect>
      </Headline>
      <Underlining />
      <div>
        <Line
          data={{
            labels: uniqueDeliveryDates,
            datasets: [
              {
                label: appliedFilter,
                data: orderVolumeEachDay,

                borderColor: 'rgba(234, 129, 148, 1)',
                backgroundColor: 'rgba(234, 129, 148, 1)',
                fill: false,
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
const Headline = styled.div`
  display: flex;
  justify-content: space-between;
`

const StyledSelect = styled.select`
  outline: none;
  border-color: var(--secondary);
  border-radius: 5px;
`
