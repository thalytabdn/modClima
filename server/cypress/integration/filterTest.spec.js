context('Input form', () => {
    beforeEach(() => {
        cy.visit('/filter-fields')
    })

    //Tests the input
    it('Accepts input', () => {
        const typedId = '2ba93174'
       
        cy.get('.input-id')
            .type(typedId)
            .should('have.value', typedId)
        
    })

    //Test the alert when an invalid id is typed
    it('Send an alert when id is invalid', () => {
        cy.get('.input-id')
            .type('invalidID')
        
        cy.get('.button').click()

        cy.on('window:alert', (str) =>{
            expect(str).to.equal('There is no field with this id')
        })
        
    })

    //Test the alert when an the id is missing
    it('Send an alert when id is invalid', () => {      
        cy.get('.button').click()

        cy.on('window:alert', (str) =>{
            expect(str).to.equal('Missing filters to search field')
        })
        
    })

    //Test if the field is showing 
    it('Show Field', () => {
        const typedId = '46abe938'
        cy.server()
        cy.route('GET','fields', {
            id: '46abe938',
        })
        
        cy.get('.input-id')
        .type(typedId)
        
        cy.get('.button').click()

        cy.contains("ID:")
    })
})