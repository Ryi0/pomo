import { Component } from '@angular/core';
import {UserSelectComponent} from "../components/user-select/user-select.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    UserSelectComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
