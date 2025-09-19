import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { VerificationComponent } from './verification/verification.component';
import { StoryItemComponent } from './story-item/story-item.component';
import { StoryGridComponent } from './story-grid/story-grid.component';
import { CelebrationComponent } from './celebration/celebration.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'verify', component: VerificationComponent },
  { path: 'story', component: StoryGridComponent },
  { path: 'celebration', component: CelebrationComponent },
  { path: '**', redirectTo: '/welcome' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
