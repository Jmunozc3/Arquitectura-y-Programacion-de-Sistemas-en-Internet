
export const orde=(a:Array<String>): String =>{

    a.sort()

    const pal:String = a[0]

    let npalabra:String=""

    for(let i=0;i < pal.length ;i++){
       

        if(i !== pal.length-1){
            npalabra = npalabra+ pal[i];
            npalabra = npalabra+" ";
        }
        if(i === pal.length-1){
            npalabra = npalabra+ pal[i];
            
        }
    }
    return npalabra

    
}


const ordenarr:Array<String>=["hola","adios","quease"]

console.log(orde(ordenarr));
