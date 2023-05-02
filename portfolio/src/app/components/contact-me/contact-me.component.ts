import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent {

  constructor (private modalService: NgbModal) {
    
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }

}
