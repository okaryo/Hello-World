let x: [string, number];
x = ['hello', 10];
console.log(x[0]);

enum Color { Red, Green, Blue };
let c: Color = Color.Green;

let [first, ...rest] = [1, 2, 3, 4];
console.log(first);
console.log(rest);