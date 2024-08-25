// Crear un ejemplo de Encadenamiento con 3 Promesas (Donde cada tarea asíncrona depende del resultado de la anterior), ademas las promesas ahora deben crearse dentro de funciones, para poder ejecutarlas cuando se quiera y evitar que lo hagan automaticamente. (USANDO Async y Await)

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

function thirdPromise(result1, result2) {
    return new Promise((resolve, reject) => {
        //Simulación código Asíncrono
        const hypotheticalResultAsyncCode = ((result1 + result2) - 1);
        const desiredResultToResolvePromise = 345;

        (hypotheticalResultAsyncCode === desiredResultToResolvePromise)
            ? resolve(hypotheticalResultAsyncCode)
            : reject('error en código asíncrono (Promesa3)');
    })
}

async function secondPoint() {
    try {
        const resolveValue1 = await firstPromise();
        console.log(resolveValue1);
        const resolveValue2 = await secondPromise(resolveValue1);
        console.log(resolveValue2);
        const resolveValue3 = await thirdPromise(resolveValue1, resolveValue2);
        console.log(resolveValue3);

    } catch (error) {
        console.log(`Promesa rechazada, motivo: ${error}`);
    }
}


secondPoint();