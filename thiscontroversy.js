const car={
 power:750,
 horsepower() {
     console.log(this);
 }
};
//console.log(car)
//car.horsepower();
//the 7 & 8 gives us the same output so it means this refers to the current object

//const cars=car.horsepower
//cars(); by 11 & 12 this refers to window object so to remove confusion we use bind to make this refer to current object

const horsepower = car.horsepower.bind(car)
horsepower()
//whatever we pass argument in bind will determine the value of this
//since we are using it creates new function