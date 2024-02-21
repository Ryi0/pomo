import {Component, Input} from '@angular/core';
import {TimeBoxComponent} from "./time-box/time-box.component";

@Component({
  selector: 'app-pomodoro',
  standalone: true,
  imports: [
    TimeBoxComponent
  ],
  templateUrl: './pomodoro.component.html',
  styleUrl: './pomodoro.component.scss'
})
export class PomodoroComponent {

}
