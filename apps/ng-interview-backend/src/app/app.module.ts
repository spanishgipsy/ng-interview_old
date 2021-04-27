import { Module } from '@nestjs/common';
import { QuestionsModule } from './questions/questions.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [QuestionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
