# Módulo: Más funciones para los ATF.

En este módulo explicaremos qué funciones nos necesarias para manejar un ATF.

```c
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

void agregarListaChar(LISTACHAR *listaChar, char agregar) {
    listaChar->lista = (char *) realloc(listaChar->lista, sizeof(char) * 1 * (listaChar->tam + 1));
    if (listaChar->lista == NULL) {
        perror("Error al asignar memoria");
        exit(EXIT_FAILURE);
    }
    listaChar->lista[listaChar->tam] = agregar;
    listaChar->tam = listaChar->tam + 1;
}

void agregarListaInt(LISTAINT *listaInt, int agregar) {
    listaInt->lista = (int *) realloc(listaInt->lista, sizeof(int) * 1 * (listaInt->tam + 1));
    if (listaInt->lista == NULL) {
        perror("Error al asignar memoria");
        exit(EXIT_FAILURE);
    }
    listaInt->lista[listaInt->tam] = agregar;
    listaInt->tam = listaInt->tam + 1;
}

void agregarFuncion(LISTAFUNCIONES *listafunc, FUNCION func){
	listafunc->funcion = (FUNCION *) realloc(listafunc->funcion, sizeof(FUNCION) * (listafunc->tam+1));
	listafunc->funcion[listafunc->tam].estado = func.estado;
	listafunc->funcion[listafunc->tam].simbolo = func.simbolo;
	listafunc->funcion[listafunc->tam].resultado = func.resultado;
	listafunc->tam++;
}

char * limpiarCadena(char *cad){
	int i,tam=strlen(cad);
	for(i=0; i<tam; i++)
		cad[i] = '\0';
	return cad;
}

int valorEnListaInt(LISTAINT list, int valor){
	int i;
	for(i=0; i<list.tam; i++){
		if(list.lista[i]==valor)
			return 1;
	}
	return 0;
}
```

# Descripción de las funciones
```c
crearListaChar(int n)
```
Crea y devuelve una lista dinámica que almacena caracteres (char). Inicializa la lista con un tamaño n y reserva la memoria correspondiente para los elementos. Devuelve la lista vacía pero con espacio asignado para n caracteres.

```c
crearListaInt(int n)
```
Crea y devuelve una lista dinámica que almacena enteros (int). Similar a la función anterior, inicializa la lista con un tamaño n y reserva la memoria correspondiente para los elementos.

```c
crearFuncion(char estado, char simbolo, char estadoFinal)
```
Crea una función de transición que describe cómo el autómata cambia de estado. Toma como parámetros el estado actual, el simbolo de entrada, y el estadoFinal al que se debe transitar. Devuelve una estructura FUNCION que contiene estos tres elementos.

```c
crearListaFunciones(int n)
```
Crea y devuelve una lista dinámica de funciones de transición. La lista se inicializa con un tamaño n y permite almacenar las funciones que definen las transiciones entre los estados del autómata.

```c
agregarListaChar(LISTACHAR *listaChar, char agregar)
```
Agrega un nuevo carácter a la lista dinámica de caracteres. Si la lista ya está llena, esta función redimensiona la lista utilizando realloc para asignar espacio adicional. Después agrega el nuevo carácter y actualiza el tamaño de la lista.

```c
agregarListaInt(LISTAINT *listaInt, int agregar)
```
Similar a la función anterior, esta agrega un nuevo entero a la lista dinámica de enteros, redimensionando la lista cuando sea necesario.

```c
agregarFuncion(LISTAFUNCIONES *listafunc, FUNCION func)
```
Agrega una nueva función de transición a la lista de funciones. La función es añadida al final de la lista y el tamaño de la lista se incrementa automáticamente.

```c
limpiarCadena(char *cad)
```
Limpia (pone a '\0') todos los caracteres de una cadena de texto. Es útil cuando se desea reutilizar una cadena sin preocuparse por los datos residuales de ejecuciones anteriores.

```c
int valorEnListaInt(LISTAINT list, int valor)
```
Devuelve 1 si encuentra valor en la lista (list) o devuelve 0 si no lo encuentra.

# ¿Por qué necesito todas estas funciones?
Estas funciones son fundamentales para trabajar con autómatas finitos de transición (ATF), ya que permiten:

**Manejo dinámico de memoria**: Las funciones de creación de listas y agregados permiten gestionar las listas de caracteres, enteros y funciones de transición de manera eficiente, sin preocuparse por el tamaño inicial.

**Definición de transiciones**: Las funciones de transición (crearFuncion y agregarFuncion) permiten definir y almacenar las reglas que el autómata seguirá para realizar su procesamiento basado en el estado y el símbolo de entrada.

**Flexibilidad**: Al usar listas dinámicas, puedes agregar o quitar elementos (caracteres, enteros, funciones) según sea necesario, lo que hace que el módulo sea flexible y escalable para diferentes configuraciones de ATF.

# Uso típico
Este módulo se utiliza principalmente para construir y manejar autómatas finitos de transición en programas que requieren la simulación de máquinas de estados, como en los analizadores léxicos de compiladores, sistemas de reconocimiento de patrones o cualquier otro tipo de aplicación que implique procesamiento de cadenas.

