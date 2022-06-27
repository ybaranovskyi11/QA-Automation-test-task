class LoginSelectors {
    getUsername() {
        return cy.get('[name="username"]');
    }

    getPassword() {
        return cy.get('[name="password"]');
    }

    getLoginButton() {
        return cy.get('[value="Login"]');
    }

    getError() {
        return cy.get('[class="help-block"]')
    }

    getErrorNoAccountFound() {
        return cy.get('[class="help-block"]')
            .contains('No account found with that username.');
    }

    getErrorEnterUsername() {
        return cy.get('[class="help-block"]')
            .contains('Please enter username.');
    }

    getErrorEnterPassword() {
        return cy.get('[class="help-block"]')
            .contains('Please enter your password.');
    }

    getHeader() {
        return cy.get('[class="wrapper"]')
            .contains('AQA internship Login');
    }

    getImgLogo() {
        return cy.get('[id="logomini"]');
    }
}

export const loginSelectors = new LoginSelectors();