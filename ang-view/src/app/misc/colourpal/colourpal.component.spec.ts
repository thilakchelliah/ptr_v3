import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColourpalComponent } from './colourpal.component';

describe('ColourpalComponent', () => {
  let component: ColourpalComponent;
  let fixture: ComponentFixture<ColourpalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColourpalComponent]
    });
    fixture = TestBed.createComponent(ColourpalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
