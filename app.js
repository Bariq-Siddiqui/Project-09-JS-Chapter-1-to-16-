//    *** *** *** Chapter # 01  (ALERTS ) *** *** *** 

//  TASK # 01
// Write a script to greet your website visitor using JS alert box.


//  SOLUTION:-

// window.alert("Welcome to My Website");

// ___________________________________//-*-\\________________________________________________

//  TASK # 02
// Write a script to display following message on your web page:


//  SOLUTION:-

// window.alert("Error! Please enter a valid password.");

// ___________________________________//-*-\\________________________________________________

//  TASK # 03
// Write a script to display following message on your web page: (Hint : Use line break)


//  SOLUTION:-

// window.alert("Welcome to JS Land... \n Happy Coding!");

// ___________________________________//-*-\\________________________________________________

//  TASK # 04
// Write a script to display following messages in sequence:`


//  SOLUTION:-

// alert("Welcome to JS Land...");
// alert("Happy Coding! \n Prevent this page from creating additional dialogs.")

// ___________________________________//-*-\\________________________________________________

//  TASK # 05
// Generate the following message through browser’s developer console:


//  SOLUTION:-

// alert("Hello... I can run JS through my web browser's console");
// console.log("Hello... I can run JS through my web browser's console");

// ___________________________________//-*-\\________________________________________________


//    *** *** *** Chapter # 02  (VARIABLES FOR STRINGS) *** *** *** 

//  TASK # 01
// Declare a variable called username.


//  SOLUTION:-

// var Username=prompt("Enter Username","Username is");
// alert(Username);

// ___________________________________//-*-\\________________________________________________

//  TASK # 02
// Declare a variable called myName & assign to it a string that represents your Full Name.


//  SOLUTION:-

// var myName=prompt("Enter myname","your Full Name");
// alert(myName);

// ___________________________________//-*-\\________________________________________________

//  TASK # 03
// Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.


//  SOLUTION:-

// var message=prompt("Message","Message is");
// alert(message);

// ___________________________________//-*-\\________________________________________________

//  TASK # 04
// Write a script to save student’s bio data in JS variables and show the data in alert boxes.


//  SOLUTION:-

// var stName="Jhone Doe";
// var age="15 years old" ;
// var course="Certified Mobile Application Development";

// alert(stName);
// alert(age);
// alert(course);

// ___________________________________//-*-\\________________________________________________

//  TASK # 05
// Write a script to display the following alert using one JS variable:


//  SOLUTION:-

// var piZza="PIZZA \n PIZZ \n PIZ \n PI \n P";
// alert(piZza);

// ___________________________________//-*-\\________________________________________________

//  TASK # 06
// Declare a variable called email and assign to it a string that
// represents your Email Address(e.g. example@example.com).
// Show the blow mentioned message in an alert box.(Hint: use
// string concatenation)


//  SOLUTION:-

// var message= "My email address is ";
// var egemail="example@example.com";
// var email= message + egemail;
// alert(email);

// ___________________________________//-*-\\________________________________________________

//  TASK # 07
//  Declare a variable called book & give it the value “A
// smarter way to learn JavaScript”. Display the following
// message in an alert box:


//  SOLUTION:-

// var book ="A smarter way to learn JavaScript";
// var a="I am trying to learn from the Book A Smarter way to learn JavaScript";
// alert(a);

// ___________________________________//-*-\\________________________________________________

//  TASK # 08
// Write a script to display this in browser through JS


//  SOLUTION:-

// var a="Yah! i can write HTML content through Javascript";
// document.write(a);

// ___________________________________//-*-\\________________________________________________

//  TASK # 09
// . Store following string in a variable and show in alert and browser through JS
// “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”


//  SOLUTION:-

// var a=("“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”");
// alert(a);

// ___________________________________//-*-\\________________________________________________


//    *** *** *** Chapter # 03  (VARIABLES FOR NUMBERS) *** *** *** 

//  TASK # 01
// Declare a variable called age & assign to it your age. Show your age in an alert box.


//  SOLUTION:-

// var age=15 ;
// alert("I am " + age + " years old");

// ___________________________________//-*-\\________________________________________________

//  TASK # 02
// Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.


//  SOLUTION:-

// var a="You have visited this site 14 times";
// alert(a);

// ___________________________________//-*-\\________________________________________________

//  TASK # 03
// Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser:


//  SOLUTION:-

// var birthYear=1990;
// var b="Data type of my declared variable is number";
// document.write("My birth year is "+birthYear +"<br>"+b);

// ___________________________________//-*-\\________________________________________________

//  TASK # 04
// A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.



//  SOLUTION:-

// var visitorName ="Jhone Doe";
// var productTitle ="T-shirt";
// var quantity ="5";
// document.write(visitorName+"  "+"ordered"+" "+quantity+" "+productTitle+"(s) on XYZ Clothing store");

// ___________________________________//-*-\\________________________________________________


//    *** *** *** Chapter # 04  (VARIABLE NAMES: LEGAL & ILLEGAL) *** *** *** 

//  TASK # 01
// Declare 3 variables in one statement.


//  SOLUTION:-

// var a="My Name";
// var b="is";
// var c="Muhammad Bariq Kamran Siddiqui"
// document.write(a+" " + b + "  " + c);

// ___________________________________//-*-\\________________________________________________

//  TASK # 02
// Declare 5 legal & 5 illegal variable names.


//  SOLUTION:-

// Legal Variable Names
// 1) var bariq
// 2) var baRiq
// 3) var bariq_kamram 
// 4) var bariq12
// 5) var $my_1stVariable

// Illegal Variable Names
// 1) var 12bariq
// 2) var &baRiq
// 3) var bariq kamram 
// 4) var @bariq
// 5) var $my-1stVariable

// ___________________________________//-*-\\________________________________________________

//  TASK # 03
// Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable
// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________


//  SOLUTION:-

// var a="Variable names can only contain numbers, $ and -.For example $my_1stVariable";
// var b="Variables must begin with a letter, $ or -. For example $name, _name or name";
// var c="Variable names are case sensitive";
// var d="Variable names should not be JS keywords.";
// document.write("<h1>Rules for naming JS variables</h1>");
// document.write(a + "<br>" + b + "<br>" + c + "<br>" + d);


// ___________________________________//-*-\\________________________________________________


//    *** *** *** Chapter # 05  (MATH EXPRESSIONS) *** *** *** 

//  TASK # 01
// Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.


//  SOLUTION:-

// var a=3;
// var b=5;
// var c=a+b;

// document.write("Sum of "  ,  + a , "  and  "  ,b + "  is   " ,c);


// ___________________________________//-*-\\________________________________________________


//  TASK # 02
// Repeat task1 for subtraction, multiplication, division & modulus.


//  SOLUTION:-

// var a=3;
// var b=5;
// var c=a+b;
// var d=a-b;
// var e=a*b;
// var f=a/b;
// var g=a%b;

// document.write("Sum of         "  ,  + a , "  and  "  ,b + "  is   " ,c + "<br>");      
// document.write(" Differnce of         "  ,  + a , "  and  "  ,b + "  is   " ,d + "<br>");
// document.write("   Product of         "  ,  + a , "  and  "  ,b + "  is   " ,e + "<br>");
// document.write("  Division of         "  ,  + a , "  and  "  ,b + "  is   " ,f + "<br>");
// document.write("   modulus of         "  ,  + a , "  and  "  ,b + "  is   " ,g );


// ___________________________________//-*-\\________________________________________________


//  TASK # 03
// Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.


//  SOLUTION:-

// var value;
// document.write("Value after variable declaration is " + value+"<br>")
// var initialize=7;
// var initialValue=5;
// document.write("Initial Value: " + initialValue+"<br>")
// var increMent= ++initialValue;
// document.write("Value after increament is: " + increMent+"<br>")
// var add=initialize+increMent;
// document.write("Value after addition is: " + add+"<br>")
// var decreMent=--add;
// document.write("Value after decrement is: " + decreMent+"<br>")
// var reMainder=decreMent%3;
// document.write("The remainder is: " + reMainder)


// ___________________________________//-*-\\________________________________________________


//  TASK # 04
// . Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:


//  SOLUTION:-

// var cost=600;
// var ticket=5;
// var total=cost*ticket;
// document.write("Total cost to buy        "  ,  + ticket , "  tickets to a movie is  "  ,total + "  PKR   "); 


// ___________________________________//-*-\\________________________________________________


//  TASK # 05
// Write a script to display multiplication table of any
// number in your browser. E.g


//  SOLUTION:-

// var tabLe=4;
// document.write("Table of  "+ tabLe + "<br>");
// document.write(tabLe + "x" + "1" + "=" +  tabLe * 1 + "<br>");
// document.write(tabLe + "x" + "2" + "=" +  tabLe * 2 + "<br>");
// document.write(tabLe + "x" + "3" + "=" +  tabLe * 3 + "<br>");
// document.write(tabLe + "x" + "4" + "=" +  tabLe * 4 + "<br>");
// document.write(tabLe + "x" + "5" + "=" +  tabLe * 5 + "<br>");
// document.write(tabLe + "x" + "6" + "=" +  tabLe * 6 + "<br>");
// document.write(tabLe + "x" + "7" + "=" +  tabLe * 7 + "<br>");
// document.write(tabLe + "x" + "8" + "=" +  tabLe * 8 + "<br>");
// document.write(tabLe + "x" + "9" + "=" +  tabLe * 9 + "<br>");
// document.write(tabLe + "x" + "10" + "=" + tabLe  * 10 );


// ___________________________________//-*-\\________________________________________________


//  TASK # 06
// The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.


//  SOLUTION:-

// var celCius = 25;
// var fahrenHeit=70;
// var c=(fahrenHeit-32)*5/9;
// var f=(celCius*9/5)+32;
// document.write(celCius+"<sup>0</sup>C is "+f+"<sup>0</sup>F"+"<br>")
// document.write(fahrenHeit+"<sup>0</sup>F is "+c+"<sup>0</sup>C")


// ___________________________________//-*-\\________________________________________________


//  TASK # 07
// Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.


//  SOLUTION:-

// var a=650;
// var b=3;
// var c=100;
// var d=7;
// var e=100;
// var f=a*b;
// var g=c*d;
// var h=e+f+g;
// document.write("<h1>Shopping Cart</h1><br><br>")
// document.write("Price of item 1 is  " + a + "<br>");
// document.write("Quantity of item 1 is  " + b + "<br>" );
// document.write("Price of item 2 is  " + c + "<br>" );
// document.write("Quantity of item 2 is  " + d + "<br>" );
// document.write("Shipping charges  " + e  + "<br><br><br>");
// document.write("Total cost of your order is  " + h);


// ___________________________________//-*-\\________________________________________________


//  TASK # 08
// Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser


//  SOLUTION:-

// var a=980;
// var b=804;
// var c=(b/a)*100;
// document.write("Total marks:  " + a + "<br>");
// document.write("Marks obtained:  " + b + "<br>" );
// document.write("Percentage  " + c + "%");


// ___________________________________//-*-\\________________________________________________


//  TASK # 09
// . Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)


//  SOLUTION:-

// var a=10;
// var b= 104.80;
// var c= 25;
// var d=28;
// var e=a*b;
// var f=c*d;
// var g=e+f;
// document.write("<h1>Currency in PKR</h1>");
// document.write("Total Currency in PKR   " + g);


// ___________________________________//-*-\\________________________________________________


//  TASK # 10
// Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression


//  SOLUTION:-

// var a=+prompt("Enter a number");
// var b=(a+5)*10/2;
// document.write("Result is  " + b);


// ___________________________________//-*-\\________________________________________________


//  TASK # 11
// The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.
// Output them to the screen like so: “They are either NN or NN
// // years old”.


//  SOLUTION:-

// var currentYear=+prompt("Enter Current Year");
// var birthYear=+prompt("Enter Birth Year");
// var age=currentYear-birthYear;
// document.write("<h1>Age Calculator</h1><br>");
// document.write("Current Year: "+currentYear +"<br>");
// document.write("Current Year: "+birthYear+"<br>");
// document.write("Your Age is: "+age);


// ___________________________________//-*-\\________________________________________________


//  TASK # 12
// The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)


//  SOLUTION:-

// var radIus=20;
// var pi=3.142;
// var circumFerence=2*pi*radIus;
// var arEa=pi*radIus*radIus;
// document.write("<h1>The Geometrizer</h1><br>");
// document.write("Radius of a circle: "+radIus +"<br>");
// document.write("The circumference is: "+circumFerence+"<br>");
// document.write("The area is: "+arEa);


// ___________________________________//-*-\\________________________________________________


//  TASK # 13
// The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.


//  SOLUTION:-

// var fSnack="chocolate chip";
// var currentAge=15;
// var maximumAge=65;
// var amountPerday=3;
// var total = (maximumAge -currentAge)*amountPerday;
// document.write("<h1>The Lifetime Supply Calculator</h1><br>");
// document.write("Favorite snack: "+fSnack +"<br>");
// document.write("Current age: "+currentAge+"<br>");
// document.write("Estimated Maximum Age: "+maximumAge+"<br>");
// document.write("Amount of snacks per day: "+amountPerday+"<br>");
// document.write("You will need "+total+" chocolate chip to last you until the ripe old age of "+maximumAge);


// ___________________________________//-*-\\________________________________________________



//    *** *** *** Chapter # 6-9  (MATH EXPRESSIONS) *** *** *** 

//  TASK # 01
// Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:


//  SOLUTION:-

// var a = 10;
// document.write(
//     "Result: <br/> The value of a is:" + a +
//     "<br/> ----------------"+

//     "<br/><br/> The value of ++ a is:"+ (++a) +
//          "<br/>  Now The value of a is:"+ a +

//     "<br/><br/> The value of a++ is:"+(a++)+
//          "<br/>  Now The value of a is:"+ a +

//     "<br/><br/> The value of  --a is:"+ (--a) +
//          "<br/>  Now The value of a is:"+ a +

//     "<br/><br/> The value of a-- is:"+(a--)+
//          "<br/>  Now The value of a is:"+ a +"</br> </br> </br>"
//         ) ;


// ___________________________________//-*-\\________________________________________________


//  TASK # 2
// What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;


//  SOLUTION:-

// var a = 2;
// document.write(" a is "+a);
// var b = 1;
// document.write("<br/> b is "+b);
// var result = --a - --b + ++b + b--;
// document.write("<br/> result is "+result);


// ___________________________________//-*-\\________________________________________________


//  TASK # 3
// Write a program that takes input a name from user & greet the user.


//  SOLUTION:-

// var userName = prompt("Enter your Name");
// alert("Welcome " +userName+" have a good day");


// ___________________________________//-*-\\________________________________________________


//  TASK # 5
// Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.


//  SOLUTION:-

// var a= +prompt("Enter a number for Table","5")
// var num = 1
// document.write(
//     a+" x "+num+" = "+ (a*num++)+"<br/>"+
//     a+" x "+num+" = "+ (a*num++)+"<br/>"+
//     a+" x "+num+" = "+ (a*num++)+"<br/>"+
//     a+" x "+num+" = "+ (a*num++)+"<br/>"+
//     a+" x "+num+" = "+ (a*num++)+"<br/>"+
//     a+" x "+num+" = "+ (a*num++)+"<br/>"+
//     a+" x "+num+" = "+ (a*num++)+"<br/>"+
//     a+" x "+num+" = "+ (a*num++)+"<br/>"+
//     a+" x "+num+" = "+ (a*num++)+"<br/>"+
//     a+" x "+num+" = "+ (a*num++)+"<br/>"
// );


// ___________________________________//-*-\\________________________________________________


//  TASK # 6
// Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

// var sUb1= prompt("Enter first subject name","English");
// var sUb2= prompt("Enter second subject name","Math");
// var sUb3= prompt("Enter third subject name","Urdu");
// var maRks=100;
// var tmaRks=300;
// var sUb1m= +prompt("Enter first subject marks","54");
// var sUb2m= +prompt("Enter second subject marks","54");
// var sUb3m= +prompt("Enter third subject marks","48");
// var totalObtmarks=sUb1m+sUb2m+sUb3m;
// var perCentage=totalObtmarks*100/300;
// document.write(
//     "<table>"+
//     "<tr><th>Subject</th><th> Total Marks</th><th> Obtained Marks</th><th> Percentage</th></tr>"+
//     "<tr><td>"+sUb1+"</td><td>"+maRks+"</td><td>"+sUb1m+"</td><td>"+sUb1m+" %</td></tr>"+
//    "<tr><td>"+sUb2+"</td><td>"+maRks+"</td><td>"+sUb2m+"</td><td>"+sUb2m+" %</td></tr>"+
//     "<tr><td>"+sUb3+"</td><td>"+maRks+"</td><td>"+sUb3m+"</td><td>"+sUb3m+" %</td></tr>"+
//    "<tr><td></td><td>"+tmaRks+"</td><td>"+totalObtmarks+"</td><td>"+perCentage+" %</td></tr>"+
//    "</table>"
// )


// ___________________________________//-*-\\________________________________________________



//    *** *** *** Chapter # 9-11  (USER INPUT & CONDITIONAL STATEMENT) *** *** *** 

//  TASK # 01
// Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”


//  SOLUTION:-

// var cityName=prompt("Enter a city name");
// if(cityName=="karachi")
// {
//     document.write("Welcome to city of lights")
// }
// else
// {
//     document.write()
// }


// ___________________________________//-*-\\________________________________________________


//  TASK # 2
// Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.


//  SOLUTION:-

// var genDer=prompt("Enter Gender");
// if(genDer=="male")
// {
//     document.write(" Good Morning Sir")
// }
// else
// {
//     document.write("Good Morning Ma’am.")
// }


// ___________________________________//-*-\\________________________________________________


//  TASK # 3
// Write a program to take input color of road traffic signal
// from the user & show the message according to this table:


//  SOLUTION:-

// var a = prompt("Enter Road Traffic Signal Color");
// if(a === "red"){
//     alert("Signal Color "+ "        Message\n" + "Red" + "         Must Stop")
// }
// else if(a ==="yellow"){
//     alert("Signal Color "+ "        Message\n" + "Yellow" + "       Ready To Move")
// }
// else if (a === "green"){
//     alert("Signal Color "+ "        Message\n" + "Green" + "        Move Now")
// }
// else{
//     alert("Sorry! it's not Signal Color")
// }



// ___________________________________//-*-\\________________________________________________


//  TASK # 4
// Write a program to take input remaining fuel in car (in
// litres) from user. If the current fuel is less than 0.25litres,
// show the message “Please refill the fuel in your car”
    

//  SOLUTION:-

// var a=+prompt("Enter  fuel in litres");
// if(a<0.25)
// {
//     document.write(" “Please refill the fuel in your car”")
// }
// else
// {
//     document.write()
// }


// ___________________________________//-*-\\________________________________________________


//  TASK # 5
// Run this script, & check whether alert message would be
// displayed or not. Record the outputs.

// Task # 05(a)


//  SOLUTION:-

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// alert message is displayed

//      Task # 05(b)


//  SOLUTION:-

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// alert message is not displayed

//      Task # 05(c)


//  SOLUTION:-

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// alert message is displayed

//      Task # 05(d)


//  SOLUTION:-

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// alert message is displayed


//      Task # 05(e)


//  SOLUTION:-

// if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }

// alert message is displayed


//      Task # 05(f)


//  SOLUTION:-

// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }

// alert message is displayed


// ___________________________________//-*-\\________________________________________________


//  TASK # 6
// Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:



//  SOLUTION:-

// var totalMarks = 300;
// var sub1 = prompt("Enter Your First Subject Marks",);
// var sub2 = prompt("Enter Your Second Subject Marks");
// var sub3 = prompt("Enter Your Third Subject Marks");
// var sub1Marks = Number(sub1);
// var sub2Marks = Number(sub2);
// var sub3Marks = Number(sub3);
// var markObtained = sub1Marks+sub2Marks+sub3Marks;
// var percentage = markObtained*100/totalMarks;

// if (percentage >= 80){
//     grade = "A-one";
//     remarks = "Excellent";
// }

// if (percentage >= 70 && percentage < 80){
//     grade = "A";
//     remarks = "Good";   
// }

// if (percentage >= 60 && percentage < 70){
//     grade = "B";
//     remarks = "You Need to improve";
// }
// if (percentage < 60){
//     grade = "Fail";
//     remarks = "Sorry";
// }

// document.write(
//     "<h1>Marks sheet</h1>"+
//     "<br/>Total Marks :"+totalMarks+
//     "<br/>Marks Obtained :"+markObtained+
//     "<br/>Percentage :"+percentage+"%"+
//     "<br/>Grade :"+grade+
//     "<br/>Remarks :"+remarks

// )


// ___________________________________//-*-\\________________________________________________


//  TASK # 7
// Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.


//  SOLUTION:-

// var number = 5
// var userInput = +prompt("Enter the number")
// if( userInput >= 1 && userInput <=10){
//     if (number==userInput){
//         alert("BINGO! Correct Answer")
//     }
    
//     else if (userInput+1==number){
//         alert("Close enough to the correct answer")
//     }
    
//     else{
//         alert("You lost!")
//     }
// }
// else{
//     alert("ranging from 1 to 10")
// }


// ___________________________________//-*-\\________________________________________________


//  TASK # 8
// Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.


//  SOLUTION:-

// var a=+prompt("Enter a number");
// var b=a%3;
// if(b==0)
// {
//     document.write("The number is divisible by 3")
// }
// else
// {
//     document.write("The number is not divisible by 3")
// }


// ___________________________________//-*-\\________________________________________________


//  TASK # 9
// Write a program that checks whether the given input is an
// even number or an odd number.



//  SOLUTION:-

// var a=+prompt("Enter a number");
// var b=a%2;
// if(b==0)
// {
//     document.write("The number is even")
// }
// else
// {
//     document.write("The number is odd")
// }


// ___________________________________//-*-\\________________________________________________


//  TASK # 10
// Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”



//  SOLUTION:-

// var T=+prompt("Enter a Temperature");

// if(T>=40)
// {
//     document.write("It is too hot outside")
// }
// else if(T>=30)
// {
//     document.write("The Weather today is Normal")
// }
// else if(T>=20)
// {
//     document.write("Today’s Weather is cool")
// }
// else if(T>=10)
// {
//     document.write("OMG! Today’s weather is so Cool")
// }


// ___________________________________//-*-\\________________________________________________


//  TASK # 10
// Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user



//  SOLUTION:-

// var a=+prompt("Enter the First number");
// var b=+prompt("Enter the Second number");
// var c;
// var d;
// var e;
// var f;
// var g;
// document.write("<h1>Calculator</h1>");
// if(c=a+b){
//     document.write("Sum of         "  ,  + a , "  and  "  ,b + "  is   " ,c + "<br>");      
// }
// if(d=a-b){
//     document.write(" Differnce of         "  ,  + a , "  and  "  ,b + "  is   " ,d + "<br>");
// }
// if(e=a*b){
//     document.write("   Product of         "  ,  + a , "  and  "  ,b + "  is   " ,e + "<br>");
// }
// if(f=a/b){
//     document.write("  Division of         "  ,  + a , "  and  "  ,b + "  is   " ,f + "<br>");
// }
// if(g=a%b){
//     document.write("   modulus of         "  ,  + a , "  and  "  ,b + "  is   " ,g + "<br>");
// }
// else{
//     document.write("Please give input number")
// }


// ___________________________________//-*-\\________________________________________________



//    *** *** *** Chapter # 12-13  (IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS ) *** *** *** 

//  TASK # 01
// Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).


//  SOLUTION:-

// var userInput = prompt("Enter a Character ex: a-z,A-Z,0-9")
// var ascii = userInput.charCodeAt(0)
// if (ascii >= 65 && ascii <= 90){
//     alert("you input a Capital letter")
// } 
// else if (ascii >= 97 && ascii <=122){
//     alert("you input a Small letter")
// }
// else if (ascii >= 48 && ascii <=57){
//     alert("you input a number")
// }
// else{
//     alert ("you have done something wrong")
// }


// ___________________________________//-*-\\________________________________________________


//  TASK # 2
// Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.


//  SOLUTION:-

// var a=+prompt("Enter a First Integer");
// var b=+prompt("Enter a Second Integer");
// if(a===b)
// {
//     document.write("The two integers are equal")
// }
// else if(a>b)
// {
//     document.write("The first integer is larger")
// }
// else
// {
//     document.write("The Second integer is larger")
// }


// ___________________________________//-*-\\________________________________________________


//  TASK # 3
// Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.



//  SOLUTION:-

// var number = +prompt("Enter a number");
// if (number > 0 ) {
//     alert("The given number is Positive")
// }
//  else if (number < 0 ) {
//     alert("The given number is Negative")
// }
// else{
//     alert( "The given number is zero");
// }


// ___________________________________//-*-\\________________________________________________


//  TASK # 4
// Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise
    


//  SOLUTION:-

// var a=prompt("Enter a Character");
// if(a==="a")
// {
//     document.write("It is a vowel")
// }
// else if(a==="e")
// {
//     document.write("It is a vowel")
// }
// else if(a==="i")
// {
//     document.write("It is a vowel")
// }
// else if(a==="o")
// {
//     document.write("It is a vowel")
// }
// else if(a==="u")
// {
//     document.write("It is a vowel")
// }
// else{
//     document.write("It is a consonent")
// }


// ___________________________________//-*-\\________________________________________________


//  TASK # 5
// Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.


//  SOLUTION:-

// var a=prompt("Store correct password in a JS variable");
// {
//     alert("Asks user to enter his/her password")
// }
// var b=prompt("Please enter your password");
// if(b===a){
//     alert("“Correct! The password you entered matches the original password")
// }
// else{
//     alert("Incorrect password")
// }


// ___________________________________//-*-\\________________________________________________


//  TASK # 6
// This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }


//  SOLUTION:-

// var hour = 13;
// if (hour < 18) {
// alert("Good day");
// }
// else{
// alert("Good evening");
// }


// ___________________________________//-*-\\________________________________________________


//  TASK # 7
// . Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements



//  SOLUTION:-

// var time = +prompt("what time is it?");
// if(time >= 0000 && time <=1200){
//     alert("Good morning");
// }
// else if(time > 1200 && time <= 1700){
//     alert("Good afternoon");
// }
// else if(time > 1700 && time <= 2100){
//     alert("Good evening");
// }
// else if(time > 2100 && time <= 2359){
//     alert("Good night");
// }
// else{
//     alert("It is not hour")
// }


// ___________________________________//-*-\\________________________________________________



//    *** *** *** Chapter # 14-16  (ARRAYS ) *** *** *** 

//  TASK # 01
// Declare an empty array using JS literal notation to store
// student names in future.


//  SOLUTION:-

// var studentName = new Array();
// document.write(studentName);


// ___________________________________//-*-\\________________________________________________


//  TASK # 2
// Declare an empty array using JS object notation to store
// student names in future.


//  SOLUTION:-

// var studentName = [];
// document.write(studentName);


// ___________________________________//-*-\\________________________________________________


//  TASK # 3
// Declare and initialize a strings array.


//  SOLUTION:-

// var stringArray = ["string1", "string2", "string3"];
// document.write(stringArray);


// ___________________________________//-*-\\________________________________________________


//  TASK # 4
// Declare and initialize a numbers array.


//  SOLUTION:-

// var numBer = [22, 33, 44];
// document.write(numBer);


// ___________________________________//-*-\\________________________________________________


//  TASK # 5
// . Declare and initialize a boolean array

//  SOLUTION:-


// var booLean=[true,false]
// document.write(booLean);


// ___________________________________//-*-\\________________________________________________


//  TASK # 6
// Declare and initialize a mixed array.


//  SOLUTION:-

// var mixedArray=[22,"bariq",true]
// document.write(mixedArray)


// ___________________________________//-*-\\________________________________________________


//  TASK # 7
// Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:


//  SOLUTION:-

// var a=[ "SSC", "HSC", "BCS","BS", "BCOM", "MS", "M. Phil", "PhD"];
// document.write("<h1>Qualifications:</h1>" + "<br>"+ "<br>");
// document.write("1) " + a[0] +"<br>" +"2) " + a[1] +"<br>" +"3) " + a[2] +"<br>" +"4) " + a[3] +"<br>" +"5) " + a[4] +"<br>"+"6) " + a[5] +"<br>" + "6) " + a[5] +"<br>" +"7) " + a[6] +"<br>" +"8) " + a[7] +"<br>");


// ___________________________________//-*-\\________________________________________________


//  TASK # 8
// Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:


//  SOLUTION:-

// var studentName=["Michael","John","Tony"];
// var scOre=[320,230,480]
// var shahPer=320/5;
// var bariqPer=230/5;
// var kamPer=480/5;
// document.write("Score of "+ studentName[0] +" is "+scOre[0]+". Percentage: "+shahPer+"%"+"<br>"+"Score of "+ studentName[1] +" is "+scOre[1]+". Percentage: "+bariqPer+"%"+"<br>"+"Score of "+ studentName[2] +" is "+scOre[2]+". Percentage: "+kamPer+"%")


// ___________________________________//-*-\\________________________________________________


//  TASK # 9
// Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.


//  SOLUTION:-

// var color = ["Red","Yellow","Green"]
// document.write(color+"<br/>");
// var beginning = prompt("Enter which color you want to add at the beginning of array")
// color.unshift(beginning)
// document.write(color+"<br/>");
// var ending = prompt("Enter which color you want to add at the ending of array")
// color.push(ending)
// document.write(color+"<br/>");
// color.shift()
// document.write(color+"<br/>");
// color.pop()
// document.write(color+"<br/>");
// var update =+prompt("At which index do you want to add color?")
// var newColor =+prompt(" which color do you want to add on that index?")
// color.splice(update,0,newColor)
// document.write(color+"<br/>");
// var dlete =+prompt("At which index do you want to delete color?")
// var colorDelete =+prompt(" which color do you want to delete on that index?")
// color.splice(dlete, colorDelete);
// document.write(color+"<br/>");


// ___________________________________//-*-\\________________________________________________


//  TASK # 10
// Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.


//  SOLUTION:-

// var score = [320,230,480,120]
// document.write("Score of students :" +score+"<br/>");
// score.sort()
// document.write(" Ordered Score of students :" +score);


// ___________________________________//-*-\\________________________________________________


//  TASK # 11
// Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.


//  SOLUTION:-

// var cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
// document.write("cities list: <br/>"+cities+"<br/>")
// var selectedCities = cities.slice(2,4)
// document.write("selected cities list: <br/>"+selectedCities);


// ___________________________________//-*-\\________________________________________________


//  TASK # 12
// Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)


//  SOLUTION:-

// var arr = ["This","is","my","cat"]
// document.write("<h1>Array</h1>; <br/>"+arr+"<br/>")
// var join = arr.join(" ")
// document.write("<h1>String:</h1> <br/>"+join)


// ___________________________________//-*-\\________________________________________________


//  TASK # 13
// Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)



//  SOLUTION:-

// var device = ["keyboard","mouse","printer","monitor"]
// document.write("devices : <br/>"+device+"<br/>")
// var firstDevice = device.shift()
// document.write("out : <br/>"+firstDevice+"<br/>")
// var secondDevice = device.shift()
// document.write("out : <br/>"+secondDevice+"<br/>")
// var thirdDevice = device.shift()
// document.write("out : <br/>"+thirdDevice+"<br/>")
// var fourthDevice = device.shift()
// document.write("out : <br/>"+fourthDevice+"<br/>")  


// ___________________________________//-*-\\________________________________________________


//  TASK # 14
// Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)


//  SOLUTION:-

// var device = ["keyboard","mouse","printer","monitor"]
// document.write("devices : <br/>"+device+"<br/>")
// var firstDevice = device.pop()
// document.write("out : <br/>"+firstDevice+"<br/>")
// var secondDevice = device.pop()
// document.write("out : <br/>"+secondDevice+"<br/>")
// var thirdDevice = device.pop()
// document.write("out : <br/>"+thirdDevice+"<br/>")
// var fourthDevice = device.pop()
// document.write("out : <br/>"+fourthDevice+"<br/>")`


// ___________________________________//-*-\\________________________________________________


//  TASK # 15
// Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:

//  SOLUTION:-

// var arr = ["Apple","Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write("<select>");
// for(var i=0; i<arr.length;i++){
//     document.write("<option>" + arr[i] + "</option>");
// }

// document.write("</select>");
