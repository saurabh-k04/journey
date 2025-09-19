import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { VerificationComponent } from './verification/verification.component';
import { StoryItemComponent } from './story-item/story-item.component';
import { StoryGridComponent } from './story-grid/story-grid.component';
import { QuizModelComponent } from './quiz-model/quiz-model.component';
import { CelebrationComponent } from './celebration/celebration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    VerificationComponent,
    StoryItemComponent,
    StoryGridComponent,
    QuizModelComponent,
    CelebrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
