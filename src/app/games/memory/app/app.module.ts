import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SquareComponent } from '../../../../../projects/shaper/src/app/square/square.component';
import { BoardComponent } from '../../../../../projects/shaper/src/app/board/board.component';
import { GameComponent } from '../../../../../projects/shaper/src/app/game/game.component';
import { SideBarComponent } from '../../../../../projects/shaper/src/app/side-bar/side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    SquareComponent,
    BoardComponent,
    GameComponent,
    SideBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
