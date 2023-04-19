// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name){
   cats.push(name);
}
function destructivelyPrependCat(name){
    cats.unshift(name);
}
function destructivelyRemoveLastCat(Garfield){
    cats.pop(Garfield);
}
function destructivelyRemoveFirstCat(Milo){
    cats.shift(Milo);
}
function appendCat(Broom) {
    return  [...cats, Broom];
}
function prependCat(Arnold){
    return  [Arnold, ...cats];
}
function removeLastCat(name) {
      return cats.slice(0, -1);
}
function removeFirstCat(name) {
     return cats.slice(1);
}