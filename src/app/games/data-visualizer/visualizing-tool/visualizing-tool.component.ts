import { Component } from '@angular/core';
import {ScatterComponent} from "./scatter/scatter.component";
import {NgxEchartsDirective} from "ngx-echarts";

@Component({
  selector: 'app-visualizing-tool',
  standalone: true,
  imports: [
    ScatterComponent,
    NgxEchartsDirective
  ],
  templateUrl: './visualizing-tool.component.html',
  styleUrl: './visualizing-tool.component.scss'
})
export class VisualizingToolComponent {

}
