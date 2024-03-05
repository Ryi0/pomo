import {Component} from '@angular/core';
import {NavBarComponent} from "../items/nav-bar/nav-bar.component";
import {TimerComponent} from "../timer/timer.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NavBarComponent,
    TimerComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
