//today's forcast is 293 kelvin, this can be changed to convert any temperature from kelvin to either celsius of fathrenheit.
const kelvin=293;

//celsius = kelvin -273
const celsius = kelvin - 273

//using template literals and the equation given
let fahrenheit= celsius * (9/5) + 32

//No need for let, this is to round down
fahrenheit= Math.floor(fahrenheit)

// temperature in Kelvin
console.log(`The temperature is ${kelvin} degrees Kelvin`)

// temperature in Kelvin
console.log(`The temperature is ${celsius} degrees Celsius`)

// temperature in Kelvin
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`)
