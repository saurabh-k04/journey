import { Component } from '@angular/core';
import { StoryServiceService, StoryItem } from '../story-service.service';

@Component({
  selector: 'app-story-grid',
  templateUrl: './story-grid.component.html',
  styleUrls: ['./story-grid.component.css']
})
export class StoryGridComponent {
  stories: StoryItem[] = [];

  constructor(private storyService: StoryServiceService) { }

  ngOnInit(): void {
    this.stories = this.storyService.getStories();
  }
}
