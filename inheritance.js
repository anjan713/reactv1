//we are using super to call constructor of the car
//we are using curly braces in import bcoz the class is not default
//Default->import .. from '';
//named -> import{...} from '';
//import Car,{ manny } from "./car"  ;
import { Car } from "./car"  ;
class Bike extends Car{
    constructor(name,stroke){
        super(name);
        this.stroke=stroke;
     } 
    length(){
        console.log('short');
    }
}   
const bike=new Bike('ducatti',4)
console.log(bike.length)