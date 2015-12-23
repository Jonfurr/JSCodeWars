				// ******************
				// ** Instructions **
				// ******************

// Find the difference between the sum of the squares of the first n
// natural numbers (1 <= n <= 100) and the square of their sum. For
// example, when n = 10:
// 1**2 + 2**2 + ... + 10**2 = 385
// The square of the sum of the first ten natural numbers is,
// (1 + 2 + ... + 10)**2 = 55**2 = 3025
// Hence the difference between the sum of the squares of the first
// ten natural numbers and the square of the sum is 3025 - 385 = 2640.


				// ****************
				// ** Test Cases **
				// ****************

// Test.assertEquals(differenceOfSquares(5), 170)
// Test.assertEquals(differenceOfSquares(10), 2640)
// Test.assertEquals(differenceOfSquares(100), 25164150)


				// **********
				// ** Code **
				// **********
function differenceOfSquares(x){
	var sumOfSquares;
	var sum;
	var sumSquared;

  for (num = 0; num <= x; num ++) {
  	sum = sum + num;
  	sumOfSquares = sumOfSquares + (num * num);
  }

  sumSquared = sum * sum;

  return sumSquared - sumOfSquares ;
}
