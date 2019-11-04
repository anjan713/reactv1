const first=[1,2,3]
const second=[4,5,6]
//old way of concat things
const combined =first.concat(second);
//new way use spread bcoz we can add elements between
const combi=[...first,'8',...second,'9'];
//spread can also be applied to operator
const dcar1={ car:'Chiron' };
const dcar2={ car:'regera' };
const dreamcarlist={...dcar1,...dcar2, car:'veneno'};
console.log(dreamcarlist);
//spread to clone an object or array
const clone={...dcar1};
console.log(clone)