import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShaperComponent } from './shaper.component';

describe('ShaperComponent', () => {
  let component: ShaperComponent;
  let fixture: ComponentFixture<ShaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShaperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
