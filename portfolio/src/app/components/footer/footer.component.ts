import { Component } from '@angular/core';
import { CardInfo } from 'src/app/models/card-info.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})


export class FooterComponent {
  footerLinks!: CardInfo[];

  ngOnInit(): void {
    this.footerLinks = [
      {
        img: '/assets/images/git.svg',
        link: 'https://github.com/1stwice',
      },
      {
        img: '/assets/images/LinkedIn.svg',
        link: 'https://www.linkedin.com/in/zackary-tyler/',
      },
      {
        img: '/assets/images/yt.svg',
        link: 'https://www.youtube.com/@hiraeth2378',
      },
      {
        img: '/assets/images/insta.svg',
        link: 'https://www.instagram.com/zacks_cozy_corner/',
      },
      {
        img: '/assets/images/figma_logo.svg',
        link: 'https://www.figma.com/file/Ba4v8WZitmJKU1MeBLWLaY/Server-website-UI-kits-(Community)?type=design&node-id=1-53&t=XAYgrQz4FsPWsITL-0',
      },
    ]
  }
}
