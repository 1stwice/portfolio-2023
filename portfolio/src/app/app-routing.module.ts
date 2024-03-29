import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ResumeComponent } from './components/resume/resume.component';
import { MovieReviewsComponent } from './components/movie-reviews/movie-reviews.component';
import { WebGameComponent } from './components/web-game/web-game.component';
import { MusicGenreDictionaryComponent } from './components/music-genre-dictionary/music-genre-dictionary.component';

const routes: Routes = [
  {path: '', component: HomeComponent}, 
  {path: 'home', component: HomeComponent},
  {path: 'resume', component: ResumeComponent},
  {path: 'movie-reviews', component: MovieReviewsComponent},
  {path: 'movie-trivia', component: WebGameComponent},
  {path: 'genre-dictionary', component: MusicGenreDictionaryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
