export class Helper {
    baseURL() {
        cy.visit('/')
    }

    coupons() {
        cy.visit('/coupons/')
    }

}