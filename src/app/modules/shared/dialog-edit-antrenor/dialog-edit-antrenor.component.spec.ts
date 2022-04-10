import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditAntrenorComponent } from './dialog-edit-antrenor.component';

describe('DialogEditAntrenorComponent', () => {
  let component: DialogEditAntrenorComponent;
  let fixture: ComponentFixture<DialogEditAntrenorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditAntrenorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEditAntrenorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
