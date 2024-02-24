import {Component, input, Input} from '@angular/core';
import {TimeBoxComponent} from "./time-box/time-box.component";
import {ButtonComponent} from "../items/button/button.component";
import {TimeSInkService} from "../../time-sink.service";

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
 // modePom:"minutes"|"seconds" = "seconds";
  changeMode(){
    if (TimeSInkService.Mode()==="Minutes"){
      TimeSInkService.Mode.set("Seconds");
    }
    else TimeSInkService.Mode.set("Minutes");
  }

  protected readonly TimeSInkService = TimeSInkService;
}
