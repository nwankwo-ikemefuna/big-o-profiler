
//static method
class Car {
  constructor(brand) {
    super(brand);
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
  static hello() {  // static methods are 
    return "Hello!!";
  }
}

const mycar = new Car("Ford");

//Call 'hello()' on the class Car (NOT on the instance 'mycar')
// console.log(Car.hello()); 
// JavaScript static methods are shared among instances of a class. 
// Thus, they are associated with the class, not any particular instance of that class.


//super
class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

const myNewCar = new Model("Ford", "Mustang");
console.log(myNewCar.show());
