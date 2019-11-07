window.cipher = {
  // Aqui esta escrito mi còdigo
 encode: (offset,string) =>{
            const mensajeMayus= string.toUpperCase();
            let y= "";
            for(let i=0; i<mensajeMayus.length; i++){
              let x= mensajeMayus.charCodeAt(i);
              if(x>=65 && x<=90){
              let ciph= String.fromCharCode ((x-65+offset)%26+65);
              y= y+ciph;
              }else{
                y= y + String.fromCharCode(x);
              //ciph= " ";
              }    
             }
            return y;
            },
 decode: (offset,string)=>{
          const mensajeMayus= string.toUpperCase();
           let y= "";
           for(let i=0; i<mensajeMayus.length; i++){
           let x= mensajeMayus.charCodeAt(i);
           if(x>=65 && x<=90){
           let deciph= String.fromCharCode ((x+65-offset)%26+65);
           y= y+deciph;
           }else{
             y= y + String.fromCharCode(x);
              //deciph= " ";
           }
             }
            return y;
            }
};

//console.log(cipher.encode(3,"ABC"));


