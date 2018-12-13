/*
Apuntes de syntaxis Angular

1- crear carpeta de componentes
2- en la carpeta de componentes crear vista.html y componente.ts
3- importar el modulo componente a el componente.ts en '@angular/core'
4- crear el primer decorador component con atrubitos selector y template
5- exportar la clase componente.js
6- cargar el componente creado en app.modules.ts
7- declararlo en el modulo de componentes
8- Definir metodo en el constructor del component.ts
9- Utilizar el selector para cargar el componente en app.component.html


En el template lo que se hace es cargar el template, el cual se utiliza templateurl

basicamente un componente es un objeto que tiene propiedades manipulables facilmente
por nuestros componentes en typescript.


los componentes se interpolan con las dobles llaves
/hooks / eventos y ciclos de vida



// Iniciar proyecto de angular

1- Actualizar angular/cli

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

ingreso al directirio: cd /cygdrive/c

Fuente: https://www.enmimaquinafunciona.com/pregunta/34995/como-acceder-a-diferentes-directorios-fuera-de-cygwin-directorios
AHORA COMO GENERAR COMPONENTES DESDE LA CONSOLA!

Scaffolding: generar codigo de manera automatica
SE DEBE UTILIZAR LA CONSOLA DE COMANDOS POR DEFECTO DEL SO


ng generate component nombre-componente
antes del nombre agrega app-

Continuar en Hooks/eventos ciclo de vida 






*/