function Soma(){
    
    let valor = document.getElementById('input').value

    if(valor >= 1){
        document.getElementById('resposta').innerHTML = "Valor é positivo"
    }

    else if(valor < 0){
        document.getElementById('resposta').innerHTML = "Valor é negativo"

    }  


    
    

}