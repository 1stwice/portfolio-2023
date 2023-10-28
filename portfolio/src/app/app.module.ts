import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LightDarkSliderComponent } from './components/light-dark-slider/light-dark-slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { MovieReviewsComponent } from './components/movie-reviews/movie-reviews.component';
import { WebGameComponent } from './components/web-game/web-game.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { FormsModule } from '@angular/forms';
import { MusicGenreDictionaryComponent } from './components/music-genre-dictionary/music-genre-dictionary.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LightDarkSliderComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    ResumeComponent,
    ProjectsComponent,
    MovieReviewsComponent,
    WebGameComponent,
    ContactMeComponent,
    MusicGenreDictionaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,

    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,

    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
