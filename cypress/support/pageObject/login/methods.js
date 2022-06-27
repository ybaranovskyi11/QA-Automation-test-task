import { loginSelectors } from "./selectors";
import { ERRORS } from "./constants";

const ENV = Cypress.env('env');

class Login {

    visitLoginPage() {
        cy.visit(ENV.url);
    }

    typeUsername(value) {
        loginSelectors.getUsername()
            .clear()
            .type(value)
            .should('have.value', value);
    }

    typePassword(value) {
        loginSelectors.getPassword()
            .clear()
            .type(value)
            .should('have.value', value);
    }

    typeEmptyUsername() {
        loginSelectors.getUsername()
            .clear();
    }

    typeEmptyPassword() {
        loginSelectors.getPassword()
            .clear();
    }

    clickOnLoginButton() {
        loginSelectors.getLoginButton()
            .should('be.visible')
            .click();
    }

    verifyErrorEnterUsername() {
        loginSelectors.getErrorEnterUsername()
            .contains(ERRORS.ENTER_USERNAME)
            .should('be.visible');
    }

    verifyErrorEnterPassword() {
        loginSelectors.getErrorEnterPassword()
            .contains(ERRORS.ENTER_PASSWORD)
            .should('be.visible');
    }

    verifyErrorNoAccountFound() {
        loginSelectors.getErrorNoAccountFound()
            .contains(ERRORS.NO_ACCOUNT_FOUND)
            .should('be.visible');
    }

    verifyAllTheElementsPresented() {
        loginSelectors.getImgLogo().should('be.visible');
        loginSelectors.getHeader().should('be.visible');
        loginSelectors.getUsername().should('be.visible');
        loginSelectors.getPassword().should('be.visible');
        loginSelectors.getLoginButton().should('be.visible');
    }

    verifyLoginSuccess() {
        cy.url().should('not.include', ENV.url);
    }

}

export const login = new Login();