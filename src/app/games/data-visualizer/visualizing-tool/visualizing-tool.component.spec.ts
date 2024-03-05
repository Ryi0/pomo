import {ComponentFixture, TestBed} from '@angular/core/testing';

import {VisualizingToolComponent} from './visualizing-tool.component';

describe('VisualizingToolComponent', () => {
  let component: VisualizingToolComponent;
  let fixture: ComponentFixture<VisualizingToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizingToolComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(VisualizingToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
