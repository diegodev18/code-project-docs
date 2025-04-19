
# Módulo: Cargar un Autómata desde archivos

Este módulo contiene una función para cargar un autómata a partir de archivos de texto. La función `cargarAutomata` lee información acerca de los estados, el alfabeto, los estados finales, el estado inicial y las funciones de transición de un autómata desde archivos de texto.

## Descripción de la función

```c
AUTOMATA cargarAutomata(char *ruta) {
    AUTOMATA atf;
    atf = crearAutomata();
    char leido, est, simb, res;
    char *aux = (char *) calloc(100, sizeof(char));  //Almacenar ruta completa

    // Cargando estados
    FILE *archivoEstados = fopen(strcat(strcpy(aux, ruta), "/estados.txt"), "r");
    if (archivoEstados == NULL) {
        perror("Error al abrir el archivo estados.txt");
        exit(EXIT_FAILURE);
    }
    while (fscanf(archivoEstados, "%c", &leido) != EOF) {
        if (leido != '\n')
            agregarListaChar(&atf.estados, leido);
    }
    fclose(archivoEstados);

    // Cargando alfabeto
    sprintf(aux, "%s", ruta);
    FILE *archivoAlfabeto = fopen(strcat(aux, "/alfabeto.txt"), "r");
    if (archivoAlfabeto == NULL) {
        perror("Error al abrir el archivo alfabeto.txt");
        exit(EXIT_FAILURE);
    }
    while (fscanf(archivoAlfabeto, "%c", &leido) == 1) {
        if (leido != '\n')
            agregarListaChar(&atf.alfabeto, leido);
    }
    fclose(archivoAlfabeto);

    // Cargando estados finales
    sprintf(aux, "%s", ruta);
    FILE *archivoEstadosFinales = fopen(strcat(aux, "/estadosFinales.txt"), "r");
    if (archivoEstadosFinales == NULL) {
        perror("Error al abrir el archivo estadosFinales.txt");
        exit(EXIT_FAILURE);
    }
    while (fscanf(archivoEstadosFinales, "%c", &leido) == 1) {
        if (leido != '\n')
            agregarListaChar(&atf.estadosFinales, leido);
    }
    fclose(archivoEstadosFinales);

    // Cargando estado inicial
    sprintf(aux, "%s", ruta);
    FILE *archivoEstadoInicial = fopen(strcat(strcpy(aux, ruta), "/estadoInicial.txt"), "r");
    if (archivoEstadoInicial == NULL) {
        perror("Error al abrir el archivo estadoInicial.txt");
        exit(EXIT_FAILURE);
    }
    if (fscanf(archivoEstadoInicial, "%c", &leido) != 1) {
        perror("Error al leer el estado inicial");
        exit(EXIT_FAILURE);
    }
    atf.estadoInicial = leido;
    fclose(archivoEstadoInicial);

    // Cargando funciones de transición
    sprintf(aux, "%s", ruta);
    FILE *archivoFunciones = fopen(strcat(strcpy(aux, ruta), "/funciones.txt"), "r");
    if (archivoFunciones == NULL) {
        perror("Error al abrir el archivo funciones.txt");
        exit(EXIT_FAILURE);
    }
    while (fscanf(archivoFunciones, "%c %c %c\n", &est, &simb, &res) == 3) {
        FUNCION nuevaFuncion;
        nuevaFuncion.estado = est;
        nuevaFuncion.simbolo = simb;
        nuevaFuncion.resultado = res;

        agregarFuncion(&(atf.funciones), nuevaFuncion);
    }
    fclose(archivoFunciones);

    return atf;
}
```

## ¿Qué hace esta función?

La función `cargarAutomata` realiza lo siguiente:

1. **Carga de estados**: 
   Lee los estados del autómata desde el archivo `estados.txt` y los agrega a la lista de estados del autómata.

2. **Carga de alfabeto**:
   Lee los símbolos del alfabeto desde el archivo `alfabeto.txt` y los agrega a la lista del alfabeto del autómata.

3. **Carga de estados finales**:
   Lee los estados finales desde el archivo `estadosFinales.txt` y los agrega a la lista de estados finales del autómata.

4. **Carga del estado inicial**:
   Lee el estado inicial desde el archivo `estadoInicial.txt` y lo asigna al estado inicial del autómata.

5. **Carga de funciones de transición**:
   Lee las funciones de transición desde el archivo `funciones.txt` y las agrega a la lista de funciones de transición del autómata.

## Archivos utilizados

Para cargar un autómata, se requieren los siguientes archivos en la carpeta especificada en la ruta proporcionada:

1. **estados.txt**: Contiene los estados del autómata.
2. **alfabeto.txt**: Contiene los símbolos del alfabeto.
3. **estadosFinales.txt**: Contiene los estados finales del autómata.
4. **estadoInicial.txt**: Contiene el estado inicial del autómata.
5. **funciones.txt**: Contiene las funciones de transición del autómata, que describen cómo transita el autómata de un estado a otro basado en un símbolo.

## Notas

- La función utiliza `fscanf` para leer los archivos, por lo que se espera que los archivos estén correctamente formateados.
- En caso de error al abrir los archivos o leer su contenido, el programa termina y muestra un mensaje de error.
- Los archivos deben estar ubicados en la misma ruta que se pasa a la función `cargarAutomata`.

