import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSermonsComponent } from './all-sermons.component';

describe('AllSermonsComponent', () => {
  let component: AllSermonsComponent;
  let fixture: ComponentFixture<AllSermonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllSermonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSermonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
