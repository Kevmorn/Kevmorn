///  <reference types="Cypress" />
import LoginElements from '../elements/LoginElements'



const loginElements = new LoginElements
const url = Cypress.config("baseUrl")

class LoginPage {
    //acesos ao site
    acessarSite(){
        cy.visit(url)
    }


//Clica no botão que acessa a  página de login do site
clicarBotaoPaginaLogin() {
    cy.get(loginElements.botaoLogin()).click()
}

//Verifica se o botão tem o texto "Esqueceu a senha"
visualizarBotaoRecuperarSenha() {
    cy.get(loginElements.botaoRecuperarSenha()).should('contain', 'Esqueceu sua senha?')
}
}



export default LoginPage;