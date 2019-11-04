const job=[
    {id:1, isActive:true},
    {id:2, isActive:true},
    {id:3, isActive:false} ]
const filz=job.filter(yo=>yo.isActive) //uses of arrow function
console.log(filz)
//sometimes we can use array functions for callback functions