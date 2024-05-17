//ESTATICO

//1. ¿Que es un metodo estatico?

//Es un tipo especial de metodo que esta asociado directamente con la clase en lugar de con instancias individuales de la clase. Esto significa que un metodo estatico se puede llamar directamente desde la clase misma, sin necesidad de crear un objeto o instancia de la clase.

//CARACTERISTICAS

//No requieren una instancia: A diferencia de los metodos de instancia que operan en objetos creados a partir de la clase, los metodos estaticos no necesitan una instancia para ser invocados.

//No tienen acceso a las propiedades de instancia: Al no estar asociados con una instancia particular, los metodos estaticos no pueden acceder a las propiedades de instancia de la clase.

//No pueden utulizar "this": Debido a que los metodos estaticos no estan vinculados a una instancia, no pueden utilizar la referencia "this" dentro de su implementacion.

//Pueden acceder a metodos estaticos y propiedades estaticas: Los metodos estaticos pueden acceder a otros metodos estaticos y propiedades estaticas de la clase.

//Para definir un metodo estatico en una clase, se utiliza la palabra clave static antes del nombre del metodo

//EJEMPLO:

class MathUtils {
    static sumar(a,b) {
        return a+b;
    }
    static restar (a,b) {
        return a -b;
    }
}

//llamando a los metodos estaticos directamente desde la clase

console.log(MathUtils.sumar(5,3)); //output:8
console.log(MathUtils.restar(10,4)); //Output:6

//Como se puede apreceiar sumar() u restar () son metodos estaticos de la calse MathUtils, por lo que podemos invocarlos directamente desde la clase sin necesidad de crear una instancia de MthUtils. Estos metodos no necesitan acceder a ninguna propuedad de instancia o estado interno, ya que sus resultados solo dependen de los argumentos que se les pasan.