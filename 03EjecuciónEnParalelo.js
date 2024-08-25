let promesa1 = new Promise((resolve, reject) => {
    resolve(12);
})

let promesa2 = new Promise((resolve, reject) => {
    resolve(15);
})

//Ejecución en paralelo
let promesaResultante = Promise.all([promesa1, promesa2]);
promesaResultante.then((values) => {
    console.log(values);
}).catch((error) => {
    console.log(error);
})

