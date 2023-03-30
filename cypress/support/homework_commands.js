import Homework from "./locators/homework.locators";

const homework = new Homework();

Cypress.Commands.add('logInPortal', (email='', password='') => {
   homework.email_input().click();
   homework.email_input().type(email);
   homework.password_input().click();
   homework.password_input().type(password);
   homework.login_button().click();
});

Cypress.Commands.add('clickInButtonCourse', () => {
   cy.contains('HTML_DEMO course').should('be.visible').then(() => {
      homework.go_it_button().click();
     }); 
   cy.wait('@getNewSite').its('response.statusCode').should('eq',200);
});

Cypress.Commands.add('clickTabHomework', () => {
   homework.homework_tab().click();
   cy.wait('@getFile').its('response.statusCode').should('eq',200);
   cy.wait(1000);
});

Cypress.Commands.add('waitForElements', () => {
   cy.wait('@getCollect').its('response.statusCode').should('eq',200);
   cy.wait(1000);
});

Cypress.Commands.add('elseAddHomework', () => {
   homework.homework_attache().attachFile('homework.json', {subjectType: 'drag-n-drop'});
   homework.send_button().click();
   cy.wait('@getButton').its('response.statusCode').should('eq',200);   
});

Cypress.Commands.add('ifEditHomework', () => {
   homework.edit_homework_button().click();
   homework.homework_attache().attachFile('homework.json', {subjectType: 'drag-n-drop'});
   homework.send_button().click();
   cy.wait('@getButton').its('response.statusCode').should('eq',200);  
});

Cypress.Commands.add('removeHomework', () => {
   cy.get('.e1cko2470').click()
   cy.get(':nth-child(1) > .css-1dron0q').click();
});
