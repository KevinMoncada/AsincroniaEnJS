// Crear un ejemplo de Encadenamiento con 2 Promesas (Donde cada tarea asíncrona depende del resultado de la anterior), ademas las promesas ahora deben crearse dentro de funciones, para poder ejecutarlas cuando se quiera y evitar que lo hagan automaticamente.

function firstPromise() {
    return new Promise((resolve, reject) => {
        //Simulación código Asíncrono
        const hypotheticalResultAsyncCode = 123;
        const desiredResultToResolvePromise = 123;

        (hypotheticalResultAsyncCode === desiredResultToResolvePromise)
            ? resolve(hypotheticalResultAsyncCode)
            : reject('error en código asíncrono (Promesa1)');
    })
}

function secondPromise(result1) {
    return new Promise((resolve, reject) => {
        //Simulación código Asíncrono
        const hypotheticalResultAsyncCode = 100 + result1;
        const desiredResultToResolvePromise = 223;

        (hypotheticalResultAsyncCode === desiredResultToResolvePromise)
            ? resolve(hypotheticalResultAsyncCode)
            : reject('error en código asíncrono (Promesa2)');
    })
}

firstPromise().then((resolveValue1) => {
    console.log(resolveValue1);
    return secondPromise(resolveValue1);
}).then((resolveValue2) => {
    console.log(resolveValue2);
}).catch((err) => {
    console.log(`Promesa rechazada, motivo: ${err}`);
})

