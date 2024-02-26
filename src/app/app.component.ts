import { Component } from '@angular/core';
import {ChildrenOutletContexts, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {PomodoroComponent} from "./components/pomodoro/pomodoro.component";
import {NavBarComponent} from "./components/items/nav-bar/nav-bar.component";
import {ButtonComponent} from "./components/items/button/button.component";
import {HeaderComponent} from "./components/header/header.component";
import {TimerComponent} from "./components/timer/timer.component";
import {CommonModule, NgClass} from "@angular/common";
import {TimeSInkService} from "./time-sink.service";
import {MemoryComponent} from "./games/memory/memory.component";
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, PomodoroComponent, NavBarComponent, RouterLink, RouterLinkActive, ButtonComponent, HeaderComponent, TimerComponent, NgClass, MemoryComponent,CommonModule, NgxEchartsDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers:[
    provideEcharts(),
  ]
})
export class AppComponent {
  title = 'untitled8';
constructor(private contexts:ChildrenOutletContexts) {

}

//ts:TimeSInkService = new TimeSInkService;
  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

  protected readonly onscroll = onscroll;
  protected readonly TimeSInkService = TimeSInkService;
}
