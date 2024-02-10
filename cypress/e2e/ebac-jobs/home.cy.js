/// <reference types="cypress" />

describe('Testes para a Home', () => {
  beforeEach(() => {
    cy.visit('https://ebac-jobs-e2e.vercel.app');
  });

  it('Exibe 4 vagas por padrão', () => {
    cy.get('.ListaVagas_vagas__gmNZn > li').should('have.length', 4);
  });

  it('Filtra por fullstack pressionando Enter', () => {
    cy.get('.FormVagas_campo__E1ppF').type(`fullstack{enter}`);
  });

  it('Filtra por fullstack clicando no botão', () => {
    cy.get('.FormVagas_campo__E1ppF').type(`fullstack`);
    cy.get('button[type="submit"]').click();
    cy.get('.ListaVagas_vagas__gmNZn > li').should('have.length', 1);
  });
});
