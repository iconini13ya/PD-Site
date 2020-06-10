import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjdevelopersComponent } from './projdevelopers.component';

describe('ProjdevelopersComponent', () => {
  let component: ProjdevelopersComponent;
  let fixture: ComponentFixture<ProjdevelopersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjdevelopersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjdevelopersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
