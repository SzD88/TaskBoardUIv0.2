import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddRangeComponent } from './dialog-add-range.component';

describe('DialogAddRangeComponent', () => {
  let component: DialogAddRangeComponent;
  let fixture: ComponentFixture<DialogAddRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddRangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
