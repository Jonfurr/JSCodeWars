				// ******************
				// ** Instructions **
				// ******************

// In Your class You have started lessons about Arithmetic Progression.
// Because You are also a programmer, You have decided to write a
// function arithmetic_sequence_sum(a, r, n), that will print SUM of the
// first n element of the sequence with the given constant r and first element a


				// ****************
				// ** Test Cases **
				// ****************

// Test.assertEquals(ArithmeticSequenceSum(3, 2, 20), 440);
// Test.assertEquals(ArithmeticSequenceSum(2, 2, 10), 110);
// Test.assertEquals(ArithmeticSequenceSum(1, -2, 10), -80);


				// **********
				// ** Code **
				// **********

function ArithmeticSequenceSum(a, r, n) {
  var num = a;
  var newNum = 0;
  var sum = 0;
  for (i = 1; i <= n; i ++) {
    Newnum = num + r
    console.log(Newnum);
    sum = sum + num;
  }
  return num;
}

ArithmeticSequenceSum(3, 2, 20)