
let entrada = prompt('Ingresa tu nombre ')
const nombres = []

while (entrada != 'Voldemort') {
    nombres.push(entrada)
    entrada = prompt('Ingresa tu nombre')
}
 
for (let index = 0; index < nombres.length; index++) {
    //const element = array[index];
    alert(' Posición ' + index + ' nombres ' + nombres[index])
 }