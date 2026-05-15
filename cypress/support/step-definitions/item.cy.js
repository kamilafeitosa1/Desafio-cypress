import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import itemApi from "../pages/API/item.api"


 Given("que preparo os dados dinâmicos para um novo usuário", () => {
  // A geração já acontece dentro do itemApi
 })

When("envio uma requisição POST para o endpoint de criação de conta", () => {
  itemApi.requisicaoItem()
})
 
Then("validar que o usuário foi criado com sucesso com status code 201", () => {
  itemApi.validarResponse()
})

