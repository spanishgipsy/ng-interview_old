export class Question {
  /** Identificator */
  id: number;
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

  constructor() {
    this.id = Math.random() * 1000 * 1000 + Math.random() * 1000;
  }
}
