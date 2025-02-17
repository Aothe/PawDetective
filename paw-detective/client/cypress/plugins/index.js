/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
const dotenv = require('dotenv')

dotenv.config()
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  config.env.auth0_username = process.env.AUTH0_USERNAME
  config.env.auth0_password = process.env.AUTH0_PASSWORD
  config.env.auth0_domain = process.env.REACT_APP_AUTH0_DOMAIN
  config.env.auth0_audience = process.env.REACT_APP_AUTH0_AUDIENCE
  config.env.auth0_scope = process.env.REACT_APP_AUTH0_SCOPE
  config.env.auth0_client_id = process.env.REACT_APP_AUTH0_CLIENT_ID
  config.env.auth0_client_secret = process.env.AUTH0_CLIENT_SECRET_ID

  // plugins code ...

  return config

}
