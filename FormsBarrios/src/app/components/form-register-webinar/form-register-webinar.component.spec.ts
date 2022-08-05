import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegisterWebinarComponent } from './form-register-webinar.component';

describe('FormRegisterWebinarComponent', () => {
  let component: FormRegisterWebinarComponent;
  let fixture: ComponentFixture<FormRegisterWebinarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRegisterWebinarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRegisterWebinarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
