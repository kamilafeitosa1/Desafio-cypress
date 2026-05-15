 
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import Cadastro from "../pages/cadastro.page"
import adicionarCarrinho from "../pages/adicionarCarrinho.page";



When('preencho dados do cadastro', () => {
    Cadastro.cadastroNovo()
    Cadastro.validarLoginSucesso()
})
And('adiciono item no carrinho', () => {
    adicionarCarrinho.visualizarProduto()
    adicionarCarrinho.nomeProduto()
    adicionarCarrinho.precoProduto()
    adicionarCarrinho.adicionarAoCarrinho()
     adicionarCarrinho.visualizarCarrinho()
})
Then('valido o produto no carrinho', () => {
    adicionarCarrinho.validarNomeIgual()
    adicionarCarrinho.validarPrecoIgual()
})
 