import React from 'react'
import styled from 'styled-components'
import Supplies from './Supplies'
import PropTypes from 'prop-types'

const Supplier = ({ deliveriesByDay }) => {
  return (
    <>
      {Object.keys(deliveriesByDay).map((supplier, index) => {
        let theme
        if (supplier === 'Yum Food') theme = 'rgba(234, 129, 148, 0.8)'
        if (supplier === 'Booz drinks') theme = 'rgba(69, 123, 157, 0.8)'
        if (supplier === 'Allstuff supplies') theme = 'rgba(129, 178, 154, 0.8)'

        return (
          <Wrapper key={index} style={{ backgroundColor: theme }}>
            <Supplies deliveriesByDay={deliveriesByDay[supplier]} />
          </Wrapper>
        )
      })}
    </>
  )
}
Supplier.propTypes = {
  deliveriesByDay: PropTypes.object.isRequired,
}

export default Supplier

const Wrapper = styled.div`
  margin-right: 10px;
  border-radius: 5px;
  width: 25%;
  padding: 5px;
`
