import { Component } from '@angular/core';

interface Question {
  title: string;
}

@Component({
  selector: 'ng-interview-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular Interview Questions';
  questions: Question[] = [{ title: 'Question 1' }, { title: 'Question 2' }];

  addQuestion(title: string = `${this.questions.length}`) {
    this.questions.push({ title });
  }
}
