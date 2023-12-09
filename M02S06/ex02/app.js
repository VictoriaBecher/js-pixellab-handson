// console.log(process.argv)
// sintactic sugar
// const [a, b, ...parameters] = process.argv;

// normal
// const a = process.argv[0]
// const b = process.argv[1]
// const params = process.argv.slice(2)

// const width = parameters[0];
// const height = parameters[1];
// const [width, height] = parameters
// console.log(width * height);

const arguments = process.argv;
const [, , ...restOfArguments] = arguments;
const side = restOfArguments[0];

console.log(`Suprafata patratului este de ${side ** 2}`);
