import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import Portal from "../pages/portal.page"

Given('que acessei o site automationexercise' , () => {
cy.visit('/')

})

And('acessei signup login', () => {
Portal.acessarLogin()
})