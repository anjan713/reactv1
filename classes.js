const car={
    power:750,
};

//when creating class we use pascal convention
//to move selected line of code use alt+downarrow
class Car{
 constructor(name){
    this.name=name;
 }
        horsepower() {
            console.log(this);
        }
}
//we use new when we need to create object of class
const carz=new Car('lamborgini')
const carv=new Car('ferrari')
console.log(carz)
console.log(carv)