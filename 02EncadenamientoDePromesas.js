// Crear un ejemplo de Encadenamiento con 2 Promesas (Donde cada tarea asíncrona depende del resultado de la anterior), ademas las promesas ahora deben crearse dentro de funciones, para poder ejecutarlas cuando se quiera y evitar que lo hagan automaticamente.

function firstPromise() {
    return new Promise((resolve, reject) => {
        //Simulación Async-Code
        let hypotheticalResultAsyncCode = 100;
        let desiredResultToResolvePromise = 100;

        (hypotheticalResultAsyncCode === desiredResultToResolvePromise)
            ? (resolve(hypotheticalResultAsyncCode))
            : (reject('Error en código Async Promesa1'))
    });
};

function secondPromise(firstPromiseResolveValue) {
    return new Promise((resolve, reject) => {
        let hypotheticalResultAsyncCode = firstPromiseResolveValue + 150;
        let desiredResultToResolvePromise = 250;

        (hypotheticalResultAsyncCode === desiredResultToResolvePromise)
            ? (resolve(hypotheticalResultAsyncCode))
            : (reject('Error en código Async Promesa2'))
    });
}


firstPromise().then((resolveValue1) => {
    console.log(`Promesa1 resuelta con exito, ResolveValue: ${resolveValue1}`);
    return secondPromise(resolveValue1);
}).then((resolveValue2) => {
    console.log(`Promesa2 resuelta con exito, ResolveValue: ${resolveValue2}`);
}).catch((err) => {
    console.log(`Promeza rechazada, Motivo: ${err}`);
}).finally(() => {
    console.log(`Fin ejercicio encadenamiento y promesas`);
})