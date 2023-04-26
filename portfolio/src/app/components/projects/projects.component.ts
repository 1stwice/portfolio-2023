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
        img: '/',
        background: 'grey',
        header: 'Movie Review App',
        body: 'View my experience in Angular, React, Node, SpringBoot, MySQL, and many more.',
        link: '/resume',
      },
      {
        img: '/',
        background: 'lightblue',
        header: 'Web Game',
        body: 'Enjoy my first solo video project: Hiraeth, and the details behind production.',
        link: '/hiraeth',
      },
      {
        img: '/assets/images/head.png',
        background: 'black',
        header: 'Video Project',
        body: 'Enjoy my first solo video project: Hiraeth, and the details behind production.',
        link: '/hiraeth',
      },
      {
        img: '/',
        background: '#FE9431',
        header: 'Resume',
        body: 'View my experience in Angular, React, Node, SpringBoot, MySQL, and many more.',
        link: '/resume',
      },
    ]
  }
}
