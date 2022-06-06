describe('register test', () => {
    it('visit gallery app and register successfully', () => {
        cy.visit('https://gallery-app.vivifyideas.com');
        cy.get(':nth-child(2) > .nav-link').click();
        cy.url().should('contains', '/register')
        cy.get('#first-name').type("user1FN");
        cy.get('#last-name').type("user1LN");
        cy.get('#email').type("user1EMa@user.com");
        cy.get('#password').type("user1PASS");
        cy.get('#password-confirmation').type("user1PASS");
        cy.get('.form-check-input').click();
        cy.get('[type = submit]').click();
        cy.url().should('not.contains', '/register');
    })

    it('visit gallery app and register unsuccessfully with already used email', () => {
        cy.visit('https://gallery-app.vivifyideas.com');
        cy.get(':nth-child(2) > .nav-link').click();
        cy.url().should('contains', '/register')
        cy.get('#first-name').type("user1FN");
        cy.get('#last-name').type("user1LN");
        cy.get('#email').type("user1EM@user.com");
        cy.get('#password').type("user1PASS");
        cy.get('#password-confirmation').type("user1PASS");
        cy.get('.form-check-input').click();
        cy.get('.btn').click();
        cy.on('.alert', (str) => {
            expect(str).to.equal('The email has already been taken.')
          })
    })

    it('visit gallery app and register with wrong email format', () => {
        cy.visit('https://gallery-app.vivifyideas.com');
        cy.get(':nth-child(2) > .nav-link').click();
        cy.url().should('contains', '/register')
        cy.get('#first-name').type("user1FN");
        cy.get('#last-name').type("user1LN");
        cy.get('#email').type("user1EM");
        cy.get('#password').type("user1PASS");
        cy.get('#password-confirmation').type("user1PASS");
        cy.get('.form-check-input').click();
        cy.get('.btn').click();
        cy.url().should('contains', '/register');
        //ja bih zelela da napisem asertaciju za notifikaciju koja iskoci i kaze da email treba da sadrzi '@'
    })
    it('visit gallery app and register without name', () => {
        cy.visit('https://gallery-app.vivifyideas.com');
        cy.get(':nth-child(2) > .nav-link').click();
        cy.url().should('contains', '/register')
        cy.get('#last-name').type("user1LN");
        cy.get('#email').type("user1EM@user.com");
        cy.get('#password').type("user1PASS");
        cy.get('#password-confirmation').type("user1PASS");
        cy.get('.form-check-input').click();
        cy.get('.btn').click();
        cy.url().should('contains', '/register');
        //ja bih zelela da napisem asertaciju za notifikaciju koja iskoci i kaze please fill out this field
    })
    it('visit gallery app and register unsuccessfully without last name', () => {
        cy.visit('https://gallery-app.vivifyideas.com');
        cy.get(':nth-child(2) > .nav-link').click();
        cy.url().should('contains', '/register')
        cy.get('#first-name').type("user1FN");
        cy.get('#email').type("user1EM@user.com");
        cy.get('#password').type("user1PASS");
        cy.get('#password-confirmation').type("user1PASS");
        cy.get('.form-check-input').click();
        cy.get('.btn').click();
        cy.url().should('contains', '/register');
        //ja bih zelela da napisem asertaciju za notifikaciju koja iskoci i kaze please fill out this field
    })
   
})
