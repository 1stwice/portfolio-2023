import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicGenreDictionaryComponent } from './music-genre-dictionary.component';

describe('MusicGenreDictionaryComponent', () => {
  let component: MusicGenreDictionaryComponent;
  let fixture: ComponentFixture<MusicGenreDictionaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicGenreDictionaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicGenreDictionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
