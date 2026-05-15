const LOGIN = '.shop-menu > .nav > :nth-child(4) > a'

class portal{

    acessarLogin(){
        cy.get(LOGIN).click()
    }
}

export default new portal()
