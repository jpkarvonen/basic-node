const greetings = require("./greeting.js");
const calculate = require("./calculate.js");

// "Hello"
greetings.greetingEnglish();

// "Konichiwa"
greetings.greetingJapanese();

// "Hola"
greetings.greetingSpanish();

// "Halló"
greetings.greetingIcelandic();

// "3"
calculate.add(1, 2);

// "9"
calculate.multiply(3, 3);

// "2"
calculate.subtract(5, 3);

// "5"
calculate.divide(10, 2);
