import { Component } from '@angular/core';
import { TimeBoxComponent } from './time-box/time-box.component';
import { ButtonComponent } from '../items/button/button.component';
import { TimeSInkService } from '../../time-sink.service';
import { SessionSetupComponent } from './session-setup/session-setup.component';

@Component({
  selector: 'app-pomodoro',
  standalone: true,
  imports: [TimeBoxComponent, ButtonComponent, SessionSetupComponent],
  templateUrl: './pomodoro.component.html',
  styleUrl: './pomodoro.component.scss',
})
export class PomodoroComponent {
  // mode = input<"minutes"|"seconds">("minutes");
  // modePom:"minutes"|"seconds" = "seconds";

  protected readonly TimeSInkService = TimeSInkService;
}
