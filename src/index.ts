import "./styles.css";
/*crear un método esMultiplo con 2 parámetros que 
devuelva el valor lógico verdadero o falso 
según si el primer número que se indique 
como parámetro es multiplo del segundo*/

let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let btnCalcular = document.getElementById("calcular");
let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");

rotulo1.innerHTML = "Ingrese el número a verificar:";
rotulo2.innerHTML = "Ingrese el número múltiplo:";

btnCalcular.addEventListener("click", () => {
  let numero1: number = Number(dato1.value);
  let numero2: number = Number(dato2.value);

  let esMultiplo = (num1: number, num2: number): boolean => {
    return num1 % num2 === 0;
  };

  if (esMultiplo(numero1, numero2)) {
    console.log(numero1 + " es múltiplo de " + numero2);
  } else {
    console.log(numero1 + " no es múltiplo de " + numero2);
  }
});
