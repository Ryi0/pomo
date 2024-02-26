import { Component } from '@angular/core';
import {ButtonComponent} from "../../components/items/button/button.component";
import {TimeSInkService} from "../../time-sink.service";
import {VisualizingToolComponent} from "./visualizing-tool/visualizing-tool.component";

@Component({
  selector: 'app-data-visualizer',
  standalone: true,
  imports: [
    ButtonComponent,
    VisualizingToolComponent
  ],
  template: `
    <h1>Visualizer</h1>
    <div class="contBg">
      <div class="buttonsContainerDV">
        <div class="container">
          <app-button type="funcBtn" tmpLbl="Input&nbsp;Data" [isDisabled]="false"></app-button>
          <app-button type="funcBtn" tmpLbl="Visualize" [isDisabled]="false"></app-button>
        </div>
        <div class="toolContainer"><app-visualizing-tool></app-visualizing-tool></div>
      </div>

    </div>
    <h1>{{ TimeSInkService.FormattedString() }}</h1>
  `,
  styles: `
    .buttonsContainerDV {
      width: 100%;
      display: flex;
    }

    .toolContainer {
     /*// background-color: #5b5b5b;*/
      margin-left: 5%;
      width: 70%;
    }

    .container {
      display: grid;
      grid-row-gap: 2rem;
      background: unset;
      /*mix-blend-mode: lighten;*/
      background-color: black;
      width: fit-content;
      font-size: .8rem;
      overflow: hidden;

    }
  `
})
export class DataVisualizerComponent {

  protected readonly TimeSInkService = TimeSInkService;
}
