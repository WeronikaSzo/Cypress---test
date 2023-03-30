class Homework {

    email_input(){
        return cy.get('[id=user_email]');
    }

    password_input(){
        return cy.get('[id=user_password]');
    }

    login_button(){
        return cy.get('.eckniwg2');
    }

    go_it_button() {
        return cy.get('.e10trvrj0');
    }

    homework_tab() {
        return cy.get('[data-tour-step="homework"]');
    }

    edit_homework_button(){
        return cy.get('.e1cko2470');
    }
    
    add_homework_button(){
        return cy.get('.css-1scqvnp');
    }

    homework_attache(){
        return cy.get('.css-1rfakdf');
    }

    send_button(){
        return cy.get('.css-1scqvnp > .css-1jphuq5');
    }

    message(){
        return cy.get('.css-13010o');
    }

    remove_homework(){
        return cy.get(':nth-child(1) > .css-1dron0q')
    }
}

export default Homework;