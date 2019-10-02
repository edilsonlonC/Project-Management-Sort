import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateResourcesComponent } from './update-resources.component';

describe('UpdateResourcesComponent', () => {
  let component: UpdateResourcesComponent;
  let fixture: ComponentFixture<UpdateResourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateResourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
