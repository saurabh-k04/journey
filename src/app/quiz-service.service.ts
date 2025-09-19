import { Injectable } from '@angular/core';

export interface Question {
  question: string;
  answer: string;
}

@Injectable({
  providedIn: 'root'
})
export class QuizServiceService {

  private questions: Question[] = [
    { question: 'Where did we first meet? 💌', answer: 'cafe' },
    { question: 'What is my favorite color? 🎨', answer: 'blue' },
    { question: 'Our special date? (dd-mm) 💖', answer: '14-02' }
    // Add more questions if needed
  ];

  constructor() { }

  getQuestions(): Question[] {
    return this.questions;
  }

  verifyAnswers(userAnswers: string[]): boolean {
    if (userAnswers.length !== this.questions.length) return false;

    return this.questions.every((q, index) =>
      q.answer.toLowerCase().trim() === userAnswers[index].toLowerCase().trim()
    );
  }
}
