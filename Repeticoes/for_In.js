// estrutura de repetição

// For...in

let person = {
    name: 'john',
    age: 20,
    weight: 88.6

}

for(let property in person){
    console.log(property)
    console.log(person[property])
}