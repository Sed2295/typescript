(function() {
    //cuando ponemos el = en los parametros significa que es un parametro opcional por lo tanto ts no nos lo va a exigir
    //momento? es un parametro opcional
    function activar ( quien:string,momento?:string, objeto:string = 'batiseñal' ){
        if(momento)
            console.log(`${ quien } activo la ${ objeto } en la ${ momento }.`);
        else
            console.log(`${ quien } activo la ${ objeto }.`);        
    }

    activar('Alfredo','tarde');


})(); //función autoinvocada