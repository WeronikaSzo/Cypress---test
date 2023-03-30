import Homework from "../support/homework.locators";

describe('Test for dwonload homework', () => {
    const email = 'user888@gmail.com';
    const password = '1234567890';
    const homework = new Homework();

beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit('https://www.edu.goit.global/pl/account/login');
    
    cy.intercept('GET','**homeworkId**').as('getButton');
    cy.intercept("GET",'**moduleId**').as('getNewSite');
    cy.intercept("GET",'**58af269ddb344a75.css').as('getCollect');
    cy.intercept("GET",'**homeworkId**').as('getFile');  
});

afterEach(() => {
    cy.removeHomework();
});
    
it('Send your homework again', () =>{
   cy.logInPortal(email, password);
   cy.url().should('include','/homepage');
   cy.waitForElements();
   cy.clickInButtonCourse(); 
   cy.url().should('include','/textbook');
   cy.clickTabHomework();
   cy.get('body').then((body) => {
    if (body.find('.e1cko2470').length > 0){
        cy.ifEditHomework();
        homework.message().should('be.visible');
    } else {
        cy.elseAddHomework();
        homework.message().should('be.visible');
        }
     });
   });
});