import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from "./app.routing";
import { AppComponent } from './app.component';

import { GameComponent } from './game/game.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
  	GameComponent,
  	ZapatillasComponent,
  	CursosComponent,
  	HomeComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
