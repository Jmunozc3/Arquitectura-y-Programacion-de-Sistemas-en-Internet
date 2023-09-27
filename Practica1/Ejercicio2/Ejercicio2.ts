
export const mult=(a:number):Array<number>=>{

    const miarray:Array<number>=[]

    for(let i=0;i<a;i++){

        if(i%3===0 || i%5===0){
           
            miarray.push(i);
        }
    }
    return miarray
}

console.log(mult(27));