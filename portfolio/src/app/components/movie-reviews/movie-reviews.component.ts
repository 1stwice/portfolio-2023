import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie-reviews.model';
import { MovieReviewsService } from 'src/app/services/movie-reviews.service';

@Component({
  selector: 'app-movie-reviews',
  templateUrl: './movie-reviews.component.html',
  styleUrls: ['./movie-reviews.component.css']
})
export class MovieReviewsComponent implements OnInit {
  
  movie!: Movie;
  
  constructor(private movieReviewsService: MovieReviewsService) { }

  ngOnInit(): void {
    this.movieReviewsService.getMovie().subscribe(res => {
      this.movie = res;
    });
  };
}
