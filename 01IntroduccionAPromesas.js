const promiseExample = new Promise((resolve, reject) => {
    //
    //Simulación código Asíncrono
    //
    const hypotheticalResultAsyncCode = 23;
    const resultNeeded = 23;
    (hypotheticalResultAsyncCode === resultNeeded)
        ? resolve(hypotheticalResultAsyncCode)
        : reject('Error en código asíncrono');
});
console.log(promiseExample);

promiseExample.then((resolveValue) => {
    console.log(`Valor de resolución de la promesa: ${resolveValue}`);
}).catch((err) => {
    console.error(`Promesa rechazada, motivo: ${err}`);
}).finally(() => {
    console.log(`Promesa culminada`);
})