// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'hola';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 1990;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código
  return str
}
devolverString('any')

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  var suma =x+y
  return suma
}
suma(2,9)

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  var resta=x-y
  return resta
  }
  resta(11,10)

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  var multi=x*y
  return multi
  
}
multiplica(8,8)

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  var divi = x/y
  return divi
  
}
divide(64,8)

function sonIguales(x, y) {
    if (x==y) {
  return true;
  }												
    return false
  }
  
  sonIguales(10,1)


  function tienenMismaLongitud(str1, str2) {
  
    if (str1.length == str2.length) {
    return true 
    } return false
    
  }
      tienenMismaLongitud('aguacero','diezmado')

function menosQueNoventa(num) {
  if(num<90)  {
    return true
  
  } return false  
}
menosQueNoventa(93)

function mayorQueCincuenta(num) {
  if (num>50) {
    return true 
  } return false
}
mayorQueCincuenta (51)

function obtenerResto(x, y) {
  var divi = x%y
  return divi
  
}
obtenerResto(82,9)

function esPar(num) {
  if (num%2==0){
 return true }
   return false
 }
 esPar(21)

function esImpar(num) {
  if (num%2!==0){
    return true
  }
  return false
}
esImpar(65)

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  var potencia=num**2
  return potencia
  elevarAlCuadrado(4) 
}

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  var potencia=num**3
  return potencia
  
}
elevarAlCubo(5)

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  var potencia= num**exponent
  return potencia
  
}
elevar(3,3)

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  var redondea= Math.round(num)
  return redondea
}
redondearNumero(9.46)

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  var redondea = Math.ceil(num)
  return redondea 
}
redondearHaciaArriba(9.44)

function numeroRandom() {
  var aleatorio =Math.random()
  return aleatorio 
}
numeroRandom()

function esPositivo(numero) {
  if (numero > 0 ) {
 return ('Es positivo')
 }
   else if (numero === 0){return (false)
 }
 else { return ('Es negativo')}
 
 }
 
 esPositivo(-6)
  


function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
var holamundo= str + '!'
return holamundo
}
agregarSimboloExclamacion('hello world')

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  var completo = nombre + ' ' + apellido
  return completo
  
}
combinarNombres('hello','world')

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  var completo = 'Hola '+ nombre +'!'
  return completo
  
}
obtenerSaludo('Martin')

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  var area = alto*ancho
  return area
}
obtenerAreaRectangulo(4,8)

function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  var perimetro = lado*4
  return perimetro
}
retornarPerimetro(5)

function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí:
  var area= (base*altura)/2
  return area

}
areaDelTriangulo(8,8)

function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  var convierte = euro*1.2
  return convierte
  
}
deEuroAdolar(5)

function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  if (letra=== 'a'){
    return ('Es vocal')
  }
  else if (letra=== 'e'){
    return ('Es vocal')
  }
  else if (letra=== 'i'){
    return ('Es vocal')
  }
  else if (letra=== 'o'){
    return ('Es vocal')
  }
  else if (letra=== 'u'){
    return ('Es vocal')
  }
  return ('Dato incorrecto')
}
esVocal('r ')


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
