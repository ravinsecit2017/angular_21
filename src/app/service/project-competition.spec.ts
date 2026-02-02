import { TestBed } from '@angular/core/testing';

import { ProjectCompetition } from './project-competition';

describe('ProjectCompetition', () => {
  let service: ProjectCompetition;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectCompetition);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
