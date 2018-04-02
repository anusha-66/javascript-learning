/* Step 1: Create a function named wishUser that displays a message "Welcome to Our Website!!!"
    on the webpage. Call the function
   Step 2: Create a function named personalWish that accepts the name of the user as an argument 
    and displays a message "Hi name" where name should be replaced by the argument value. Call the function.
   Step 3: Create a function named findSqr that accepts a number as the argument, 
    calculates the square of that number and return it. Call the function and display the output.
   Step 4: Create a function named countCharacters that accepts two parameters, 
    a character and a string. It should return the number of times the character is present in the string. */
    
    
    <html>
<body>

<script type = "text/javascript">

//Step1: 

function wishUser(){
alert("Welcome to Our Website!!!");
};

wishUser();

//Step2:
function personalWish(name){
alert("Hi" +name);
};

var name = prompt("name");
personalWish(name);

//Step3:

function finSqr(num){
sqr = num * num;
alert("the square of the number is :" + sqr);
};

var n = prompt ("enter num");
finSqr(n);

//Step4:
var character = prompt("enter character");
var Stringused = prompt("enter string");
function countCharacters(character,String ){
  var count =0;
  for(var i=0;i<String.length;i++){
  if(character === String[i]){
  count = count+1;
  }
 
  }
  return(count);
};


var number = countCharacters(character, Stringused);
document.write(number);
</script>

</body>
</html>
