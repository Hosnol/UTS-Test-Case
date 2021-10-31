/// <reference types="cypress" />
// NIM  = 1941720146
// Nama = Annisa Wahyu Maulida
// Sorting Test
describe('Sorting Testing', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.title').should('include.text', 'Products')
      })
// Nama = Annisa Wahyu Maulida
    it('Menyortir produk berdasarkan default', () => {
        cy.get('[class="active_option"').should('be.visible')
        cy.get('[class="product_sort_container"]').should('be.visible')
    })
// Nama = Annisa Wahyu Maulida
    it('Menyortir produk berdasarkan Nama Produk A-Z', () => {
        cy.get('[class="active_option"').should('be.visible')
        cy.get('[class="product_sort_container"').should('have.value', 'az')
})
// Nama = Annisa Wahyu Maulida
    it('Menyortir produk berdasarkan Nama Produk Z-A', () => {
        cy.get('[class="product_sort_container"').should('be.visible')
        cy.get('[class="product_sort_container"]').select('za')
})
// Nama = Annisa Wahyu Maulida
    it('Menyortir produk berdasarkan Harga Produk Low-High', () => {
        cy.get('[class="product_sort_container"').should('be.visible')
        cy.get('[class="product_sort_container"]').select('lohi')
})
// Nama = Annisa Wahyu Maulida
    it('Menyortir produk berdasarkan Harga Produk High-Low', () => {
        cy.get('[class="product_sort_container"').should('be.visible')
        cy.get('[class="product_sort_container"]').select('hilo')
})
})