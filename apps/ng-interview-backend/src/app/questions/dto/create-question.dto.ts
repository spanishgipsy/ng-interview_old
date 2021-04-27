import { Question } from "../entities/question.entity";

export class CreateQuestionDto {
  /** The Question */
  title: string;
  /** Answer to the question */
  answer: string;
  /** Language */
  language: string;
  /** Tags */
  tags: [];
  /** Level of difficulty */
  level: number;
  /** Number of question */
  sortOrder: number;

  constructor(question?: Question) {
    if (question) {
      Object.assign(this, question);
    }
  }

  toQuestion(): Question {
    const question = new Question();
    Object.assign(question, this);
    return question;
  }
}