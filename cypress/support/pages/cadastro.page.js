const NAME = '[data-qa="signup-name"]'
const EMAIL = '[data-qa="signup-email"]'
const SIGNUP = '[data-qa="signup-button"]'
const MR = ':nth-child(3) > .top > [data-qa="title"] > span > [name="title"]'
const PASSWORD = '#password'
const DAY = '#days'
const MONTH = '#months'
const YEAR = '#years'
const FIRST_NAME = '#first_name'
const LAST_NAME = '#last_name'
const COMPANY = '#company'
const ADDRESS = '[data-qa="address"]'
const ADDRESS2 = '[data-qa="address2"]'
const COUNTRY = '#country'
const STATE ='#state'
const CITY = '#city'
const ZIP_CODE = '#zipcode'
const MOBILE_NUMBER = '#mobile_number'
const CREATE_ACCOUNT = '[data-qa="create-account"]'
const CONTINUE_BUTTON='[data-qa="continue-button"]'
const LOGGED_IN = ':nth-child(10) > a'
class cadastro{

    cadastroNovo(){

        cy.get(NAME).type(Cypress.env('signup-name'))
       const email = `user_${Date.now()}@email.com`
         cy.get(EMAIL).type(email)
        cy.get(SIGNUP).click()
        cy.get(MR).click()
        cy.get(PASSWORD).type(Cypress.env('password'))
        cy.get(DAY).select(Cypress.env('day'))
        cy.get(MONTH).select(Cypress.env('month'))
        cy.get(YEAR).select(Cypress.env('year'))
        cy.get(FIRST_NAME).type(Cypress.env('firstname'))
        cy.get(LAST_NAME).type(Cypress.env('lastname'))
        cy.get(COMPANY).type(Cypress.env('company'))   
        cy.get(ADDRESS).type(Cypress.env('address'))
        cy.get(ADDRESS2).type(Cypress.env('address2'))
        cy.get(COUNTRY).select('Canada')
        cy.get(STATE).type('Rio')
         cy.get(CITY).type('Porto Alegre')
        cy.get(ZIP_CODE).type(Cypress.env('zipCode'))
        cy.get(MOBILE_NUMBER).type(Cypress.env('mobilenumber'))
        

cy.get(CREATE_ACCOUNT).should('be.visible').click()
cy.get(CONTINUE_BUTTON).click()
    }
validarLoginSucesso(){
        cy.contains(LOGGED_IN, 'Logged in as ' + Cypress.env('signup-name'), { timeout: 10000 })
          .should('be.visible')
    }
    }

export default new cadastro()