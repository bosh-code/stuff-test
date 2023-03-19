describe("The App", () => {
    // Load the page before each test
    beforeEach(() => {
        cy.visit("http://localhost:3000");
    });

    // Check page title
    it("should have the correct title", () => {
        cy.title().should("include", "Latest Breaking Code | Stuff Test");
    });

    // Check page title/header
    it("should have the correct header", () => {
        cy.get("ion-title").should("contain", "Stories");
    });

    // Load Home Page component
    it("should load the correct number of articles", () => {
        cy.get("ion-card").should("have.length", 10);
    });

    // should navigate to the StoryView Page when an article is clicked
    it("should navigate to the StoryView Page when an article is clicked", () => {
        cy.get("ion-card").first().click();
        cy.url().should('include', '/Coronavirus/300259490')
    });
});
