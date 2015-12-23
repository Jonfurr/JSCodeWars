				// ******************
				// ** Instructions **
				// ******************

// Make a program that will take an int (x) and give
// you the summation of all numbers from 1 up to x
// included. If the given input is not an integer, 
// return "Error 404". 


				// ****************
				// ** Test Cases **
				// ****************

// Test.assertEquals(summation(10), 55);
// Test.assertEquals(summation(5), 15);
// Test.assertEquals(summation("538"), "Invalid Value");
// Test.assertEquals(summation(67.9), "Invalid Value");


				// **********
				// ** Code **
				// **********


function summation(x){
     var val = 0;
    
     if (Number.isInteger(x)) {
       while(x !== 0)
         { val += x; x -= 1; }
     } else {
       return "Invalid Value";
     }
        
    return val;
}
