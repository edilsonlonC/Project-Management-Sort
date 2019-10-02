import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFunctionalitiesComponent } from './update-functionalities.component';

describe('UpdateFunctionalitiesComponent', () => {
  let component: UpdateFunctionalitiesComponent;
  let fixture: ComponentFixture<UpdateFunctionalitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateFunctionalitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFunctionalitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
