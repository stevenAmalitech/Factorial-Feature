const Calculate = {
  factorial(number) {
    if (number === 0) return 1;

    for (let i = number - 1; i >= 1; i--) {
      number = number * i;
    }

    return number;
  },
};

module.exports = Calculate;
