describe('Input form', () => {
    beforeEach(() => {
        cy.visit('/fields')
    })

    //Tests the input
    it('accepts input', () => {
        const typedLatitude = '-7.2233728'
        const typedLongitude = '-35.88797621'
       
        cy.get('.input-latitude')
            .type(typedLatitude)
            .should('have.value', typedLatitude)
        
        cy.get('.input-longitude')
        .type(typedLongitude)
        .should('have.value', typedLongitude)
        
    })

    //Test the forms submitions
    context('Form submission', () => {
        const typedLatitude = '-7.2233728'
        const typedLongitude = '-35.88797621'
        it.only('Register new Field', () => {
            cy.server()
            cy.route('POST','fields', {
                latitude: -7.2233728,
                longitude: -35.88797621
            })
            cy.get('.input-longitude')
                .type(typedLongitude)
            
            cy.get('.input-longitude')
            .type(typedLatitude)
            .type('{enter}')
        })
    })
})