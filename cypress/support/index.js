// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')


//Команда для игнорирования всех встречающихся в процессе
// выполнения тестов ошибок типа: 'uncaught:exception'

// likely want to do this in a support file
// so it's applied to all spec files
// cypress/support/index.js

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

  require('cypress-xpath')

  /*
  Команды позволяют игнорировать xhr-логи в тест-раннере. Они не отображаются в тест-раннере.
  Cypress.Server.defaults({
    ignore: (xhr) => bool
  })

  Cypress.Server.defaults({
    whitelist: (xhr) => {
      return true;
    }
  })
  */