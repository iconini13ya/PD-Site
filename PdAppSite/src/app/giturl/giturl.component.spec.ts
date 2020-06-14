import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiturlComponent } from './giturl.component';

describe('GiturlComponent', () => {
  let component: GiturlComponent;
  let fixture: ComponentFixture<GiturlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiturlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiturlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
