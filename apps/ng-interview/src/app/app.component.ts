import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Question } from '@ng-interview/data';

@Component({
  selector: 'ng-interview-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular Interview Questions';
  questions: Question[] = [];

  constructor(private http: HttpClient) {
    this.fetch();
  }

  fetch() {
    this.http
      .get<Question[]>('/api/questions')
      .subscribe((t) => (this.questions = t));
  }

  addQuestion(title: string) {
    this.http
      .post<Question>('/api/questions', { title })
      .subscribe(() => {
        this.fetch();
      });
  }
}
