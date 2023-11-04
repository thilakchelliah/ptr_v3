import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudiotestComponent } from './audiotest.component';

describe('AudiotestComponent', () => {
  let component: AudiotestComponent;
  let fixture: ComponentFixture<AudiotestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AudiotestComponent]
    });
    fixture = TestBed.createComponent(AudiotestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
