( () => {
    const avenger = {
        nombre:'steve',
        clave:'Capitan America',
        poder: 'Droga'
    }
    //Arreglo que va a aceptar puros string
    const avengers:string[] = ['Thor','IronMan','Spiderman'];
    //destructuramos el objeto avenger desde los argumentos y ponemos any para que typescript no nos de problemas
    const extraer = ({nombre,poder}:any) => {
        console.log(`${nombre} ${poder}`)
    }
    const extraerArr = ([thor,ironman,spider]:string[]) => {
        console.log(`${thor} ${spider}`)
    }
    //extraer(avenger);
    extraerArr(avengers);
})(); //función autoinvocada