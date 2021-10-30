/// <reference types="cypress" />

// NIM  = 1941720045
// Nama = Hosnol Arifin

describe('Logout Testing', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.title').should('include.text', 'Products')
      })

    it('Memeriksa menu logout terlihat atau tidak', () => {
        cy.get('.bm-menu-wrap').find('#logout_sidebar_link').should('include.text', 'Logout')
    })

    it('Menu logout dapat diklik saat pengguna login', () => {
        cy.get('.bm-menu-wrap').find('#logout_sidebar_link').click({force: true})
        cy.get('#login-button').should('have.value','Login')
    })

    it('Klik logout, setelah berhasil logout di layar login tekan tombol kembali pada browser', () => {
        cy.get('.bm-menu-wrap').find('#logout_sidebar_link').click({force: true})
        cy.get('#login-button').should('have.value','Login')
        cy.go('back')
        cy.get('[data-test=error]').should('be.visible')
    })

    it('Login lalu tutup browser dan buka kembali website', ()=> {   
        cy.closeAllTabs()
        cy.visit('https://www.saucedemo.com/')
        cy.get('#login-button').should('have.value','Login')
    })

    it('Login dengan akun yang sama pada 2 tab  browser dan logout dari salah satu tab', ()=> {   
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.title').should('include.text', 'Products')
        cy.get('.bm-menu-wrap').find('#logout_sidebar_link').click({force: true})
        cy.get('#login-button').should('have.value','Login')       
    })
})