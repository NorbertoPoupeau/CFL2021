let contador
for (contador=1;contador<101;contador++){
if ((contador%2==0) && (contador%3==0)){
    console.log ("el numero",contador,"es multiplo comun a 2 y 3")
    } else {
      if ((contador%2==0) || (contador%3==0))
      console.log (contador) 
    
    }
}