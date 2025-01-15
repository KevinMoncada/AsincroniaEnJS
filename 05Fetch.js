//Crear una petición HTTP solicitando datos a un server url: "https://jsonplaceholder.typicode.com/todos/1";
//Crear una petición HTTP enviando datos a un server url: "https://jsonplaceholder.typicode.com/todos/";

//1.GET HTTP Request Example

// async function getRequestExample() {
//   try {
//     const url = "https://jsonplaceholder.typicode.com/todos/1";
//     const optionsObject = {
//       method: 'GET',
//       headers: {
//         'Authorization': 'BearertokenExample'
//       }
//     }
//     const response = await fetch(url, optionsObject);
//     if (!response.ok) {
//       throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
//     }
//     const data = response.json();
//     return data
//   } catch (error) {
//     throw error
//   }
// }

// getRequestExample()
//   .then((resolveValue) => {
//     console.log(`Successful request: `, resolveValue);
//   }).catch((err) => {
//     console.log(`Failed request, reason: `, err);
//   })


//2.POST HTTP Request Example
async function HTTPRequestPOSTExample() {
  try {
    const url = "https://jsonplaceholder.typicode.com/todos/"; // URL del endpoint al que se hará la solicitud
    const optionsObject = {
      method: "POST", // Método HTTP
      headers: {
        'Content-Type': 'application/json', // Especifica que el body será enviado en formato JSON
        'Authorization': 'Bearer token' // Encabezado para autorización (generalmente para APIs protegidas)
      },
      body: JSON.stringify({
        newElement: "HolaMundo", // Datos que enviamos al backend en formato JSON
      }),
    };
    // Verificar el body que se está enviando (solo para depuración)
    console.log("Datos enviados al backend:", JSON.parse(optionsObject.body));

    const response = await fetch(url, optionsObject); //Caso 1 donde se puede rechazar la promesa (Por errores de conexión, osea desde la perspectiva de la RED)
    console.log(`Objeto response: `, response); //Para depuración, asi verificamos que nos respondio el back
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status} ${response.statusText}`); // Caso 2 donde se puede rechazar la promesa, Verifica si la respuesta fue exitosa (Desde la perspectiva del servidor, osea si no hubo un error HTTP y el status code esta en el rango de los 200)
    }

    // Convierte el body de la respuesta del server que esta en JSON a un objeto de javascript (Asi seamos nosotros quienes estamos enviando datos casi siempre igualmente vamos a recibir una respuesta, por eso tenemos que hacer esto)
    const data = await response.json();
    return data;
  } catch (error) { //Este catch captura cualquiera de las 2 promesas rechazadas, y a su vez lanza nuevamente el error para que sea capturado por algun .catch externo
    throw error; // Vuelve a lanzar el error para que el bloque catch externo lo capture
  }
};

HTTPRequestPOSTExample()
  .then((result) => {
    console.log(`Successful HTTP Request: `, result);
  })
  .catch((error) => {  //Este catch captura cualquiera de las 2 promesas rechazadas en la función asincrona, error que de hecho previamente ya fue capturado por el catch del bloque try-catch dentro de la función asíncrona
    console.log("HTTP Request rejected, reason => ", error);
  })

