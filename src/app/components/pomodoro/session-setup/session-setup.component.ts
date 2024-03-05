import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TimeSInkService } from '../../../time-sink.service';
import { ButtonComponent } from '../../items/button/button.component';

@Component({
  selector: 'app-session-setup',
  standalone: true,
  imports: [FormsModule, ButtonComponent],
  template: `
    <div class="container">
      <h1>Session&nbsp;setup</h1>
      <p>
        Break Time&nbsp;:&nbsp;<input
          type="text"
          maxlength="2"
          [(ngModel)]="breakInputTime"
          [disabled]="locked"
        />
      </p>
      <p>
        Work Time&nbsp;&nbsp;:&nbsp;<input
          type="text"
          maxlength="2"
          [(ngModel)]="workInputTime"
          [disabled]="locked"
        />
      </p>
      <app-button
        (click)="setSession()"
        type="funcBtn"
        tmpLbl="Validate"
        [isDisabled]="locked"
      ></app-button>
    </div>
  `,
  styles: ``,
})
export class SessionSetupComponent {
  breakInputTime: number = 0;
  locked: boolean = false;
  workInputTime: number = 0;

  setSession() {
    TimeSInkService.sessionSetter(this.breakInputTime, this.workInputTime);
    // TimeSInkService.TimerSetupFromSession();
  }
}
