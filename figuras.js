//Codigo cuadrado
console.group("Cuadrado");

//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado mide: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
 return lado * 4;
}

// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");


function areaCuadrado(lado) {
    return lado * lado;
   }
   
//console.log("El area del cuadrado es: " + areaCuadrado + "cm");

console.groupEnd();

console.group("Triangulo");

function perimetroTriangulo (lado1,lado2,base) {
    return lado1 + lado2 + base;
}

function areaTriangulo (base,altura) {
    return (base * altura)/2;
}
console.groupEnd();

//Codigo Circulo


console.group("Circulo");

function diametroCirculo(radio) {
    return radio * 2;
}

const PI = Math.PI;
console.log("PI es: " + PI);

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio) {
    return (radio * radio) * PI;
};


console.groupEnd();

//Aqui conectamos con el html

function calcularPerimetroCuadrado() {
const input = document.getElementById("InputCuadrado");
const value = input.value;

const perimetro = perimetroCuadrado(value);
alert(perimetro);
}


function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert(area);
    }


//Codigo Triangulo Isosceles

function alturaTriangulo(lado1,base) {

    return Math.sqrt((lado1 * lado1)-(base * base)/4)
}





function calcularAlturaTriangulo() {
    const lado1 = document.getElementById("lado1-2");
    const lado3 = document.getElementById("lado3");

    const value1 = lado1.value;
    const value3 = lado3.value;

    const altura = alturaTriangulo(value1,value3);
    alert(altura);



}