import { Component } from '@angular/core';
import {ButtonComponent} from "../button/button.component";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    ButtonComponent
  ],
  template: `
    <div class="myMenu">
    <ul>
      <li><app-button type="routingBtn" tmpLbl="Memory2000"></app-button></li>
      <li><app-button type="routingBtn" tmpLbl="Shaper"></app-button></li>
      <li><app-button type="routingBtn" tmpLbl="Data&nbsp;Visualizer" route="visualizer"></app-button> </li>
      <li><app-button type="routingBtn" tmpLbl="Notes"></app-button></li>
    </ul>
    </div>
  `,
  styles: `
    .border50{
      border-radius: 50%;
    }
    .myMenu{
      overflow: hidden;
      font-size: 1rem;
      margin: 0;
      padding: 0;
      position: relative;
    }
    li{
      padding: 1rem;
      margin: 0 0.1rem;
      width: 100%;
    }
    ul{
      width: 100%;
      display: flex;
      list-style-type: none;

      padding: 0.2rem;
      top: 0;
      justify-content: center;
      margin: 1rem 0rem;

    }
    .scale50{
      scale: 50%;
  }`
})
export class MenuComponent {

}
