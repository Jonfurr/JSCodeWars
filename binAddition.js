				// ******************
				// ** Instructions **
				// ******************

// Implement a function that successfully adds two numbers together
// and returns their solution in binary. The conversion can be done
// before, or after the addition of the two.

// The binary number returned should be a string! 


				// ****************
				// ** Test Cases **
				// ****************

// Test.describe("addBinary(1,2)", function() {
   // var results1 = addBinary(1,2);
  // Test.it("Should return something that isn't falsy", function() {
    // Test.expect(results1, "Something is wrong, no results!");
  // });
  // Test.it("Should return \"11\"", function() {
    // Test.assertEquals(results1, "11");
  // });
// });


				// **********
				// ** Code **
				// **********


function addBinary(a,b){
  var sum = a + b;
  return (sum >>> 0).toString(2);
}
