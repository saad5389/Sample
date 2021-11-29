export class Homepage {
    bestDealsCount() {
        return cy.get('#homepage .bg .kF .h101 a')
    }

    topTrendingDeeals() {
        return cy.get('#homepage .h46 a');
    }
}