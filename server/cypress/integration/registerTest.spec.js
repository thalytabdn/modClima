context('Register Field Test', () => {
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
    it('Register new Field succesfully', () => {
        const typedLatitude = '-7.2233728'
        const typedLongitude = '-35.88797621'
        
        cy.get('.input-latitude')
            .type(typedLatitude)
        
        cy.get('.input-longitude')
        .type(typedLongitude)
        .type('{enter}')
    })

    //Test alert with invalid data
    it('Invalid data', () => {          
        cy.get('.button').click()

        cy.on('window:alert', (str) =>{
            expect(str).to.equal('Registration error')
        })
    })

})

context('Register Farm Test', () => {
    beforeEach(() => {
        cy.visit('/farms')
    })

    //Test inputs
    it('accepts input', () => {
        const name = 'farm'
       
        cy.get('.input-name')
            .type(name)
            .should('have.value', name)
        
    })

    //Test the alert when an invalid id is typed
    it('Send an alert when id is invalid', () => {
        cy.get('.input-id')
            .type('invalidID')
        
        cy.get('.button').click()

        cy.on('window:alert', (str) =>{
            expect(str).to.equal('Invalid id(s) ')
        })
    })

    it('Add new id', () => {
        cy.get('.button-id').click()
    })
})
