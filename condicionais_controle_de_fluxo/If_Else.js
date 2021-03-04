// if ... else

/*let temperature = 37


if(temperature >= 37.5){
    console.log('febre alta')
} else if (temperature < 37.5 && temperature >= 37){
    console.log('febre moderada')
} else{
    console.log('saudavel')
}

*/

// Assim é o recomendado

let temperature = 37
let highTemperature = temperature >= 38
let mediumTemperature = temperature < 37.5 && temperature >= 37

if(highTemperature) {
    console.log('Febre Alta')
} else if(mediumTemperature) {
    console.log('Febre moderada')
} else{
    console.log('Saudavel')
}