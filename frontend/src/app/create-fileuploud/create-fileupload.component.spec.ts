import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFileuploadComponent } from './create-fileupload.component';

describe('CreateModalComponent', () => {
  let component: CreateFileuploadComponent;
  let fixture: ComponentFixture<CreateFileuploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFileuploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFileuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
