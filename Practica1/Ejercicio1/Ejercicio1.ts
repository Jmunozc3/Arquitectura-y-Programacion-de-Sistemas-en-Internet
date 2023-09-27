
const launcher=(b:Array<number>)=>{

     return quickSort(b,0,b.length-1)
    
    }
   
    
const quickSort=(a:Array<number>, izq:number, der: number): Array<number>=>{
    
    let pivot, i, d, aux:number

    if(izq<der){
        i=izq
        d=der
        pivot = a[Math.floor((izq + der) / 2)];
       
        while(i<=d){
      
            while(a[i]<pivot){
                i++;
            }
            while(a[d]>pivot){
                d--;
            }
            if(i<=d){
                aux=a[i]
                a[i]=a[d]
                a[d]=aux
                d--; i++;  
            }           
        }
            quickSort(a,i,der)
            quickSort(a,izq,d)
    }
        
    return a
}
    
    let ordenarrr:Array<number>=[4,23,6,9,13,4,15]
    console.log(launcher(ordenarrr));
    