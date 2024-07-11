// tuples are not present in javascript it is only present in typescript.
// its an specialized array with some restriction on to it.
// not just what type of element in the tuples matters orders of those types also matters  
var Users = [5, "hello", true]; // tuple
var rgb = [255, 123, 221];
var newUser = [23, "a@gmail.com"];
// we can change value also in tuple
newUser[1] = "abc@gmail.com";
// array methods are also working with tuples but they messes the purpose of tuple.
newUser.push(5);
// as we have restricted(guaranteed) that the array of two lenght but still how we can be able to push third element thats the question.
// all array mehtods are working like push, pop, shift, unshift
