export abstract class BaseComponent {
  abstract pageUrl: string;

  navigateTo() {
    return cy.visit(this.pageUrl);
  }
}
