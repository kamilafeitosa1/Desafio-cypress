const VIEW_PRODUCT = ':nth-child(4) > .product-image-wrapper > .choose > .nav > li > a'
const ADICIONAR_CARRINHO = ':nth-child(5) > .btn'
const VIEW_CART = 'u'
const PRECO_ANTES = '.product-information span span'
const PRECO_DEPOIS = '.cart_price > p'
const NOME_ANTES = '.product-information > h2'
const NOME_DEPOIS = 'h4 > a'

class AdicionarCarrinho {

    visualizarProduto() {
        cy.get(VIEW_PRODUCT)
            .should('be.visible')
            .click()
    }

    adicionarAoCarrinho() {
        cy.get(ADICIONAR_CARRINHO)
            .should('be.visible')
            .click()
    }

    nomeProduto() {
        cy.get(NOME_ANTES)
            .should('be.visible')
            .invoke('text')
            .then(text => text.trim())
            .should('not.be.empty')
            .as('nomeProduto')
    }

    precoProduto() {
        cy.get(PRECO_ANTES, { timeout: 10000 })
            .should('be.visible')
            .invoke('text')
            .then(text => text.trim())
            .should('not.be.empty')
            .as('precoProduto')
    }

    visualizarCarrinho() {
        cy.get(VIEW_CART)
            .should('be.visible')
            .click()
    }

    validarNomeIgual() {
        cy.get('@nomeProduto').then(nomeSalvo => {
            cy.get(NOME_DEPOIS)
                .invoke('text')
                .then(nomeCarrinho => {
                    expect(nomeCarrinho.trim()).to.equal(nomeSalvo)
                })
        })
    }

    validarPrecoIgual() {
        cy.get('@precoProduto').then(precoSalvo => {
            cy.get(PRECO_DEPOIS)
                .invoke('text')
                .then(precoCarrinho => {
                    expect(precoCarrinho.trim()).to.equal(precoSalvo)
                })
        })
    }
}

export default new AdicionarCarrinho()