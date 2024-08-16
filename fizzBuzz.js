function fizzBuzz(num1, num2) {
  const firstNumber = Math.min(num1, num2);
  const lastNumber = Math.max(num1, num2);
  const arrOfNumbers = [];

  for (let i = firstNumber; i <= lastNumber; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arrOfNumbers.push("fizzbuzz");
    } else if (i % 3 === 0) {
      arrOfNumbers.push("fizz");
    } else if (i % 5 === 0) {
      arrOfNumbers.push("buzz");
    } else {
      arrOfNumbers.push(i);
    }
  }

  return arrOfNumbers;
}

module.exports = fizzBuzz;
