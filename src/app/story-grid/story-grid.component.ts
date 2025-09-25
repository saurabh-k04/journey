import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoryServiceService, StoryItem } from '../story-service.service';

@Component({
  selector: 'app-story-grid',
  templateUrl: './story-grid.component.html',
  styleUrls: ['./story-grid.component.css']
})
export class StoryGridComponent implements OnInit {
  stories: StoryItem[] = [];

  constructor(private storyService: StoryServiceService, private router: Router) { }

  ngOnInit(): void {
    // ✅ Verification check with small delay
    setTimeout(() => {
      const verified = localStorage.getItem('verified');
      console.log('Verified flag in StoryGrid =', verified);

      if (verified !== 'true') {
        this.router.navigate(['/verify']);
      } else {
        // Load stories only if verified
        this.stories = this.storyService.getStories();
      }
    }, 100); // 100ms delay to ensure localStorage is ready
  }
}
