import { Component, OnInit } from '@angular/core';
import { CardInfo } from 'src/app/models/card-info.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cardsInfo!: CardInfo[];

  ngOnInit(): void {
    this.cardsInfo = [
      {
        img: '/',
        background: '#FE9431',
        header: 'Resume',
        body: 'View my experience in Angular, React, Node, SpringBoot, MySQL, and many more.',
        link: '/resume',
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
        background: '',
        header: 'Resume',
        body: 'View my experience in Angular, React, Node, SpringBoot, MySQL, and many more.',
        link: '/resume',
      },
      {
        img: '/',
        background: '',
        header: 'Video Project',
        body: 'Enjoy my first solo video project: Hiraeth, and the details behind production.',
        link: '/hiraeth',
      }
    ]
  }
}
