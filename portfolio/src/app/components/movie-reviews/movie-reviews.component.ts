import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie-reviews.model';
import { MovieReviewsService } from 'src/app/services/movie-reviews.service';
import { Constants } from 'src/app/constants';

@Component({
  selector: 'app-movie-reviews',
  templateUrl: './movie-reviews.component.html',
  styleUrls: ['./movie-reviews.component.css']
})
export class MovieReviewsComponent implements OnInit {
  
  topRatedMovies!: Movie[];
  movieDetails = new Movie;
  movieImagePath = Constants.movieImagePath;
  pageNumber = 1;
  totalPages!: number;
  totalResults?: number;
  step?: number;
  isLoaded = false;
  
  constructor(private movieReviewsService: MovieReviewsService) { }

  ngOnInit(): void {
    this.getTopRatedMovies();
  };


  setStep(index: number) {
    this.step = index;
  }
  
  changePage(i: number) {
    if(this.pageNumber + i > 0 && this.pageNumber + i <= this.totalPages) {
      this.pageNumber = this.pageNumber + i;
    }
    this.getTopRatedMovies();
  }

  getTopRatedMovies() {
    this.movieReviewsService.getTopRatedMovies(this.pageNumber).subscribe(res => {
      this.topRatedMovies = res.results;
      this.totalPages = res.total_pages;
      this.totalResults = res.total_results;
    });
  }

  getMovieDetails(id: number) {
    this.isLoaded = false;
    this.movieReviewsService.getMovieDetails(id).subscribe(res => {
      this.movieDetails = res;
      this.isLoaded = true;
    });
  }
}
