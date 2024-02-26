import { Component } from '@angular/core';
import {ScatterComponent} from "./scatter/scatter.component";

@Component({
  selector: 'app-visualizing-tool',
  standalone: true,
  imports: [
    ScatterComponent
  ],
  templateUrl: './visualizing-tool.component.html',
  styleUrl: './visualizing-tool.component.scss'
})
export class VisualizingToolComponent {

}
