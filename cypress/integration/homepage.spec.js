import { Homepage } from "../pageObjects/homepageObject";
const homepage = new Homepage();
import { Helper } from "../helpers/helper"
const helper = new Helper();

describe("Cypress POM Test Suite", function () {
    it("1. Navigate to iPrice homepage", function () {
        helper.baseURL();
    })

    it("1(a). Grab and Count the list of stores in the Find the Best Deals Online", function () {
        homepage.bestDealsCount()
        .then(listing => {
            const listingCount = Cypress.$(listing).length;
            cy.get('#homepage .bg .kF .h101 a').should('have.length', listingCount);
        cy.log(listingCount);
        })
    })

    it("1(b). Count and Validate items in Top Trending Products", function () {
        const locator = 'data-vars-cgt';
        homepage.topTrendingDeeals()
        .then(topdeals => {
            const topDeals = Cypress.$(topdeals).length;
            cy.get('#homepage .h46 a').should('have.length', topDeals);
            cy.get('#homepage .h46 a').should('have.attr', locator);      
        })
    })

    it("2. Navigate to iPrice Coupons page", function () {
        helper.coupons();
    })

    it("2(a). url of stores in Top Stores are all active", function () {
        cy.get('.mw #coupon-overview .rY a').each($a => {
            const msg = $a.text();
            cy.log(msg);
            expect($a, msg).to.have.attr("href");
        })
    })

    it("2(b). t list of stores in Top Stores is redirected to their proper store url", function () {
        [
            "coupons/dell/",
            "coupons/lazada/",
            "coupons/shopee/",
            "coupons/lenovo/",
            "coupons/foodpanda/",
            "coupons/zalora/",
            "coupons/lalamove/",
            "coupons/addidas/",
            "coupons/grabfood/",
            "coupons/klook/",
            "coupons/agoda/",
            "coupons/watsons-malaysia/",
            "coupons/airasia/",
            "coupons/grab/"
        ]
        .forEach((url) => {
                cy.visit(url);
            })
        })
})