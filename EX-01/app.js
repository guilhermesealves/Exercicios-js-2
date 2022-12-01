function Soma(){
  let dn = document.getElementById('diaOuNoite').value

  if(dn.toLowerCase() == "d"){
    document.getElementById("Resultado").innerHTML = "Dia"

  }
  else if(dn.toLowerCase() == "n"){
    document.getElementById("Resultado").innerHTML = "Noite"

  }else {

    document.getElementById("Resultado").innerHTML = "Periodo Inválido"

  }
  
    
}
