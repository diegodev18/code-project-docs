# Módulo: Inicializar las estructuras de datos de los ATF

En este módulo inicializaremos las estructuras de datos y sus variables 
para que cuando queramos crear un ATF tenga memoria reservada y ciertos 
valores iniciales.

```c

AUTOMATA crearAutomata(){
	AUTOMATA a;
	a.alfabeto.lista = NULL;
	a.alfabeto.tam = 0;
	a.estadoInicial = '\0';
	a.estados.lista = NULL;
	a.estados.tam = 0;
	a.estadosFinales.lista = NULL;
	a.estadosFinales.tam = 0;
	a.funciones.tam = 0;
	a.funciones.funcion = NULL;
	return a;
}

LISTACHAR crearListaChar(int n){
	LISTACHAR nueva;
	nueva.lista = (char *) calloc(n, sizeof(char));
	nueva.tam = n;
	return nueva;
}

LISTAINT crearListaInt(int n){
	LISTAINT nueva;
	nueva.lista = (int *) calloc(n, sizeof(int));
	nueva.tam = n;
	return nueva;
}

FUNCION crearFuncion(char estado, char simbolo, char estadoFinal){
	FUNCION func;
	func.estado = estado;
	func.simbolo = simbolo;
	func.resultado = estadoFinal;
	return func;
}
LISTAFUNCIONES crearListaFunciones(int n){
	LISTAFUNCIONES func;
	func.funcion = (FUNCION*) calloc(n, sizeof(FUNCION));
	func.tam = n;
	return func;
}
```

# ¿Por qué se tiene que inicializar?

Es una buena pregunta. En realidad, debemos inicializar las variables ya que esto hace que el código sea más limpio al momento de querer crear un nuevo ATF. 

Imaginate tener que inicializar todos los valores de un ATF cada que quieras crearlo, ¿da un poco de flojera pensar en eso, no?

Pues bien, ese es uno de los motivos. Para quienes hayan trabajado con la Programación Orientada a Objetos se les hará algo similar a los que es el constructor de un objeto. Si bien el lenguaje C no soporta esta caracteristica al ser un lenguaje del paradigma estructurado, podemos utilizar esta estrategia para evitar problemas en memoria y ahorrar código.