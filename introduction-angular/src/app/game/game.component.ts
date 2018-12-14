import { Component, OnInit, DoCheck, OnDestroy} from '@angular/core';

@Component({
	selector: 'game',
	templateUrl: './game.component.html'
})

export class GameComponent implements OnInit, DoCheck, OnDestroy{

	public titulo: string;
	public listado: string;
	constructor(){
		this.titulo = "Componente de Videojuegos";
		this.listado = "Listado de los juegos mas populares";
		
	}

	ngOnInit(){
		//console.log("OnInit Ejecutado");
	}

	ngDoCheck(){
		//console.log("DoCheck Ejecutado");
	}

	ngOnDestroy(){
	//	console.log("OnDestroy Ejecutado");
	}
	cambiarTitulo(){
		this.titulo = "Nuevo titulo";
	}
}