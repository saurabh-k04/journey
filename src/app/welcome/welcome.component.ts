import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
lines: string[] = [
    "In a universe filled with countless stars… 🌠",
    "I was lucky enough to find a friend who shines the brightest. ✨",
    "Through laughter, memories, and every moment shared…",
    "You’ve always been my constant light in the galaxy of life. 🌌",
    "This is a journey of friendship… created just for you. 💫"
  ];

  currentLine: string = this.lines[0];
  index: number = 0;

  constructor(private router: Router) {}

  ngOnInit() {
    setInterval(() => {
      this.index++;
      if (this.index < this.lines.length) {
        this.currentLine = this.lines[this.index];
      } else {
        // Last line ke baad 2 sec delay -> verification page
        setTimeout(() => this.router.navigate(['/verify']), 2000);
      }
    }, 4000); // Each line visible for 4s
  }
}
