describe('Simple Login', () => {
    before(() => {
      cy.visit('/')
      const email = 'm42zhang@uwaterloo.ca'
      const password = '123456'
      cy.contains("Login").click()
      cy.get('input[placeholder=\"UWaterloo Email\"]').type(email)
      cy.get('input[placeholder=\"Password\"]').type(password)
      cy.contains('Sign In').click()
    })

    it("Logout button should up after login", () => {
      cy.contains('Logout').should('be.visible')
    })

    after(() => {
      cy.contains('Logout').click()
    })
  });

  describe('Simple Login', () => {
    before(() => {
      cy.visit('/')
      const email = 'm42zhang@uwaterloo.ca'
      const password = '123456'
      cy.contains("Login").click()
      cy.get('input[placeholder=\"UWaterloo Email\"]').type(email)
      cy.get('input[placeholder=\"Password\"]').type(password)
      cy.contains('Sign In').click()
    })

    it("After logout, the logout button disappear", () => {
      cy.contains('Logout').click()
      cy.contains('Logout').should('not.be.visible')
    })
  })