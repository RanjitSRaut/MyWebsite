import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorktabComponent } from './worktab.component';

describe('WorktabComponent', () => {
  let component: WorktabComponent;
  let fixture: ComponentFixture<WorktabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorktabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorktabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
