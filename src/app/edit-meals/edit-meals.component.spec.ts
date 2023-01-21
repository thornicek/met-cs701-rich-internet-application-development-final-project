import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMealsComponent } from './edit-meals.component';

describe('EditMealsComponent', () => {
  let component: EditMealsComponent;
  let fixture: ComponentFixture<EditMealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
