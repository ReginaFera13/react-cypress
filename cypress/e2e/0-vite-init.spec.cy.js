describe("Our first cypress test", () => {
    it("Visits home URL and ensures <h1> is correct", () => {
        cy.visit('/')
        cy.get('h1').should('contain', 'Test Cypress');
    });

    it("Visits home URL and ensures <label> for exampleInput is correct", () => {
        cy.visit('/')
        cy.get('#inputLabel').should('contain', 'Example Input');
    });

    it("Visits home URL and ensures <input> for exampleInput is correct", () => {
        cy.visit('/')
        cy.get('#exampleInput').type('Hello');
    });

    it("Visits home URL and ensures <label> for exampleCheckbox is correct", () => {
        cy.visit('/')
        cy.get('#checkboxLabel').should('contain', 'Example Checkbox');
    });

    it("Visits home URL and ensures <input> for exampleCheckbox is correct", () => {
        cy.visit('/')
        cy.get('#exampleCheckbox').click();
    });

    it("Visits home URL and ensures <input> for submit is correct", () => {
        cy.visit('/')
        cy.get('#submit').click();
    });


});