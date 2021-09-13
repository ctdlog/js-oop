console.log("Math.PI", Math.PI);
console.log("Math.random()", Math.random()); // method
console.log("Math.floor(3.9)", Math.floor(3.9));

let myMath = {
  PI: Math.PI,
  random: function () {
    return Math.random();
  },
  floor: function (val) {
    return Math.floor(val);
  },
};

console.log("MyMath.PI", myMath.PI);
console.log("MyMath.PI", myMath.random());
console.log("MyMath.PI", myMath.floor(3.9));

let MyMath_PI = Math.PI;
function MyMath_random() {
  return Math.random();
}
function MyMath_floor(val) {
  return Math.floor(val);
}
