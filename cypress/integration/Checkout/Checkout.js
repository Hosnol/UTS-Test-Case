// NIM  = 1941720110
// Nama = Auzan Ihtifazhuddin Fakhru Zul Hazmi
// Checkout Testing

describe('Login', function (){
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').should('be.visible').click()
        cy.get('#add-to-cart-sauce-labs-backpack').should('be.visible').click()
        cy.get('[class="shopping_cart_link"]').should('be.visible').click()
    })
    
    // (1)
    it('Langsung Checkout tanpa ngisi first name, last name, postal code', () => {
        cy.get('#checkout').should('be.visible').click()
        cy.get('#continue').should('be.visible').click()
        cy.get('#finish').should('be.visible').click()
    })

    // (2)
    it('Checkout tanpa ngisi first name', () => {
        cy.get('#checkout').should('be.visible').click()
        cy.get('#last-name').type('Ihtifazhuddin')
        cy.get('#postal-code').type('65142')
        cy.get('#continue').should('be.visible').click()
        cy.get('#finish').should('be.visible').click()
    })
    // (3)
    it('Checkout tanpa ngisi last name', () => {
        cy.get('#checkout').should('be.visible').click()
        cy.get('#first-name').type('Auzan')
        cy.get('#postal-code').type('65142')
        cy.get('#continue').should('be.visible').click()
        cy.get('#finish').should('be.visible').click()
    })
    // (4)
    it('Checkout tanpa ngisi postal code', () => {
        cy.get('#checkout').should('be.visible').click()
        cy.get('#first-name').type('Auzan')
        cy.get('#last-name').type('Ihtifazhuddin')
        cy.get('#continue').should('be.visible').click()
        cy.get('#finish').should('be.visible').click()
    })
    // (5)
    it('Checkout dengan mengisi first name,last name, dan postal code', () => {
        cy.get('#checkout').should('be.visible').click()
        cy.get('#first-name').type('Auzan')
        cy.get('#last-name').type('Ihitifazhuddin')
        cy.get('#postal-code').type('65142')
        cy.get('#continue').should('be.visible').click()
        cy.get('#finish').should('be.visible').click()
    })
})