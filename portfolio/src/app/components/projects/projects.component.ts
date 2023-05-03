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
        img: '/assets/images/tickets.svg',
        background: '#F290E7',
        header: 'Movie Review App',
        body: 'An example application using one of the movie industries most popular API\'s: TMDB.',
        link: '/movie-reviews',
      },
      {
        img: '/assets/images/trivia.svg',
        background: '#49DBC8',
        header: 'Movie Trivia',
        body: 'Enjoy a trivia game to demonstrate abstracting components, as well as dynamic ad deployment.',
        link: '/movie-trivia',
      },
      {
        img: '/assets/images/angular.svg',
        background: 'orangered',
        header: 'This Website',
        body: 'This Angular website is deployed in a Docker container, on a Raspberry Pi. The code is version controlled on Github, allowing me to develop and compile on my desktop. This allows me to pull the \'/dist\' folder on my RaspPi so I do not face \'Out of Memory\' errors while building this project with such a low-powered device.',
        link: 'https://github.com/1stwice/portfolio-2023'
      },
      {
        img: '/assets/images/head.png',
        background: 'black',
        header: 'Video Project',
        body: 'Enjoy my first solo video project: Hiraeth, and the details behind production.',
        link: 'https://hiraeth2022.netlify.app/',
      },
      {
        img: '/assets/images/resume.svg',
        background: '#FE9431',
        header: 'Resume',
        body: 'View my experience in Angular, React, Node, SpringBoot, MySQL, and many more.',
        link: '/resume',
      },
    ]
  }
}
