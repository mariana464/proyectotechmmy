//Funcion para cragar el archivo csv y procesarlo
async function cargarCSV() {
    try{
        const respuesta = await fetch("./listado.csv");//Cargar el archivo CSV
        const texto = await respuesta.text(); //Leer el contenido por lineas

        const lineas = texto.split("\n"); //Dividir el contenido por lineas
        const encabezados = lineas[0].split(","); //Obtener los encabezados (Primera Linea)
        const cuerpo = lineas.slice(1);//Obtener las filas de datos

        const tbody = document.querySelector("#tablaUsuarios tbody");

        //Recorrer cada linea de datos
        cuerpo.forEach((linea) => {
            const columnas = linea.split(","); // Dividir las columnas por coma
            //Verificar que la linea tenga el número correcto de columnas
            if (columnas.length === encabezados.length){
                const fila = document.createElement("tr");
        
                //Crear celdas para cada columna
                columnas.forEach((dato) => {
                    const celda = document.createElement("td");
                    celda.textContent = dato.trim();
                    fila.appendChild(celda);
                })
                
                tbody.appendChild(fila); //Añadir la fila al cuerpo de la tabla
            }
        });
    } catch(error){
        console.error("Error al cargar el archivo CSV", error)
    }
}
     

//Llamar a la funcion para cargar el CSV
cargarCSV();