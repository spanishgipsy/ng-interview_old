import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsListComponent } from './questions-list/questions-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    QuestionsListComponent
  ],
  exports: [
    QuestionsListComponent
  ],
})
export class UiModule {}
