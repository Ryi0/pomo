import { Component } from '@angular/core';
import { PomodoroComponent } from '../pomodoro/pomodoro.component';
import { RouterLink } from '@angular/router';
import { MenuComponent } from '../items/menu/menu.component';
import { ButtonComponent } from '../items/button/button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PomodoroComponent, RouterLink, MenuComponent, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  coolFunc() {
    setTimeout(() => {});
  }
}
