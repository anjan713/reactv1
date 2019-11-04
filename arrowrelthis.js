//here this gives us window object because timeout is a standalone function and not part of object so we get window 
const person={
    talk(){
        setTimeout(function(){
        console.log(this);
        },1000);
    }
}
//person.talk()
//old way way to retify is delcare this as var
const persons={
    talk(){
        var self=this
        setTimeout(function(){
        console.log('self',self);
        },1000);
    }
}
//persons.talk()
//new way is to use arrow function this inherits the talk instead of window 
const person2={
    talk(){
        setTimeout(()=>{console.log(this);},1000);
    }
} 
person2.talk()