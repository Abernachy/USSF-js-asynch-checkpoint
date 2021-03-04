//
/*
Guided API project
1) create a command line application that processes a file list of names and then logs each type based on the pokeapi.co API.

*/
var fs = require('fs')
var fetch = require('node-fetch')
var url = 'https://pokeapi.co/api/v2/pokemon/'
// fetch(`${url}${pokeNames}`)
var filepath = 'pokemon.txt'


/*
pokeTypes ( pokeNames, type) {
    
}
fetch(`${url}${pokeNames}`) 
   .then(res => res.json())
     .then(json => {
       json.forEach( function(pokeTypes()){
         console.log('created pokeTypes database')
*/



/*fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
// We'll need to  read a file with pokemon names, putting the names in an array
// iterate over the array running the fetch request below:
// https://pokeapi.co/api/v2/pokemon/{id or name}/
//fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonname}`)
// When making the request, the name must be in str.lowercase()
// pokemon.types : [ obj1 - type: object , obj 2 - type: object]
// types is an array , with [0] being an objects with 2 keys - slot and type. type has 2 keys: name and the url
//we want the name 
// fetch each name and returns the name and the type
*/


// TODO: fs stuff to read the data
var pluckPokemonfromFile = function(filepath){
  return mypromise = new Promise((resolve, reject)=>{
    fs.readFile(filepath,'utf-8', function(error,content){
      if (error){
        reject(console.log('File not found'))
      } else{
        content = content.split('\n')
        resolve(content)
      }}
    }))
}
// After breakout - So we kept running into an issue where fs was not returning our data
// So we opted to try and experiment with the promises, but we ran out of time
let pokedata = fs.readFile('pokemon.txt', 'utf8', function(error, data){
  if (error){
  console.log('File Not found')
  } else {
    console.log(data)
    return data;
  }
  //console.log(pokedata)
});

/*var pluckFirstLineFromFileAsync = function(filePath) {
  return mypromise = new Promise((resolve,reject) => {
    // stuff we want to happen
    fs.readFile(filePath, 'utf-8',function(error,content){
    if (error){
      // rejection
      reject(error)
    } else {
      //resolve
      content = content.split('\n')
      resolve(content[0])
    }
  });
})}

// TODO convert the data to an array
/*
const pokeNames = pokedata.split('\n');
console.log(pokeNames)
*/
// TODO: fetch request using the array data

// TODO: considerations for status code 400 -'no shit there captain" vs 200 - 'I found it dawg'

//final expected result = ArrayData: [{Name: Venusaur:, Types: Grass}, {Name: Charizard,Types: Fire, Not Dragon},{Name: Mr. Mime, Types: Eats your soul}]


/*
Gordon's example for quick reference:
fetch(url)
  .then(res => res.json())
  .then(json => {
    json.forEach( function(post){
      console.log('patched post')
      const newURL = `https://jsonplaceholder.typicode.com/posts/${post.id}`
        fetch(newURL, {
          method: 'PATCH',
          body:    JSON.stringify({
            title: 'Archived',
          }),
          headers: { 'Content-Type': 'application/json' },
          })
            .then(res => res.json())
            .then(json => console.log(json));
    })
})
*/