// i am aware, that the tests for the charts aren't complete. I hade difficulties grabbing
// the specific chart element, since i couldn't give it a specific data-testid
// therefor i just checked if there is a canvas getting rendered

describe('dashboard', () => {
  it('toggles top3 card between quantity and value', () => {
    cy.visit('http://localhost:3000')
    cy.contains('by quantity')
    cy.get("[data-testid='top3-toggle-button']").click()
    cy.contains('by value')
  })
  it('supplierRanking chart gets rendered and can be toggled', () => {
    cy.get("[data-testid='chart-container-rankingByQuantity']").should('exist')
    cy.get('canvas')
      .should('be.visible')
      .and((chart) => {
        expect(chart.height()).to.be.greaterThan(200)
      })
    cy.get("[data-testid='total-quantity']").should('exist')
    cy.get("[data-testid='supplier-ranking-toggle-button']").click()
    cy.get("[data-testid='total-price']").should('exist')
    cy.get('canvas')
      .should('be.visible')
      .and((chart) => {
        expect(chart.height()).to.be.greaterThan(200)
      })
    cy.get("[data-testid='chart-container-rankingByPrice']").should('exist')
  })
  it('switch between select options', () => {
    cy.get("[data-testid='orderVolume-selectbox']").select('egg')
    cy.get("[data-testid='orderVolume-selectbox']").select('sauce')
    cy.get("[data-testid='orderVolume-selectbox']").select('towel')
    cy.get("[data-testid='orderVolume-selectbox']").select('wine')
    cy.get("[data-testid='orderVolume-selectbox']").select('fish')
  })
  it('IncomingDeliveriesCard can be scrolled', () => {
    cy.get("[data-testid='incomingDeliveriesCard']").should('exist')
    cy.get("[data-testid='incomingDeliveriesCard']").trigger('mouseover')
    cy.get("[data-testid='incomingDeliveriesCard']").scrollTo('bottom', {
      duration: 2000,
    })
    cy.get("[data-testid='incomingDeliveriesCard']").scrollTo('top', {
      duration: 1000,
    })
  })
})
