//codigo cuadrado
console.group("Cuadrado");

function perimetroCuadrado(lado)
{
return lado *4;

}
 perimetroCuadrado();
 
function areaCuadrado(lado){
    return lado *lado;
}

areaCuadrado();
console.groupEnd();


// Triangulo

console.group("Triangulo");

 function perimetroTriangulo(ladoUno,ladoDos,baseTriangulo){
    return ladoUno + ladoDos + baseTriangulo;
 } 

perimetroTriangulo();

function areaTriangulo(baseTriangulo,alturaTriangulo){
    return(baseTriangulo*alturaTriangulo) /2 ;
}


console.groupEnd();



 //Codigo circulos

console.group("Circulo");
function  diametroCirculo(radio){
   return radio*2;
};

diametroCirculo();
const PI= Math.PI;

function perimetroCirculo(radio){
    const diametro=diametroCirculo(radio);
    return diametro*PI;
} 

perimetroCirculo();

function areaCirculo(radio){
return (radio *radio)* PI ;
}

console.groupEnd();

//Aqui interactuamos con HTML
function calcularPerimetroCuadrado()
{
const input=document.getElementById("inputCuadrado");
const value=input.value;

const perimetro=perimetroCuadrado(value);
alert(perimetro)
};

function calcularAreaCuadrado()
{
    const input=document.getElementById("inputCuadrado");
    const value= input.value;


const area=areaCuadrado(value);
alert(area)

};