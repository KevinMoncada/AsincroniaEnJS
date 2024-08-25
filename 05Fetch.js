//Crear una petición HTTP solicitando datos a un server url: "https://jsonplaceholder.typicode.com/todos/1";
//Crear una petición HTTP enviando datos a un server url: "https://jsonplaceholder.typicode.co/todos/";

//1. Solicitud de datos
async function HTTPRequestExampleGET() {
    try {
        const url = "https://jsonplaceholder.typicode.com/todos/1";
        const optionsObject = {
            method: "GET",
            headers: {
                'Authorization': 'BearertokenExample'
            }
        };
        const response = await fetch(url, optionsObject);
        if (!response.ok) {
            throw new Error(response.status, response.statusText);
        }
        const data = await response.json();
        return data;
    } catch (err) {
        throw err;
    }
}

// HTTPRequestExampleGET().then((resolveValue) => {
//     console.log(resolveValue);
// }).catch((error) => {
//     console.log("HTTP Request rejected, reason => ", error);
// });


//2. Enviando Datos
async function HTTPRequestExamplePOST() {
    try {
        const url = "https://jsonplaceholder.typicode.com/todos/";
        const optionsObject = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer token'
            },
            body: JSON.stringify({
                key: 'valueExample'
            }),
        };
        const response = await fetch(url, optionsObject);
        if (!response.ok) {
            throw new Error(response.status, response.statusText);
        }
        const data = await response.json();
        return data;
    } catch (err) {
        throw err;
    }
}

HTTPRequestExamplePOST().then((resolveValue) => {
    console.log(resolveValue);
}).catch((error) => {
    console.log("HTTP Request rejected, reason => ", error);
});


