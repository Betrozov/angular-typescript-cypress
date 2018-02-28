import { LandingPo } from '../support/landing.po';

describe('Landing Page test suite', () => {
  const landing = new LandingPo();

  beforeEach(() => landing.navigateTo());

  it('Successfully loads and displays all content of the main page', () => {
    cy.get('.logo')
      .should('be.visible');
  });
});
