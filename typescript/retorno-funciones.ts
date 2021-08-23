( () => {
    //Función que recibo dos parametros tipo number y retorna un tipo number 
    const sumar = (a:number,b:number): number => {
        return a + b ;
    }
    //Forma 2 de hacer la funcion ya que es de una sola línea
    //const sumar = (a:number,b:number):number => a+b;
    
    const nombre = ():string => 'Hola Alfredo';
    //Función que retorna una promesa de tipo string 
    const obtenerSalario = ():Promise<string> => {
        return new Promise((resolve,reject) => {
            resolve('hola')
        });
    }

    obtenerSalario().then(a => console.log(a.toUpperCase()))

})(); //función autoinvocada