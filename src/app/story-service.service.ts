import { Injectable } from '@angular/core';

export interface StoryItem {
  imageUrl: string;
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class StoryServiceService {

  private stories: StoryItem[] = [
    {
      imageUrl: 'assets/photos/m1.jpg',
      title: 'The Day We went out first?',
      description: 'This was the magical day when our story began '
    },
    {
      imageUrl: 'assets/photos/m2.jpg',
      title: 'Our First Trip',
      description: 'Do you remember this? Tell me to where it was?'
    },
    {
      imageUrl: 'assets/photos/m3.jpg',
      title: 'Memorable Dinner',
      description: 'That special evening full of laughter and so many pics. Tell me the place'
    }
    // Add more story items as you like
  ];

  constructor() { }

  getStories(): StoryItem[] {
    return this.stories;
  }
}