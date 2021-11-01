//Nama          : Abdur Rozak Junaidi
//NIM	        : 1941720094
//Kelas         : TI 3D
//Test Case     : Add to Cart

describe('Add to Cart', () => {
    it('add to cart barang Sauce Labs Backpack', () => {
        //masuk ke web saucedemo
        cy.visit('https://www.saucedemo.com/')
        //akses ke username
        cy.get('#user-name')
            //menulis username
            .type('standard_user')
        //akses ke password
        cy.get('#password')
            //menuliskan password
            .type('secret_sauce')
        //klik tombol login
        cy.contains('Login').click()
        //klik produk
        cy.get('#add-to-cart-sauce-labs-backpack').click()
    })

    it('Add to cart barang Sauce Labs Backpack, Sauce Labs Bolt T-Shirt dan Sauce Labs Bike Light', () => {
        //masuk ke web saucedemo
        cy.visit('https://www.saucedemo.com/')
        //akses ke username
        cy.get('#user-name')
            //menulis username
            .type('standard_user')
        //akses ke password
        cy.get('#password')
            //menuliskan password
            .type('secret_sauce')
        //klik tombol login
        cy.contains('Login').click()
        //klik produk
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#add-to-cart-sauce-labs-bike-light').click()
        cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click()
    })

    it('Add to cart semua barang', () => {
        //masuk ke web saucedemo
        cy.visit('https://www.saucedemo.com/')
        //akses ke username
        cy.get('#user-name')
            //menulis username
            .type('standard_user')
        //akses ke password
        cy.get('#password')
            //menuliskan password
            .type('secret_sauce')
        //klik tombol login
        cy.contains('Login').click()
        //klik produk
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#add-to-cart-sauce-labs-bike-light').click()
        cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click()
        cy.get('#add-to-cart-sauce-labs-fleece-jacket').click()
        cy.get('#add-to-cart-sauce-labs-onesie').click()
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
    })

    it('Add to cart barang Sauce Labs Backpack lewat nama barang', () => {
        //masuk ke web saucedemo
        cy.visit('https://www.saucedemo.com/')
        //akses ke username
        cy.get('#user-name')
            //menulis username
            .type('standard_user')
        //akses ke password
        cy.get('#password')
            //menuliskan password
            .type('secret_sauce')
        //klik tombol login
        cy.contains('Login').click()
        //klik nama barang
        cy.get('#item_4_title_link > .inventory_item_name').click()
        //klik produk
        cy.get('#add-to-cart-sauce-labs-backpack').click()
    })

    it('Add to cart barang Sauce Labs Backpack lewat kolom barang', () => {
        //masuk ke web saucedemo
        cy.visit('https://www.saucedemo.com/')
        //akses ke username
        cy.get('#user-name')
            //menulis username
            .type('standard_user')
        //akses ke password
        cy.get('#password')
            //menuliskan password
            .type('secret_sauce')
        //klik tombol login
        cy.contains('Login').click()
        //klik deskripsi produk
        cy.get(':nth-child(1) > .inventory_item_description > .inventory_item_label > .inventory_item_desc').click()
    })
})