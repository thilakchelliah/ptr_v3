import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningsectionComponent } from './warningsection.component';

describe('WarningsectionComponent', () => {
  let component: WarningsectionComponent;
  let fixture: ComponentFixture<WarningsectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WarningsectionComponent]
    });
    fixture = TestBed.createComponent(WarningsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
