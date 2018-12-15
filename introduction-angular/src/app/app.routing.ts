//Importar modulos del router de angular

import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Importar los componentes

import { ZapatillasComponent } from "./zapatillas/zapatillas.component";
import { GameComponent } from "./game/game.component";
import { CursosComponent } from "./cursos/cursos.component";
import { HomeComponent } from "./home/home.component";

// Array de rutas

const appRoutes: Routes = [
	{path: "", component: HomeComponent},
	{path: "zapatillas", component: ZapatillasComponent},
	{path: "game", component: GameComponent},
	{path: "cursos", component: CursosComponent},	
	{path: "cursos/:nombre", component: CursosComponent},	
	{path: "**", component: HomeComponent}
];

//Exportar el modulo del router

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
