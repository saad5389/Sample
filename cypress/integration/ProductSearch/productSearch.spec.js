import { Helper } from "../../helpers/helper.js"
const helper = new Helper();

Given ('Navigate to iPrice Malaysia', () => {
    cy.visit('/');
})

And ('I do the assertion on Homepage', () => {
    cy.title().should('eq', 'Online Shopping, Coupons & Discount Code at iprice Malaysia')
})

When ('I do the search for Dell', () => {
    cy.get('input#term-desktop').type('Dell{enter}', {force: true})
})

Then ('I do the verification on the searched page contains Dell', () => {
    cy.title().should('eq', 'Search | iprice Malaysia')
})