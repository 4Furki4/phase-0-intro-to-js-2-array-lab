// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name)
}
function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(name){
    let copyOfCats = cats.slice(0);
    copyOfCats.push(name);
    return copyOfCats
}
function prependCat(name){
    let copyOfCats = cats.slice(0);
    copyOfCats.unshift(name)
    return copyOfCats
}
function removeLastCat(){
    let copyOfCats = cats.slice(0)
    copyOfCats.pop()
    return copyOfCats;
}
function removeFirstCat(){
    let copyOfCats = cats.slice(0)
    copyOfCats.shift()
    return copyOfCats
}