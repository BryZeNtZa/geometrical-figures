
describe('Testing geometric formuma results', () =>{

  it('Testing page display', () =>{
    cy.visit('/')
    cy.contains ('Geometric figures')
  })

  it('Testing rectangular perimeter calculation', () =>{
    cy.visit('/')

    cy.get('#figures-panel').should('be.visible');
    cy.get('#output-panel').should('be.visible');

    // Arrange: choose rectangle and to calculate the perimeter
    cy.get('#figures-panel .rectangle').click();
    cy.get('#measure-choices input[type=radio][value=perimeter]').click();

    // Act: enter rectangle height and width
    cy.get('#rectangleForm .rectangle-height').type ('3');
    cy.get('#rectangleForm .rectangle-width').type ('5');

    // Asset: insure that it shows perimeter box and that calculation is good
    cy.get('#output-panel .perimeter').should('be.visible');
    cy.get('#output-panel .perimeter span.value').should ('have.text', (3+5)*2);

  })

  it('Testing rectangular area calculation', () =>{
    cy.visit('/')

    cy.get('#figures-panel').should('be.visible');
    cy.get('#output-panel').should('be.visible');

    // Arrange: choose rectangle and to calculate the area
    cy.get('#figures-panel .rectangle').click();
    cy.get('#measure-choices input[type=radio][value=area]').click();

    // Act: enter rectangle height and width
    cy.get('#rectangleForm .rectangle-height').type ('3');
    cy.get('#rectangleForm .rectangle-width').type ('5');

    // Asset: insure that it shows area box and that calculation is good
    cy.get('#output-panel .area').should('be.visible');
    cy.get('#output-panel .area span.value').should ('have.text', 3*5);

  })

  /**
   * Do the same for other figures
   */

})
