const calcularHash=(dificultad)=>{
    let hash = "";
    for(let i=0;i<dificultad;i++){
        let n=Math.floor(Math.random() * 10);
        hash += n.toString();
    }
    console.log("hash",hash);
    return hash;
}


const simulacion=(dificultad)=>{
    console.log(`Dificultad=${dificultad}---------------------------------`);
    let hash = calcularHash(dificultad);
    let timeInicio = Date.now();
    console.log("buscando un valor para el hash");
    let valor;
    do{
        valor = "";
        for(let i=0;i<dificultad;i++){
            let n = Math.floor(Math.random() * 10);
            valor += n.toString();          
        }
        console.log(`valor prueba fallido=${valor}`);
    }while(hash != valor);

    let timeFin = Date.now();
    console.log(`valor encontrado=${valor}  hash=${hash}  y tiempo=${timeFin-timeInicio} ms`);
    return valor;
}
simulacion(1);



