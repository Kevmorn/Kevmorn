/* global Given, Then, When */

import LoginPage from '../pageobjects/LoginPage'
const loginPage = new LoginPage

Given("Acesso o Site", () => {
    loginPage.acessarSite();
})

When("Acesso a Pagina de Login", () => {
    loginPage.clicarBotaoPaginaLogin();
})

Then("devo visualizar botao de recuperar senha esquecida", () => {
    loginPage.visualizarBotaoRecuperarSenha();
})
