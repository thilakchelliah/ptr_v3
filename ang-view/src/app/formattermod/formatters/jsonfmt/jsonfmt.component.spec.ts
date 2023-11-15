import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonfmtComponent } from './jsonfmt.component';

describe('JsonfmtComponent', () => {
  let component: JsonfmtComponent;
  let fixture: ComponentFixture<JsonfmtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsonfmtComponent]
    });
    fixture = TestBed.createComponent(JsonfmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
