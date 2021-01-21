import React from 'react'

const IncomingDeliveriesCard = ({ data }) => {
  const convertedDates = data.map((entry) => {
    const deliveryDate = new Date(entry.deliveryDate)

    return { ...entry, deliveryDate }
  })

  const sortedData = convertedDates.sort(
    (a, b) => a.deliveryDate - b.deliveryDate
  )

  let deliveriesByDayBySupplier = {}
  sortedData.forEach(({ deliveryDate, supplier, productName, quantity }) => {
    if (!deliveriesByDayBySupplier.hasOwnProperty(deliveryDate)) {
      deliveriesByDayBySupplier[deliveryDate] = {}
    }
    if (!deliveriesByDayBySupplier[deliveryDate].hasOwnProperty(supplier)) {
      deliveriesByDayBySupplier[deliveryDate][supplier] = []
    }
    deliveriesByDayBySupplier[deliveryDate][supplier].push({
      productName,
      quantity,
    })
  })

  return (
    <>
      {Object.keys(deliveriesByDayBySupplier).map((deliveryDate, index) => {
        return (
          <div key={index}>
            {new Date(deliveryDate).toDateString()}
            {Object.keys(deliveriesByDayBySupplier[deliveryDate]).map(
              (supplier, index) => {
                return (
                  <div key={index}>
                    {supplier}:
                    {deliveriesByDayBySupplier[deliveryDate][supplier].map(
                      ({ productName, quantity }, index) => {
                        return (
                          <div key={index}>
                            {productName} - {quantity}
                          </div>
                        )
                      }
                    )}
                  </div>
                )
              }
            )}
          </div>
        )
      })}
    </>
  )
}

export default IncomingDeliveriesCard
