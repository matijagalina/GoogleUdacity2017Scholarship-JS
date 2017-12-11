/*
 * Programming Quiz: Factorials (4-7)
 */

// calculate the factorial of 12

function factorialize(num) {
  for (fact = 1; num >=1; num--) {
    fact *= num;
  }
  return fact;
}

factorialize(12);
