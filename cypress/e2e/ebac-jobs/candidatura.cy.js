/// <reference types="cypress" />

describe('Testes de candidatura', () => {
  beforeEach(() => {
    cy.visit('https://ebac-jobs-e2e.vercel.app');
  });

  it('Leva à página de candidatura', () => {
    cy.get('.Vaga_vagaLink__DeFkk').first().click();
    cy.get('input').should('have.length', 7);

    cy.screenshot('tela-inscricao');
  });

  it('Preenche o formulário de inscrição', () => {
    cy.get('.Vaga_vagaLink__DeFkk').first().click();

    cy.get('input[name="nome-completo"]').type('Bira Neves');
    cy.get('input[name="email"]').type('biraneves@teste.com.br');
    cy.get('input[name="telefone"]').type('11912345678');
    cy.get('input[name="endereco"]').type('Av. HTML, 5 - Bairro CSS');
    cy.get('#linux').check();
    cy.get('select[name="escolaridade"').select('outros');
    cy.get('.Aplicacao_button__tw2AE').click();

    cy.on('window:alert', (conteudo) => {
      expect(conteudo).contain('Obrigado pela candidatura!');
    });

    cy.screenshot('tela-inscricao-preenchida');
  });
});
