import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSermonComponent } from './edit-sermon.component';

describe('EditSermonComponent', () => {
  let component: EditSermonComponent;
  let fixture: ComponentFixture<EditSermonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSermonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSermonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
