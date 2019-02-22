/*
SQL Básico

- SELECT para consultar datos
- WHERE para incluir condicionales
- ORDER BY para ordenar resultados
- INSERT para insertar datos
- UPDATE para actualizar datos
- DELETE para borrar datos

SQL Avanzado

- LIMIT para limpiar número de registros
- LIKE para buscar por un patron
- IN para seleccionar por múltiples valores
- BETWEEN para seleccionar por rango de valores
- ALIAS para renombrar
- JOIN para combiar varias tablas
- UNION para combinar varios resultados
- CREATE TABLE para crear una tabla
- NULL para no indicar ningun valor
- UNIQUE para identificar de manera única
- PRIMARY KEY para identificar cada fila de manera unica
- FOREIGN KEY para identificar la clave primaria de otra tabla
- DROP para borrar completamente una tabla o base de datos
- TRUNCATE para borrar sólo los datos de la tabla, no la estructura
- CREATE VIEW para crear vistas de una tabla

***********************************************************************
SELECT * FROM tabla -> Mostrar todas las columnas de la tabla
SELECT columna FROM tabla -> Mostrar todas las columnas de la tabla
***********************************************************************
-- DISTINC

SELECT DISTINC nombre FROM personas -> Quita los nombres repetidos
***********************************************************************
-- WHERE: Filtros en las consultas

SELECT nombre FROM peronas WHERE nombre='antonio'
SELECT nombre FROM peronas WHERE apellido1='lopez'
SELECT nombre FROM peronas WHERE edad > 40
***********************************************************************
- AND y OR
SELECT * FROM personas WHERE nombre = 'antonio' and edad > 40
SELECT * FROM personas WHERE nombre = 'antonio' or  apellido1 = 'garcia'
***********************************************************************
- ORDER BY: ordena segun el valor
(ascendente por defecto)
SELECT * FROM personas ORDER BY edad DESC
***********************************************************************
- INSERT INTO: insertar nueva columna

INSERT INTO personas VALUES('sebastian','velez','montoya','31029481','21')
***********************************************************************
- UPDATE: modificar valores en una tabla

UPDATE personas SET edad = 22 WHERE nombre = 'sebastian'
UPDATE personas SET apellido1 = 'perez' WHERE nombre = 'antonio'
***********************************************************************
- DELETE: Borrar una fila o un registro

DELETE FROM personas WHERE nombre = 'sebastian'
***********************************************************************
- LIMIT : Mostrar solo las primeras filas

SELECT * FROM personas LIMIT 3

- UNLIMIT: Mostrar solo las ultimas filas

SELECT * FROM personas UNLIMIT 3
***********************************************************************
- LIKE: Buscar un patron o algo en comun con los registros

SELECT * FROM personas WHERE nombre LIKE '%t%'
SELECT * FROM personas WHERE apellido2 LIKE 'se%'
SELECT * FROM personas WHERE apellido2 LIKE '%an'
***********************************************************************
- IN : selecciona multiples valores == or

SELECT * FROM personas WHERE apellido1 IN ('velez', 'lopez')
***********************************************************************
- BETWEEN selecciona entre un rango de datos

SELECT * FROM personas WHERE edad BETWEEN '20' and '50'
***********************************************************************
- ALIAS: otra forma de llamar una tabla o una columna
- AS
SELECT apellido1 AS a1 FROM personas 
***********************************************************************
- JOIN: permite consultar datos de mas de dos tablas relacionadas

SELECT * FROM personas JOIN departamentos WHERE personas.dep = departamentos.dep
***********************************************************************
- UNION: acumula dos resultados de dos SELECT

SELECT * FROM PERSONAS WHERE EDAD <'18' UNION SELECT * FROM personas WHERE dep = '1'
***********************************************************************
- CREATE TABLE

CREATE TABLE productos(id INTEGER, producto TEXT, precio INTEGER)
***********************************************************************
- NOT NULL : No puede estar vacia

CREATE TABLE productos(id INTEGER, producto TEXT, precio INTEGER NOT NULL)
***********************************************************************
- UNIQUE: No se puede repetir valores, ideal para ids

CREATE TABLE tabla1 (id INTEGER UNIQUE, nombre TEXT, precio INTEGER)
***********************************************************************
- PRIMARY KEY: Llave unica, siempre no null y cada tabla solo tiene una

CREATE TABLE tabla1(id INTEGER PRIMARY KEY, nombre TEXT, precio INTEGER)
***********************************************************************
- FOREIGN KEY: Indica llaves primarias de OTRA TABLA

CREATE TABLE personas2 (id INTEGER, nombre TEXT, apellido1 TEXT, dep INTEGER,
FOREIGN KEY('dep') REFERENCES 'departamentos'('dep'))
***********************************************************************
- CHECK: 

CREATE TABLE departamentos2 (dep INTEGER PRIMARY KEY, departamento VARCHAR,
CHECK (dep>0))
***********************************************************************
CREATE INDEX: crear indices en tabla y se usan para buscan rapidas

CREATE INDEX indiceid ON personas(id)
CREATE UNIQUE INDEX indicepersonas ON personas(per)
***********************************************************************
- DROP: Borrar

DROP INDEX indiceid

DROP TABLE tabla1
***********************************************************************
- TRUNCATE: eliminar los datos de una tabla conservando estructura

TRUNCATE TABLE 'personas'
***********************************************************************
- ALTER: añadir eliminar o modificar elementos de una tabla

ALTER TABLE personas ADD apellido2 INTEGER
***********************************************************************
- AUTO_INCREMENT: secuencion automatica para una tabla

CREATE TABLE tabla1 (id INTEGER AUTO_INCREMENT, nombre VARCHAR)
***********************************************************************
- CREATE VIEW: tabla virtual basada en el resultado de una consulta

CREATE VIEW mayoresdeedad AS SELECT * FROM personas WHERE edad>18
***********************************************************************
- SUM : sumar datos

SELECT SUM(edad) FROM personas
***********************************************************************
- AVG: Valor medio de una columna

SELECT AVG(edad) FROM personas
***********************************************************************
- COUNT : para saber el numero de filas de nuestro resultado

SELECT COUNT (*) FROM personas 
***********************************************************************
- MIN : Valor minimo de una columna

SELECT MIN(edad) FROM personas
***********************************************************************
- MAX : Valor MAXimo de una columna

SELECT MAX(edad) FROM personas

***********************************************************************

*/