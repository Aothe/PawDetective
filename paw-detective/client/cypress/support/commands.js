// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// ------------------------------------------------------------

Cypress.Commands.add('login', (overrides = {}) => {
    Cypress.log({
      name: 'loginViaAuth0',
    });

    const options = {
      method: 'POST',
      url: `https://${Cypress.env('auth0_domain')}/oauth/token`,
      body: {
        grant_type: 'implicit',
        username: Cypress.env('auth0_username'),
        password: Cypress.env('auth0_password'),
        audience: Cypress.env('auth0_audience'),
        scope: 'openid profile email offline_access',
        client_id: Cypress.env('auth0_client_id'),
        client_secret: Cypress.env('auth0_client_secret'),
      },
    };
    cy.request(options);
  });
