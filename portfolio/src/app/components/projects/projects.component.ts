import { Component } from '@angular/core';
import { CardInfo } from 'src/app/models/card-info.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  
  cardsInfo!: CardInfo[];

  ngOnInit(): void {
    this.cardsInfo = [
      {
        img: '/assets/images/movie.svg',
        background: 'grey',
        header: 'Movie Review App',
        body: 'View my experience in Angular, React, Node, SpringBoot, MySQL, and many more.',
        link: '/movie-reviews',
      },
      {
        img: '/assets/images/videogame.svg',
        background: 'lightblue',
        header: 'Web Game',
        body: 'Enjoy my first solo video project: Hiraeth, and the details behind production.',
        link: '/web-game',
      },
      {
        img: '/assets/images/head.png',
        background: 'black',
        header: 'Video Project',
        body: 'Enjoy my first solo video project: Hiraeth, and the details behind production.',
        link: 'https://hiraeth2022.netlify.app/',
      },
      {
        img: '/assets/images/article.svg',
        background: '#FE9431',
        header: 'Resume',
        body: 'View my experience in Angular, React, Node, SpringBoot, MySQL, and many more.',
        link: '/resume',
      },
    ]
  }
}
