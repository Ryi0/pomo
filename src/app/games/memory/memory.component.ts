import {Component} from '@angular/core';
import {GameComponent} from "./game/game.component";
import {TimerComponent} from "../../components/timer/timer.component";
import {TimeSInkService} from "../../time-sink.service";

@Component({
  selector: 'app-memory',
  standalone: true,
  imports: [
    GameComponent,
    TimerComponent
  ],
  templateUrl: './memory.component.html',
  styleUrl: './memory.component.scss'
})
export class MemoryComponent {

  protected readonly TimeSInkService = TimeSInkService;
}
