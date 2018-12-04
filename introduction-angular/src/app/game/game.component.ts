import { Component } from '@angular/core';

@Component({
	selector: 'game',
	templateUrl: './game.component.html'
})

export class GameComponent{

	public titulo: string;
	public listado: string;
	constructor(){
		this.titulo = "Componente de Videojuegos";
		this.listado = "Listado de los juegos mas populares";
		
	}
}