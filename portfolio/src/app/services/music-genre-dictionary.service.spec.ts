import { TestBed } from '@angular/core/testing';

import { MusicGenreDictionaryService } from './music-genre-dictionary.service';

describe('MusicGenreDictionaryService', () => {
  let service: MusicGenreDictionaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusicGenreDictionaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
