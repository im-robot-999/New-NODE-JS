const readline = require('readline');

const calc = {
  add: (a, b) => a + b,
  sub: (a, b) => a - b,
  mul: (a, b) => a * b,
  div: (a, b) => a / b
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter first number: ', (a) => {
  rl.question('Enter second number: ', (b) => {
    rl.question('Choose operation (+, -, *, /): ', (op) => {
      a = parseFloat(a);
      b = parseFloat(b);
      let result;
      switch(op) {
        case '1': result = calc.add(a, b); break;
        case '2': result = calc.sub(a, b); break;
        case '3': result = calc.mul(a, b); break;
        case '4': result = calc.div(a, b); break;
        default: result = 'Invalid operation';
      }
      console.log(`// Result: ${result}`);
      rl.close();
    });
  });
});
