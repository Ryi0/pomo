import { Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {PomodoroComponent} from "./components/pomodoro/pomodoro.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";

export const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'pomodoro',component:PomodoroComponent},
  {path:'**', component:PageNotFoundComponent}
  ];
