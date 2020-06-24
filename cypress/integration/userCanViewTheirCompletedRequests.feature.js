describe("User can view their completed reQuests", () => {
  beforeEach(() => {
    cy.stubMain();
    cy.StubRequestCompleted();
    cy.login();
    cy.get("#myrequest-home-link").click();
    cy.wait(500);
    cy.get("#requests-link").click();
  });

  it('in a list, by navigating to "completed reQuests"', () => {
    cy.get("#completed-link").click();
    cy.get("#request-7").within(() => {
      cy.get(".header").should("contain", "Teach me Korean");
    });
    cy.get("#request-8").within(() => {
      cy.get(".header").should("contain", "Im in prison");
    });
  });
});
