import { Component } from '@angular/core';

@Component({
  selector: 'app-music-genre-dictionary',
  templateUrl: './music-genre-dictionary.component.html',
  styleUrls: ['./music-genre-dictionary.component.css']
})
export class MusicGenreDictionaryComponent {

  ngOnInit() {
    this.getMusic()
  }

  getMusic() {
    this.musicService.getMusic().subscribe(res => {
      this.topRatedMovies = res.results;
      this.totalPages = res.total_pages;
      this.totalResults = res.total_results;
    });
  }
}
