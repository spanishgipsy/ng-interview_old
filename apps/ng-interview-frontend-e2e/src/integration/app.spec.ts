import { getQuestions, getAddQuestionButton } from '../support/app.po';

describe('ng-interview-frontend', () => {
  beforeEach(() => cy.visit('/'));

  // it('should display welcome message', () => {
  //   // Custom command example, see `../support/commands.ts` file
  //   cy.login('my-email@something.com', 'myPassword');

  //   // Function helper example, see `../support/app.po.ts` file
  //   getQuestions().contains('Welcome to ng-interview-frontend!');
  // });

  it('should display questions', () => {
    getQuestions().should((t) => expect(t.length).equal(2));
    getAddQuestionButton().click();
    getQuestions().should((t) => expect(t.length).equal(3));
  });
});
