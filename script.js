function Imc_calcula() {
    
    
    let classifi = ''
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
  
   
 
    var resultado = document.getElementById("resultado");
    var imc = (peso / (altura * altura)).toFixed(2);
    
    if ( peso === '' || altura === '' ) {
        return resultado.innerHTML = `Preencha os campos`
     }

    if (imc < 18.5) {
          classifi = "Abaixo do peso"
    } else  if (imc < 25) {
        classifi = "Peso Ideal"
    } else  if (imc < 30) {
        classifi = "Acima do peso"
    } else  if (imc < 35) {
        classifi = "Obesidade Grau I"
    } else  if (imc < 41) {
        classifi = "Obesidade Grau II"
    } else  {
        classifi = "Obesidade Grau III"
    }
   
    resultado.innerHTML = `IMC: ${imc} (${classifi})` 
    return; 
}