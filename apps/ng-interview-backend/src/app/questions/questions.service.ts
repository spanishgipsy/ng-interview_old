import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { ListAllQuestions } from './dto/list-all-questions';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { Question } from './entities/question.entity';

@Injectable()
export class QuestionsService {
  private questions: Question[] = [];

  create(dto: CreateQuestionDto): Question {
    const question = QuestionsService.dtoToQuestion(dto);
    this.questions.push(question);
    return question;
  }

  findAll(params: ListAllQuestions): Question[] {
    console.log(params);
    return this.questions;
  }

  findOne(id: number): Question {
    return this.questions.find(q => q.id === id);
  }

  update(id: number, updateQuestionDto: UpdateQuestionDto): Question {
    const question = this.questions.find(q => q.id === id);
    if (question) {
      Object.assign(question, updateQuestionDto);
      return question;
    }
  }

  remove(id: number): number {
    const idx = this.questions.findIndex(q => q.id === id);
    if (idx !== -1) {
      this.questions.splice(idx, 1);
    }
    return idx;
  }

  static dtoToQuestion(dto: CreateQuestionDto): Question {
    const question = new Question();
    Object.assign(question, dto);
    return question;
  }
}
