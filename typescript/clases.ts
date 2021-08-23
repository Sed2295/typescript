( () => {
    /* 
    Forma 1 de crear una clase e inicializar las propiedades
    class Avenger {
        nombre:string;
        equipo:string;
        nombreReal:string;
        //son opcionales por eso el signo y en el constructor no se inicializa
        puedePelear?:boolean;
        peleasGanadas?:number;
        //constructor funcion que se ejecuta cuando se haga la instancia de la clase o creacion del objeto
        constructor(nombre:string,equipo:string,nombreReal:string){
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;

        }
    } */
    class Avenger {
        constructor(
            public nombre:string,
            public equipo:string,
            public nombreReal?:string,
            //inicializamos opcional
            public puedePelear?:boolean,
            //inicializamos por valor por defecto
            public peleasGanadas:number = 0){
        }
    }
    const antman = new Avenger('Antman','Capi');
    console.log(antman);
})(); //función autoinvocada