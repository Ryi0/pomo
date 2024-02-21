import { Component } from '@angular/core';
import {ChildrenOutletContexts, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {PomodoroComponent} from "./components/pomodoro/pomodoro.component";
import {NavBarComponent} from "./components/items/nav-bar/nav-bar.component";
import {ButtonComponent} from "./components/items/button/button.component";
import {HeaderComponent} from "./components/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, PomodoroComponent, NavBarComponent, RouterLink, RouterLinkActive, ButtonComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'untitled8';
constructor(private contexts:ChildrenOutletContexts) {
}
  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
