( () => {

    interface Xmen {
        nombre: string;
        edad: number;
        //el poder es opcional por eso el signo
        poder?:string
    }
    const wolverine:Xmen = {
        nombre: 'Logan',
        edad:60
    }
    
    //Forma 1 xmen es un objeto que por lo menos tenga la propiedad nombre y sea de tipo string
    /* const enviarMision = ( xmen:{ nombre:string }) => {
        console.log(`Enviando a ${xmen.nombre} a la misión`)
    } */
    //Forma 2 haciendo uso de la interfaz
    const enviarMision = ( xmen:Xmen) => {
        console.log(`Enviando a ${xmen.nombre} a la misión`)
    }
    const regresarAlCuartel = ( xmen:Xmen) => {
        console.log(`Enviando a ${xmen.nombre} a la misión`)
    }
    
    enviarMision(wolverine);
    regresarAlCuartel(wolverine);


})(); //función autoinvocada