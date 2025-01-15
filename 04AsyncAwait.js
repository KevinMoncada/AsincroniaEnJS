// Crear un ejemplo de Encadenamiento con 3 Promesas (Donde cada tarea asíncrona depende del resultado de la anterior), ademas las promesas ahora deben crearse dentro de funciones, para poder ejecutarlas cuando se quiera y evitar que lo hagan automaticamente. (Usar Async y Await para el manejo de las promesas)


function firstPromise() {
    return new Promise((resolve, reject) => {
        //Simulación código Asíncrono
        const hypotheticalResultAsyncCode = 100;
        const desiredResultToResolvePromise = 100;

        (hypotheticalResultAsyncCode === desiredResultToResolvePromise)
            ? resolve(hypotheticalResultAsyncCode)
            : reject('error en código asíncrono (Promesa1)');
    });
}

function secondPromise(firstPromiseResolveValue) {
    return new Promise((resolve, reject) => {
        //Simulación código Asíncrono
        const hypotheticalResultAsyncCode = (200 + firstPromiseResolveValue);
        const desiredResultToResolvePromise = 300;

        (hypotheticalResultAsyncCode === desiredResultToResolvePromise)
            ? resolve(hypotheticalResultAsyncCode)
            : reject('error en código asíncrono (Promesa2)');
    });
}

function thirdPromise(firstPromiseResolveValue, secondPromiseResolveValue) {
    return new Promise((resolve, reject) => {
        //Simulación código Asíncrono
        const hypotheticalResultAsyncCode = (200 + firstPromiseResolveValue - secondPromiseResolveValue);
        const desiredResultToResolvePromise = 0;

        (hypotheticalResultAsyncCode === desiredResultToResolvePromise)
            ? resolve(hypotheticalResultAsyncCode)
            : reject('error en código asíncrono (Promesa3)');
    });
}

async function treatmentOfPromises() {
    try {
        const firstPromiseExecution = await firstPromise();
        console.log(`Promesa1 resuelta con exito, ResolveValue: ${firstPromiseExecution}`);

        const secondPromiseExecution = await secondPromise(firstPromiseExecution);
        console.log(`Promesa2 resuelta con exito, ResolveValue: ${secondPromiseExecution}`);

        const thirdPromiseExecution = await thirdPromise(firstPromiseExecution, secondPromiseExecution);
        console.log(`Promesa3 resuelta con exito, ResolveValue: ${thirdPromiseExecution}`);
    } catch (err) {
        console.log(`Promeza rechazada, Motivo: ${err}`);
    }
}

treatmentOfPromises();

