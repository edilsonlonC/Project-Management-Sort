import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CocomollComponent } from './cocomoll.component';

describe('CocomollComponent', () => {
  let component: CocomollComponent;
  let fixture: ComponentFixture<CocomollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CocomollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CocomollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
