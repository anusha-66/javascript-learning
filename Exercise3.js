/* Exercise:

Step 1: Declare a variable named myArr and store the values 1, 4 and 9 in it.

Step 2: Add a new value 16 at the end of the array.

Step 3: Replace the value 4 in the array with 25. */

<html>
<body>

<script type = "text/javascript">

var myArr = [1,4,9];
myArr[myArr.length] = 16;

myArr[1] = 25;

for(var i=0; i< myArr.length;i++){
document.write(myArr[i]);
document.write("</br>");
}


</script>

</body>
</html>
