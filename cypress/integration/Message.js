describe("Cypress navigation working", () => {
  it(`Can naviage to baseUrl`, () => {
    cy.visit("/");
  });
  it("Can visit dashboard", () => {
    cy.visit("/dashboard");
  });
  it("Can click message btn", () => {
    cy.get(".new-message-btn").click();
  });
  it("Can type in textarea", () => {
    cy.get("textarea").type("Hello, World");
  });
  it("Can send message", () => {
    cy.get(".send-message").click();
  });
});

describe("Team view testing", () => {
  it("Can navigate to team view", () => {
    cy.visit("/dashboard/teams");
  });
  it("Can filter through members", () => {
    cy.get(".test-search")
      .click()
      .type("Steven");
  });
  //   it("Can get email", () => {
  //     cy.get(".mail-icon").click();
  //   });
  it("Can navigate back to inbox", () => {
    cy.visit("/dashboard");
  });
  it("Can delete message", () => {
    cy.get(".trash-icon").click();
  });
});
