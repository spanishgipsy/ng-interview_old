import { Component, Input } from '@angular/core';
import { Question } from '@ng-interview/data';

@Component({
  selector: 'ng-interview-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.scss']
})
export class QuestionsListComponent {
  @Input() items: Question[];
}
