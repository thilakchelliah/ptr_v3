import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByteconvComponent } from './byteconv.component';

describe('ByteconvComponent', () => {
  let component: ByteconvComponent;
  let fixture: ComponentFixture<ByteconvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ByteconvComponent]
    });
    fixture = TestBed.createComponent(ByteconvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
