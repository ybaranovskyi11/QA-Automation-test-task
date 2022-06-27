import { login } from '../../support/pageObject/login/methods';

const ENV = Cypress.env('env');

describe('Test', () => {
    context('UI Tests', () => {
        before(() => {
            login.visitLoginPage();
        });

        it('Verify that login is successfully', () => {
            login.typeUsername(ENV.user1.username);
            login.typePassword(ENV.user1.password);
            login.clickOnLoginButton();
            login.verifyLoginSuccess();
        });

        it('Verify two errors appear with an empty username and login', () => {
            login.typeEmptyUsername();
            login.typeEmptyPassword();
            login.clickOnLoginButton();
            login.verifyErrorEnterUsername();
            login.verifyErrorEnterPassword();
        });

        it('Verify password error appear', () => {
            login.typeUsername(ENV.user1.username);
            login.typeEmptyPassword();
            login.clickOnLoginButton();
            login.verifyErrorEnterPassword();
        });

        it('Verify username error appear', () => {
            login.typeEmptyUsername();
            login.typePassword(ENV.user1.password);
            login.clickOnLoginButton();
            login.verifyErrorEnterUsername();
        });

        it('Verify no account found with that username error appear', () => {
            login.typeUsername(ENV.user1.username);
            login.typePassword(ENV.user1.password);
            login.clickOnLoginButton();
            login.verifyErrorNoAccountFound();
        });

        it('Verify all the elements presented', () => {
            login.verifyAllTheElementsPresented();
        });
    });
    context('API test', () => {
        it('API test', () => {
            cy.loginAPI(ENV.url, ENV.user1.username, ENV.user1.password)
        });
    });
});