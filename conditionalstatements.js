//Collect a number from the user. Check whether the number is odd or even. Display proper message in the format "number is odd." 
//or "number is even.". number should be replaced by the number entered by the user. If the user does not enter a number, 
//display a message "You did not enter a number." 
//(Hint: When you divide an even number by 2, the remainder will be 0 and when you divide an odd number by 2, the remainder will be 1).


var number = prompt("Enter a number");


  if(number%2 === 0)
  alert ("even");
  if(number%2 === 1)
  alert ("odd");
  else 
  alert ("You did not enter a number");
