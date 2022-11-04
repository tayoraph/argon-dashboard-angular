import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewSermonComponent } from './add-new-sermon.component';

describe('AddNewSermonComponent', () => {
  let component: AddNewSermonComponent;
  let fixture: ComponentFixture<AddNewSermonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewSermonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewSermonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
