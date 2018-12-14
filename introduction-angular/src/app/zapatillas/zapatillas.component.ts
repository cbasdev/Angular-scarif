import { Component, OnInit } from '@angular/core';
import { Zapatilla } from "../models/zapatilla";
@Component({
	selector: 'zapatillas',
	templateUrl: './zapatillas.component.html'
	})

export class ZapatillasComponent implements OnInit{
	public titulo: string;
	public zapatillas: Array<Zapatilla>;
	constructor(){
		this.zapatillas = [
			new Zapatilla("Nike roll", "Nike", "Blanco", 90, true),
			new Zapatilla("Nike rull", "Nike", "Blanco", 90, true),
			new Zapatilla("Vans rell", "Nike", "Blanco", 90, true)
		
		];
	}

	ngOnInit(){
		console.log(this.zapatillas);
	}
}