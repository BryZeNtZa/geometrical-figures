
describe('Units api testing', () => {

    it('server api healthcheck', () => {
        cy.request('/').as('healthcheckRequest');
        cy.get('@healthcheckRequest').then(units => {
            expect(units.status).to.eq(200);
            assert.isString(units.body, "Hello World !")
        });
    });

    it('fetches units', () => {
        cy.request('/api/units').as('unitsRequest');
        cy.get('@unitsRequest').then(units => {
            expect(units.status).to.eq(200);
            assert.isArray(units.body, ["centimeter","decimeter","meter","kilometer"])
        });
    });

 });
