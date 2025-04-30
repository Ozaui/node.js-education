const parametre = process.argv.slice(2);

const calculateArea = (halfDiameter) => Math.PI * (parametre**2)

console.log(calculateArea(Number(parametre[0])))