/*
Apuntes de syntaxis Angular
///////////////////////////////////////////////////////////////////////////

//CREAR COMPONENTES A MANO
1- crear carpeta de componentes
2- en la carpeta de componentes crear vista.html y componente.ts
3- importar el modulo componente a el componente.ts en '@angular/core'
4- crear el primer decorador component con atrubitos selector y template
5- exportar la clase componente.js
6- cargar el componente creado en app.modules.ts
7- declararlo en el modulo de componentes
8- Definir metodo en el constructor del component.ts
9- Utilizar el selector para cargar el componente en app.component.html

///////////////////////////////////////////////////////////////////////////

En el template lo que se hace es cargar el template, el cual se utiliza templateurl

basicamente un componente es un objeto que tiene propiedades manipulables facilmente
por nuestros componentes en typescript.


los componentes se interpolan con las dobles llaves
/hooks / eventos y ciclos de vida


///////////////////////////////////////////////////////////////////////////

// Iniciar proyecto de angular

1- Actualizar angular/cli

ng --version
npm install --save-dev @angular/cli@latest
ng --version

1.1- Borrar angular
npm unistall -g @angular/cli
npm cache verify
npm cache clear --force

1.2- Instalar angular
npm install -g @angular/cli

comandos mas importantes: angularcli.io

2- Crear un nuevo proyecto de angular:
ng new name-proyect

3- Arrangar aplicacion angular desde el servidor 
			//con --port=12381923 
ng serve

localhost por defecto es 4200
///////////////////////////////////////////////////////////////////////////

ingreso al directirio: cd /cygdrive/c
///////////////////////////////////////////////////////////////////////////

AHORA COMO GENERAR COMPONENTES DESDE LA CONSOLA!

Scaffolding: generar codigo de manera automatica
SE DEBE UTILIZAR LA CONSOLA DE COMANDOS POR DEFECTO DEL SO


ng generate component nombre-componente
antes del nombre agrega app-
///////////////////////////////////////////////////////////////////////////

Continuar en Hooks/eventos ciclo de vida 
Significa
Cambios en componente, iniciar componente
ngOnInit() se ejecuta nada mas cargar componente
DoCheck() se ejecuta cuando se ejecuta un cambio
OnDestroy() se ejecuta cuando se borra un componente
///////////////////////////////////////////////////////////////////////////

//MODELOS:

 Crear un archivo.ts en singular clases e importar
///////////////////////////////////////////////////////////////////////////

 //DIRECTIVAS

son atributos o nuevas etiquetas nuevas que tenemos en nuestra vista html
es la etiqueta de un componente, tambien hay directivas para hacer estructuras de control, para hacer eventos databinding 
 -- *ngFor="let deportiva of zapatillas">
	recorre todos los objetos los guarda en un let de cada zapatillas.
	zapatillas es un componente

	*ngIf = "propiedad" esa propiedad retorna true o false; se muestra si se cumple

	[ngSwitch]="propiedad" 
		Es un case, entonces tiene varias propiedades
		cada propiedad se hace referencia con:
		*ngSwitchCase = "propiedad x"

ngClass asignar un elemento a una clase cuando se cumpla una condicion

//ENLACE DE DATOS - DATA BINDING
[(ngModel)] es otra directiva que modifica la propiedadde una clase
para utilizar esto hay que ir al app.module.ts y importar { FormsModule } from  @angular/forms;
luego cargar en los imports FormsModule,
cuando se modifican los datos se muestran de MANERA INSTANTANEA REACTIVA
///////////////////////////////////////////////////////////////////////////
//EVENTOS

(click)="metodo()" el metodo debe estar en una clase

nota: con splice(index, 1) borra en arrays

(blur)="metodo()" se ejecuta cuando se sale del input

//////CAPTURAR TECLAS!
(keyup.enter)="metodo()" se ejecuta cuando la tecla se presiona
//[ngClass]
esto edita todas las clases de un tiro 
en assets se guardan los estilos
(cargar siempre los assets) en angular.json 
las clases que se editan con las directivas se llaman con .
reiniciar server cada vez que se modifica el .json



///////////////////////////////////////////////////////////////////////////

//ROUTING DE ANGULAR
1- Dentro de app crear app.routing.ts
2- Importar los modulos del router

import { ModulesWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

3- Importar los componentes

import { ZapatillasComponent } from "./zapatillas/zapatilla.component";


4- Array de rutas


const appRoutes: Routes = [
	{path: "", component: HomeComponent},
	{path: "zapatillas", component: ZapatillasComponent},
	{path: "videojuego", component: VideojuegoComponent},
	{path: "cursos", component: CursosComponent},
	{path: **, component: HomeComponent}
];

5- Exportar el modulo del router

export const appRoutingProviders: any[] = [];
export const routing: ModulesWithProviders = RouterModule.forRoot(appRoutes);

6- importar routing en app.module.ts

import { routing, appRoutingProviders } from "./app.routing";

abajo    
 routing
  ],
  providers: [
    appRoutingProviders

    7- ir a app.component.html y cargar el <router-outlet></router-outlet>
el router nos incluye un atributo para navegar sin recargar

[routerLink]="" [routerLinkActive]="['active']" active es una clase css

El modulo de routing tiene problemas ya que el error 404 tiene que ser una cadena
por lo tanto debe tener comillas
*/