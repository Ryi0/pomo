import {Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {PomodoroComponent} from "./components/pomodoro/pomodoro.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {MemoryComponent} from "./games/memory/memory.component";
import {ShaperComponent} from "./games/shaper/shaper.component";
import {DataVisualizerComponent} from "./games/data-visualizer/data-visualizer.component";
import {LoginComponent} from "./login/login.component";

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'pomodoro', component: PomodoroComponent},
  {path: 'home/memory2000', component: MemoryComponent},
  {path: 'home/shaper', component: ShaperComponent},
  {path: 'home/visualizer', component: DataVisualizerComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home/login', redirectTo: '/login'},
  {path: '**', component: PageNotFoundComponent}
];
