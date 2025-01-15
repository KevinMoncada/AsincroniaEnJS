//Crear una promesa simulando una operación asincrona y darle manejo

const myFirstPromise = new Promise((resolve, reject) => {
    //
    //
    // Simulación de código Async
    //
    //
    let hypotheticalResultAsyncCode = 20;
    let desiredResult = 20;

    if (hypotheticalResultAsyncCode === desiredResult) {
        resolve(hypotheticalResultAsyncCode);
    } else {
        reject(`El código asincrono no genero el resultado adecuado`);
    }
});
console.log(myFirstPromise);


myFirstPromise
    .then((value) => {
        console.log(`La promesa se resolvio con exito (Valor de resolución: ${value})`);
    }).catch((error) => {
        console.log(`Promesa rechazada, motivo: ${error}`);
    }).finally(() => {
        console.log(`Fin de la promesa`);
    });

