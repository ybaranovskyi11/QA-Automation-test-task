Cypress.Commands.add('loginAPI', (link, username, password) => {
    cy.request({
        method: 'POST',
        url: link,
        form: true,
        body: {
            username: username,
            password: password
        }
    }).then((response) => {
        cy.wrap(response.status).should('equal', 302)
    })
})