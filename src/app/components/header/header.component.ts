import { Component } from '@angular/core';
import {NavBarComponent} from "../items/nav-bar/nav-bar.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NavBarComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
