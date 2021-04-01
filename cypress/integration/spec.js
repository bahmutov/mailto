/// <reference types="cypress" />
/* global cy, describe, it */

describe('Mailto', () => {
  it('screenshot', () => {
    cy.visit('/'); // localhost:3000
    cy.get('#to').type('me');
    cy.get('#subject').type('Date night');
    cy.get('#body').type('Have plans?');
    cy.get('#output').should(
      'have.text',
      'mailto:me?subject=Date%20night&body=Have%20plans%3F',
    );
    cy.get('#mailto').screenshot('mailto');
  });
});
