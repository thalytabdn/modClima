describe('Input form', () => {
    beforeEach(() => {
        cy.visit('/filter-fields')
    })

    //Tests the input
    it('accepts input', () => {
        const typedId = '46abe938'
       
        cy.get('.input-id')
            .type(typedId)
            .should('have.value', typedId)
        
    })

    //Test the forms submitions
    context('Form submission', () => {
        const typedId = '46abe938'
        it.only('Filter Field', () => {
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
})