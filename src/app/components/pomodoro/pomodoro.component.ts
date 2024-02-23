import {Component, input, Input} from '@angular/core';
import {TimeBoxComponent} from "./time-box/time-box.component";
import {ButtonComponent} from "../items/button/button.component";

@Component({
  selector: 'app-pomodoro',
  standalone: true,
  imports: [
    TimeBoxComponent,
    ButtonComponent
  ],
  templateUrl: './pomodoro.component.html',
  styleUrl: './pomodoro.component.scss'
})
export class PomodoroComponent {
  // mode = input<"minutes"|"seconds">("minutes");
  modePom:"minutes"|"seconds" = "seconds";
  changeMode(){
    if (this.modePom==="minutes"){
      this.modePom="seconds";
    }
    else this.modePom="minutes";
  }
}
