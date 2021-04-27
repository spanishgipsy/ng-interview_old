import { Controller, Get, Post, Body, Patch, Param, Delete, Query, NotFoundException, InternalServerErrorException, HttpCode } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { ListAllQuestions } from './dto/list-all-questions';

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Post()
  create(@Body() createQuestionDto: CreateQuestionDto) {
    return this.questionsService.create(createQuestionDto);
  }

  @Get()
  findAll(@Query() params: ListAllQuestions) {
    const questions = this.questionsService.findAll(params);
    if (!questions) {
      throw new InternalServerErrorException();
    }
    return questions;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const question = this.questionsService.findOne(+id);

    if (!question) {
      throw new NotFoundException();
    }

    return question;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQuestionDto: UpdateQuestionDto) {
    const question = this.questionsService.update(+id, updateQuestionDto);

    if (!question) {
      throw new NotFoundException();
    }

    return question;
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {
    const deletedIndex =  this.questionsService.remove(+id);
    if (deletedIndex === -1) {
      throw new NotFoundException();
    }
  }
}
