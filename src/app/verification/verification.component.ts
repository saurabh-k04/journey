import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Question {
  question: string;
  answer: string;
  userAnswer?: string;
}

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent {
  questions: Question[] = [
    { question: "How i call you?", answer: "Madam" },
    { question: "Where we went out first time? 🎨", answer: "Kiro" },
    { question: "We met through whom?", answer: "Sankalp" }
  ];

  errorMessage: string = "";

  constructor(private router: Router) {}

  submit() {
    const allCorrect = this.questions.every(q =>
      q.userAnswer?.trim().toLowerCase() === q.answer.toLowerCase()
    );

    if (allCorrect) {
      // Save verification in localStorage
      localStorage.setItem('verified', 'true');

      // Navigate to story page
      this.router.navigate(['/story']);
    } else {
      this.errorMessage = "Oops 💔 — some answers are wrong, try again!";
    }
  }
}

