// // Chapter 1

// // 1
// alert("Welcome to my Website");
// // 2
// alert("Error! Please enter a valid password.");
// // 3
// alert("Welcome to JS Land...\nHappy Coding!");
// // 4
// alert("Welcome to JS Land...");
// alert("Happy Coding!");

// // Chapter 2

// //1
// var username;
// //2
// var myname="Jahanzaib";
// //3
// var message;
// message = "Hello World";
// alert(message);
// //4
// var name="Jhone Doe";
// var age=15;
// var certif = "Certified Mobile Application Development";
// alert(name);
// alert(age + " Years Old");
// alert(certif);
// //5
// var n="PIZZA\nPIZZ\nPIZ\nPI\nP";
// alert(n);
// //6
// var email = "jahanzaibjaveed6@gmail.com";
// alert("My Email is : " + email);
// //7
// var book = "A Smarter Way to Lears JavaScript";
// alert("I'm trying to learn from the book " + book);
//8
// document.write("Yah! I can Write HTML Content Through JavaScript");
//9
// var a="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(a);

// Chapter 3

// //1
// var age=15;
// alert("I am " + age + " Years Old.");
// //2
// var n="N";
// alert("You have visited this site "+ n + " times.")
// //3
// var birthyear=1990;
// document.write("My BirthYear is " + birthyear + "<br>" + "Data type of my declared variable is number.");
// //4
// var name = "Jhone Doe";
// var product = "T-Shirts"
// var quantity = 5;
// document.write("<b>" + name + "</b>" + " ordered " + "<b>" + quantity + "</b>" + " <b>" + product + "</b>" + " on XYZ Clothing store");

// Chapter 4

//1
// var name, age, title;
// //2
// //illegal
// var user name;
// var 1name;
// var % Inpput;
// var out put23;
// var _ lastname;
// //legal
// var name, _name, $name, user_name1, name23;
//3
// document.write("<h2>Rules for naming JS variables</h2><br>");
// document.write("Variable names can only contain , numbers , $ and _ . For example $my_1stVariable");
// document.write("<br>Variables must begin with a letter, $ or _. For example $name, _name or name");
// document.write("<br>Variable names are case sensitive");
// document.write("<br>Variable names should not be JS Keywords");

// Chapter 5

//1
// var number1=3,number2=5;
// var sum=number1+number2;
// document.write("Sum of "+number1 + " and "+number2 +" is "+sum);
// //2
// var sub=number1-number2;
// document.write("Difference of "+number1 + " and "+number2 +" is "+sub);
// var mul=number1*number2;
// document.write("Multiplication of "+number1 + " and "+number2 +" is "+mul);
// var div=number1/number2;
// document.write("Division of "+number1 + " and "+number2 +" is "+div);
// var mod=number1%number2;
// document.write("Modulus of "+number1 + " and "+number2 +" is "+mod);
//3
// var x;
// document.write("Value after variavle declaratin is: "+x);
// x=5;
// document.write("Initial Value: "+x);
// x=++x;
// document.write("Value after increment is: "+x);
// x=x+7;
// document.write("Value after addition is: "+x);
// x=--x;
// document.write("Value after decrement is: "+x);
// x=x%3;
// document.write("The remainder is: "+x);
// //4
// var cost=600;
// var price;
// price=cost*5;
// document.write("Total cost to buy 5 tickets to a movie is "+ price + "PKR");\
//5
// document.write("Table of 2<br>");
// document.write("2x1="+2*1+"<br>");
// document.write("2x2="+2*2+"<br>");
// document.write("2x3="+2*3+"<br>");
// document.write("2x4="+2*4+"<br>");
// document.write("2x5="+2*5+"<br>");
// document.write("2x6="+2*6+"<br>");
// document.write("2x7="+2*7+"<br>");
// document.write("2x8="+2*8+"<br>");
// document.write("2x9="+2*9+"<br>");
// document.write("2x10="+2*10+"<br>");
//6
// var c=34;
// var f=56;
// var fc,cf;
// fc=(f-32)*(5/9);
// cf=(c*(9/5))+32;
// document.write(c+"<sup>o</sup>C is "+cf+"<sup>o</sup>F<br>");
// document.write(f+"<sup>o</sup>F is "+fc+"<sup>o</sup>C");
//7
// var item1=450,q1=4,item2=760,q2=6,s=250,cost;
// cost=(item1*q1)+(item2*q2)+s;
// document.write("<h2>Shopping Cart</h2><br><br>");
// document.write("Price of item 1 is: "+item1);
// document.write("<br>Quantity of item 1 is "+q1);
// document.write("<br>Price of item 2 is "+item2);
// document.write("<br>Quantity of item 2 is "+q2);
// document.write("<br>Shipping Charges "+s);
// document.write("<br><br>Total cost of your order is "+cost);
// //8
// var tm=750,om=543,p;
// p=(om/tm)*100;
// document.write("<h2>Marks Sheet</h2><br><br>");
// document.write("Total marks: "+tm);
// document.write("<br>Marks Obtained "+om);
// document.write("<br>Percentage: "+p);
// //9
// var dollar=10,riyal=25,pkr;
// pkr=(dollar*104.80)+(riyal*28);
// document.write("<h2>Currency in PKR</h2><br><br>");
// document.write("Total Currency in PKR: "+pkr);
// //10
// var i=3,r;
// r=((i+5)*10)/2;
// //11
// var cy=2020,by=1997,age;
// age=cy-by;
// document.write("<h2>Age Calculator</h2><br><br>");
// document.write("Current Year: "+cy);
// document.write("<br>Birth year "+by);
// document.write("<br>Your Age is: "+age);
// //12
// var r=4,pi=3.142,circum,area;
// circum=2*pi*r;
// area=pi*r*r;
// document.write("<h2>The Geometrizer</h2><br><br>");
// document.write("Radius of a circle: "+r);
// document.write("<br>The Circumference is: "+circum);
// document.write("<br>The area is: "+area);
// //13
// var fvtSnack="Chocolate";
// var age=20;
// var max_age=65;
// var amout_p_day=5;
// var total;
// total=((max_age-age)*365)*amout_p_day;
// document.write("<h2>The Lifetime Supply Calculator</h2><br><br>");
// document.write("Favourite Snack: "+fvtSnack);
// document.write("<br>Current age: "+age);
// document.write("<br>Estimated Maximum Age: "+max_age);
// document.write("<br>Amount of Snacks per day: "+amout_p_day);
// document.write("<br>You will need "+total+" chocolates to last you untill the ripe old age of "+max_age);

// Chapter 6-9

//1
// var a=10,b,c,d,e;
// document.write("Result: <br>");
// document.write("The Value of a is: "+a);
// b = ++a;
// document.write("<br><br>The Value of ++a is: "+b);
// document.write("<br>Now the Value of a is: "+a);
// c = a++;
// document.write("<br><br>The Value of a++ is: "+c);
// document.write("<br>Now the Value of a is: "+a);
// d = --a;
// document.write("<br><br>The Value of --a is: "+d);
// document.write("<br>Now the Value of a is: "+a);
// e = a--;
// document.write("<br><br>The Value of a-- is: "+e);
// document.write("<br>Now the Value of a is: "+a);
//2
// var a,b,result;
// a=2;
// b=1;
// document.write("a is "+ a);
// document.write("<br>b is "+ b);
// document.write("<br>--a is 1");
// document.write("<br>--a - --b is 1-0 = 1");
// document.write("<br>--a - --b + ++b is 1 + 1 = 2");
// document.write("<br>--a - --b + ++b + b-- is 2 + 1 = 3");
// result=--a - --b + ++b + b--;
// document.write("<br>The Result is "+result);
//3
// var name = prompt("Enter Your Name:", "Your Name")
// alert("Welcome to our website "+ name);
//4
// var number = prompt("Enter a number for Multiplication","5");
// document.write("Table of "+number + "<br>");
// document.write(number+"x1="+number*1+"<br>");
// document.write(number+"x2="+number*2+"<br>");
// document.write(number+"x3="+number*3+"<br>");
// document.write(number+"x4="+number*4+"<br>");
// document.write(number+"x5="+number*5+"<br>");
// document.write(number+"x6="+number*6+"<br>");
// document.write(number+"x7="+number*7+"<br>");
// document.write(number+"x8="+number*8+"<br>");
// document.write(number+"x9="+number*9+"<br>");
// document.write(number+"x10="+number*10+"<br>");
//5
// var sub1,sub2,sub3,tm,om1,om2,om3,Tm,Om;
// sub1=prompt("Enter First Subject: ");
// sub2=prompt("Enter Second Subject: ");
// sub3=prompt("Enter Third Subject: ");
// tm=prompt("Enter Total Marks for Subject: ");
// om1=prompt("Enter First Subject marks: ");
// om2=prompt("Enter Second Subject marks: ");
// om3=prompt("Enter third Subject marks: ");
// Tm=tm*3;
// Om= +om1 + +om2 + +om3;
// document.write("<table><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr><tr><td>"
// +sub1+"</td><td>"
// +tm+"</td><td>"+
// om1+"</td><td>"+
// ((om1/tm)*100)+"%</td><tr><td>"+sub2+"</td><td>"
// +tm+"</td><td>"+
// om2+"</td><td>"+
// ((om2/tm)*100)+"%</td></tr><tr><td>"+sub3+"</td><td>"
// +tm+"</td><td>"+
// om3+"</td><td>"+
// ((om3/tm)*100)+"%</td></tr><tr><td></td><th>"+
// (Tm)+"</th><th>"+
// (Om)+"</th><th>"+
// ((Om/Tm)*100)+"%</th></tr></table>");

// Chapter 9-11

//1
// var city = prompt("Enter a city name","city name here");
// if (city === "karachi" || city === "KARACHI" || city === "Karachi")
// {
//     alert("Welcome to city of lights");
// }
// else{
//     alert("Welcome to "+city);
// }
//2
// var gender = prompt("Enter Your gender","MALE/FEMALE");
// if (gender === "male" || gender === "MALE" || gender === "Male")
// {
//     document.write("<h1>Good Morning Sir</h1>");
// }
// else if (gender === "female" || gender === "FEMALE" || gender === "Female")
// {
//     document.write("<h1>Good Morning Sir</h1>");
// }
// else
// {
//     document.write("<h1>You didn't mentioned your gender</h1>");
// }
//3
// var color = prompt("Enter Color","RED/YELLOW/GREEN");
// if (color === "red" || color === "RED" || color === "Red")
// {
//     document.write("<h1>Must Stop</h1>");
// }
// else if (color === "yellow" || color === "YELLOW" || color === "Yellow")
// {
//     document.write("<h1>Ready to move</h1>");
// }
// else if (color === "green" || color === "GREEN" || color === "Green")
// {
//     document.write("<h1>Move now</h1>");
// }
// else
// {
//     document.write("<h1>You didn't mentioned color or correct color</h1>");
// }
//4
//a
// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// } // Worked
//b
// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// } // NOT WORKED be=ecause it will not work due to post increment
//c
// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");
// } // Condition 2 & 4 is true. WORKED
//d
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// } //WORKED
//e
// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }

// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }
//WORKED for True and car vs cat statement
//6
// var sub1,sub2,sub3,tm1,tm2,tm3,p,g,r,tm,om;
// tm1=prompt("Enter total marks for Subject 1");
// sub1=prompt("Enter obtained marks for Subject 1");
// tm2=prompt("Enter total marks for Subject 2");
// sub2=prompt("Enter obtained marks for Subject 2");
// tm3=prompt("Enter total marks for Subject 3");
// sub3=prompt("Enter obtained marks for Subject 3");
// tm= +tm1 + +tm2 + +tm3;
// om= +sub1 + +sub2 + +sub3;
// p=(om/tm)*100;
// if(p >= 80)
// {
//     g="A-one";
//     r="Excellent";
// }
// else if (p >= 70 && p < 80)
// {
//     g="A";
//     r="Good";
// }
// else if (p >= 60 && p < 70)
// {
//     g="B";
//     r="You need to improve";
// }
// else if (p > 60 )
// {
//     g="Fail";
//     r="Sorry";
// }
// document.write("<h1>Marks Sheet</h1><br><br>")
// document.write("Total marks : "+tm+"<br>")
// document.write("Marks Obtained : "+om+"<br>")
// document.write("Percentage : "+(p) +"<br>")
// document.write("Grade : "+(g) +"<br>")
// document.write("Remarks : "+(r) +"<br>")
//7
// var num =6,guess;
// guess = prompt("Enter a number to check the guess","Number should be between 1 to 10")
// if(guess == num)
// {
//     document.write("<h1>Bingo!<br><br>Correct answer</h1>");
// }
// else if (guess == 7 || guess == 5)
// {
//     document.write("<h1>Close enough to the correct answer</h1>");
// }
// else
// {
//     document.write("<h1>Its a long journey</h1>");
// }
//8
// var num=prompt("Enter a number to check divisiblity by 3","Number here");
// if(num%3==0)
// {
//     document.write("<h1>Number is divisible by 3</h1>");
// }
// else
// {
//     document.write("<h1>Number is not divisible by 3</h1>");
// }
//9
// var num=prompt("Enter a number to check whether its even or odd","Number here");
// if(num%2==0)
// {
//     document.write("<h1>Number is Even</h1>");
// }
// else
// {
//     document.write("<h1>Number is Odd</h1>");
// }
//10
// var temp=prompt("Enter today's Temperature","Number here");
// if(temp>40)
// {
//     document.write("<h1>Its too  hot outside.</h1>");
// }
// else if(temp>30)
// {
//     document.write("<h1>The Weather today is Normal.</h1>");
// }
// else if(temp>20)
// {
//     document.write("<h1>Today's Weather is cool.</h1>");
// }
// else if(temp>10)
// {
//     document.write("<h1>OMG! Today's Weather is so Cool.</h1>");
// }
// else
// {
//     document.write("<h1>Its Freezing Today</h1>");
// }
//11
// var fn,sn,o;
// fn = prompt("Enter First Number");
// sn = prompt("Enter Second Number");
// o = prompt("Enter the Operation to perform");
// if(o=== "+")
// {
//     document.write("<h1> "+fn+" "+o+" "+" "+sn+" = "+(+fn + +sn)+"</h1");
// }
// if(o=== "-")
// {
//     document.write("<h1> "+fn+" "+o+" "+" "+sn+" = "+(fn + sn)+"</h1");
// }
// if(o=== "*")
// {
//     document.write("<h1> "+fn+" "+o+" "+" "+sn+" = "+(fn * sn)+"</h1");
// }
// if(o=== "/")
// {
//     document.write("<h1> "+fn+" "+o+" "+" "+sn+" = "+(+fn / +sn)+"</h1");
// }
// if(o=== "%")
// {
//     document.write("<h1> "+fn+" "+o+" "+" "+sn+" = "+((+fn / +sn)*100)+"%"+"</h1");
// }

// Chapter 12-13

//1
// var ch= prompt("Enter a character to test: ","A");
// var n=ch.charCodeAt(0);
// if(n >=65 && n<=90)
// {
//     document.write("The character is UpperCase character");
// }
// else if (n>=97 && n<=122)
// {
//     document.write("The character is LowerCase character");
// }
// else
// {
//     document.write("The character is not an Alphabet");
// }
//2
// var num1,num2;
// num1 = prompt("Enter first number");
// num2 = prompt("Enter second number");
// if(+num1 > +num2)
// {
//     document.write("<h1> "+num1+" is Larger than "+num2+"</h1>");
// }
// else if(+num1 < +num2)
// {
//     document.write("<h1> "+num1+" is Smaller than "+num2+"</h1>");
// }
// else
// {
//     document.write("<h1> "+num1+" is equal to "+num2+"</h1>");
// }
//3
// var num = prompt("Enter a number");
// if (+num >=1)
// {
//     document.write("<h1> Number is Positive </h1>");
// }
// if (+num <0)
// {
//     document.write("<h1> Number is Negative </h1>");
// }
// if (+num===0)
// {
//     document.write("<h1> Number is Zero </h1>");
// }
//4
// var ch=prompt("Enter a Character:","One Character only");
// if(ch === "a"||ch === "e"||ch === "i"||ch === "o"||ch === "u")
// {
//     document.write("<h1>It's a Vowel</h1>");
// }
// else
// {
//     document.write("<h1>It's not a vowel</h1>");
// }
//5
// var password="?Special?",up;
// up = prompt("Enter your Password:","Your password here!");
// if(up === password)
// {
//     document.write("<h1>Correct! The password you entered mathces the original password</h1>");
// }
// else if ( up === "Your password here!")
// {
//     document.write("<h1>Please enter your password</h1>");
// }
// else
// {
//     document.write("<h1>Incorrect Password</h1>");
// }
//6
// var greeting;
// var hour = 13;
// if (hour < 18) 
// {
// greeting = "Good day";
// alert(greeting);
// }
// else
// {
// greeting = "Good evening";
// alert(greeting);
// }
//7
// var time = prompt("Enter the Time in 24 hour format:","1900");
// if(time >=0000 && time <1200)
// {
//     document.write("Good Morning!!");
// }
// else if (time>=1200 && time<1700)
// {
//     document.write("Good afternoon!!");
// }
// else if (time>=1700 && time<2100)
// {
//     document.write("Good evening!!");
// }
// else if (time>=2100 && time<2359)
// {
//     document.write("Good night!!");
// }

// Chapter 14-16
//1 
// var array=[];
//3
// var arr1=["khi","lhr","isb"];
//4
// var arr2=[87,45,43];
//5
// var arr3=[true,false,false];
//6
// var arr4=["khi",45,true];
//7
// var edu=["SSC","HSC","BCS","BS","BCOM","MS","M.Phil.","PhD"];
// document.write("1) "+edu[0]+ "<br>");
// document.write("2) "+edu[1]+ "<br>");
// document.write("3) "+edu[2]+ "<br>");
// document.write("4) "+edu[3]+ "<br>");
// document.write("5) "+edu[4]+ "<br>");
// document.write("6) "+edu[5]+ "<br>");
// document.write("7) "+edu[6]+ "<br>");
// document.write("8) "+edu[7]+ "<br>");
//8
// var names=[];
// var marks=[];
// var tm=500;
// names[0]=prompt("Enter the name of the students: ");
// marks[0]=prompt("Enter marks for Student:");
// names[1]=prompt("Enter the name of the students: ");
// marks[1]=prompt("Enter marks for student:");
// names[2]=prompt("Enter the name of the students: ");
// marks[2]=prompt("Enter marks for student:");
// document.write("Score of "+names[0]+" is "+marks[0] +". Percentage: "+ ((marks[0]/tm)*100)+"%<br>");
// document.write("Score of "+names[1]+" is "+marks[1] +". Percentage: "+ ((marks[1]/tm)*100)+"%<br>");
// document.write("Score of "+names[2]+" is "+marks[2] +". Percentage: "+ ((marks[2]/tm)*100)+"%<br>");
//9
// var color=["red","blue","black","white"];
//a
// var uc=prompt("What color do you want to add in the start of array : "+color);
// color.unshift(uc);
// document.write(color);
//b
// var uc=prompt("What color do you want to add at the end of array : "+color);
// color.push(uc);
// document.write(color);
//c
// color.push("voilet","grey");
// document.write(color);
//d
// color.shift();
// document.write(color);
//e
// color.pop();
// document.write(color);
//f
// var pos=prompt("At which point you want to add color in array : "+color);
// var name=prompt("Which Color you want to add?");
// color.splice(pos,0,name);
// document.write(color);
//g
// var pos=prompt("At which index you want to delete color in array : "+color);
// var name=prompt("How many colors you want to delete: ");
// document.write(color + "||| after deletion <br>");
// color.splice(pos,name);
// document.write(color);
//10
// var score=[320,230,480,120];
// document.write("Scores of Students : "+score);
// document.write("<br>Ordered Score of Students : "+score.sort());
//11
// var cities=["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
// document.write("Cities list : <br>"+cities);
// var selectedCities=[];
// selectedCities=cities.slice(2,4);
// document.write("<br><br> Selected cities list: <br>"+selectedCities);
//12
// var arr = ["This","is","my","cat"];
// var str=arr.join(" ");
// document.write("Array:<br>"+arr);
// document.write("<br><br>String:<br>"+str);
//15
// var array=["Apple","Samsung","Motorola","Nokia","Sony","Haier"];
// document.write("<select>");
// for(var i=0;i<array.length;i++)
// {
//     document.write("<option>"+array[i]+"</option>");
// }
// document.write("</select>");

// Chapter 17-20

//1
// var arr=[];
//2
// var arr=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];
//3
// for(var i=1;i<11;i++)
// {
//     document.write(i + "<br>");
// }
//4
// var table,length;
// table=prompt("Enter a number to show its multiplication table");
// length=prompt("Enter length of multiplication table");
// document.write("Multiplication table of "+table+"<br>Length "+length+"<br><br>");
// for(var i=1;i<=length;i++)
// {
//     document.write(table +" x "+i+" = "+ table*i + "<br>");
// }
//5
// var fruit=["apple", "banana", "mango", "orange","strawberry"];
// for (var i=0;i<5;i++)
// {
//     document.write("<h1>"+fruit[i] + "<br><h1>");
// }
// for (var i=0;i<5;i++)
// {
//     document.write("<h1> Element at index "+i+" is "+fruit[i] + "<br><h1>");
// }
//6
// document.write("<h1>Counting: <br></h1>");
// for(var i=1;i<=15;i++)
// {
//     document.write(i+" , ");
// }
// document.write("<h1><br>Reverse counting: <br></h1>");
// for(var i=10;i>=1;i--)
// {
//     document.write(i+" , ");
// }
// document.write("<h1><br>Even: <br></h1>");
// for(var i=0;i<=20;i=i+2)
// {
//     document.write(i+" , ");
// }
// document.write("<h1><br>Odd: <br></h1>");
// for(var i=1;i<20;i=i+2)
// {
//     document.write(i+" , ");
// }
// document.write("<h1><br>Series: <br></h1>");
// for(var i=2;i<=20;i=i+2)
// {
//     document.write(i+"k, ");
// }
//7
// var a=["cake","apple pie","cookie","chips","patties"];
// var b=prompt("Welcom to ABC Bakery. WHat do you want to order sir/ma'am?","write in small letters");
// var check=9;
// for(var i=0;i<5;i++)
// {
//     if (b === a[i])
//     {
//         check=i;
//         break;
//     }
//     else
//     {
//         check=9;
//     }
// }
// if(check == 9)
// {
//     document.write("<h3> We are sorry. "+b+" is <b>not available</b> in our bakery</h3>");
// }
// else
// {
//     document.write("<h3>"+b+" is <b>available</b> at index "+check+" in our bakery</h3>");
// }
//8
// var a=[24,53,78,91,12];
// var t=0;
// for(var i=0;i<5;i++)
// {
//     if(a[i] > t)
//     {
//         t = a[i];
//     }
// }
// document.write("Array items: "+a + "<br>");
// document.write("The largest number is "+t);
//9
// var a=[24,53,78,91,12];
// var t=1000;
// for(var i=0;i<5;i++)
// {
//     if(a[i] < t)
//     {
//         t = a[i];
//     }
// }
// document.write("Array items: "+a + "<br>");
// document.write("The smallest number is "+t);
//10
// for(var i=5;i<=100;i=i+5)
// {
//     document.write(i+", ");
// }

//chapter 20 - 25

//1
// var firstname=prompt("Enter your first name:");
// var lastname=prompt("Enter your last name:");
// var fullname=firstname + " "+ lastname;
// alert("Welcome "+fullname);

//2
// var phone=prompt("What is your favourite phone:");
// document.write("My favourite phone is: "+ phone);
// document.write("<br>Length of string :"+phone.length);

//3
// var str="Pakistani";
// document.write("String: "+str);
// document.write("<br> Index of 'n': "+str.indexOf("n"));

//4
// var str="Hello World";
// document.write("String: "+str);
// document.write("<br>Last Index of 'l': "+str.lastIndexOf("l"));

//5
// var str="Pakistani";
// document.write("String: "+str);
// document.write("<br>Character at index 3: "+str.charAt(3));

//6
// var firstname=prompt("Enter your first name:");
// var lastname=prompt("Enter your last name:");
// var fullname=firstname.concat(lastname);
// alert("Welcome "+fullname);

//7
// var text = "Hyderabad";
// var city="";
// for (var i = 0; i < text.length; i++) 
// {
//     if (text.slice(i, i + 4) === "Hyder") 
//     {
//          city= text.slice(0, i) + "Islam" + text.slice(i + 4);
//     }
// }
// document.write(city);

//8

//9

// var value="472";
// document.write("Value: "+ value +"<br>");
// document.write("Type: String "+"<br>");
// document.write("Value: "+parseInt(value)  +"<br>");
// document.write("Type: number "+"<br>");

//10

// var n=prompt("Enter a word in lowercase: ");
// document.write("User input: "+ n +"<br>");
// document.write("Upper case:  "+ n.toUpperCase()+"<br>");

//11

//17

// var n=prompt("Enter a word:","  ");
// document.write("User input: "+ n +"<br>");
// document.write("Last character of input: "+ n.charAt(n.length-1)+"<br>");

//Chapter 26-30

//1

// var n=prompt("Enter a positive decimal number: ");
// document.write("number: "+ n +"<br>");
// document.write("round off value: "+ Math.round(n) +"<br>");
// document.write("floor value: "+ Math.floor(n) +"<br>");
// document.write("ceil value: "+ Math.ceil(n) +"<br>");

//2

// var n=prompt("Enter a negative decimal number: ");
// document.write("number: "+ n +"<br>");
// document.write("round off value: "+ Math.round(n) +"<br>");
// document.write("floor value: "+ Math.floor(n) +"<br>");
// document.write("ceil value: "+ Math.ceil(n) +"<br>");

//3
// var n = prompt("Enter a negative number to check the absoulte number:");
// document.write("The absolute value of "+n+" is "+Math.abs(n));

//4
// var n=Math.random()*6;
// n=Math.ceil(n);
// document.write("random dice value: "+n);

//5
// var n=Math.random()*2;
// n=Math.ceil(n);
// if(n==2)
// {
//     document.write(n+"<br> random coin value: Heads");
// }
// else if(n==1)
// {
//     document.write(n+"<br> random coin value: Tails");
// }

//6
// var n=Math.random()*100;
// document.write("random number between 1 and 100: "+Math.ceil(n));

//7



//8

// var num=6;

// var n=prompt("Enter a number from 1-10: ");
// if(n == num) {
//     alert("Congratulations you guessed it right!!")
// }
// else{
//     alert("Try Again");
// }

//Chapter 31-34

//1

// var d= new Date();
// document.write(d);

//2

// var d= new Date();
// var month = d.getMonth();
// if(month == 0)
// {    
//     document.write("Current Month: January")
// }
// else if(month == 1)
// {
//     document.write("Current Month: February")
// }
// else if(month == 2)
// {
//     document.write("Current Month: March")
// }
// else if(month == 3)
// {
//     document.write("Current Month: April")
// }
// else if(month == 4)
// {
//     document.write("Current Month: May")
// }
// else if(month == 5)
// {
//     document.write("Current Month: June")
// }
// else if(month == 6)
// {
//     document.write("Current Month: July")
// }
// else if(month == 7)
// {
//     document.write("Current Month: August")
// }
// else if(month == 8)
// {
//     document.write("Current Month: September")
// }
// else if(month == 9)
// {
//     document.write("Current Month: October")
// }
// else if(month == 10)
// {
//     document.write("Current Month: November")
// }
// else if(month == 11)
// {
//     document.write("Current Month: December")
// }

// 3

// var d= new Date();
// var day = d.getDay();
// if(day == 0)
// {    
//     document.write("Today is Sun")
// }
// else if(day == 1)
// {
//     document.write("Today is Mon")
// }
// else if(day == 2)
// {
//     document.write("Today is Tue")
// }
// else if(day == 3)
// {
//     document.write("Today is Wed")
// }
// else if(day == 4)
// {
//     document.write("Today is Thu")
// }
// else if(day == 5)
// {
//     document.write("Today is Fri")
// }
// else if(day == 6)
// {
//     document.write("Today is Sat")
// }

//4

// var d= new Date();
// var day = d.getDay();
// if(day == 0 || day == 6)
// {    
//     document.write("It's Fun Day")
// }
// else {
//     document.write("It's Work Day")
// }

//5

// var d= new Date();
// var date = d.getDate();
// if(date < 16)
// {    
//     document.write("First fifteen days of the month")
// }
// else {
//     document.write("Last days of the month")
// }

//6

// var d= new Date();
// var msec = d.getTime();
// var sec = msec/1000;
// var minutes = sec/60;
// document.write("Current Date: "+d);
// document.write("<br>Elapsed milliseconds since January 1, 1970:  "+msec);
// document.write("<br>Elapsed minutes since January 1, 1970:  "+minutes);

//7

// var d= new Date();
// var hour = d.getHours();
// if(hour >= 12)
// {    
//     document.write("It's PM")
// }
// else {
//     document.write("It's AM")
// }

//8

// var laterDate = new Date("December 31,2020");
// document.write("Later Date: "+laterDate);

//9

// var ramzanDate = new Date("May 24,2020");
// var currentDate = new Date();
// var ramzanTimeMiliSec = ramzanDate.getTime();
// var currentTimeMiliSec = currentDate.getTime();
// var miliSec = currentTimeMiliSec - ramzanTimeMiliSec;
// var days = miliSec / (1000 * 60 * 60 *24);
// days = Math.floor(days);
// document.write(days + " days have passed since 1st Ramzan 2020");

//10

// var refdate = new Date("December 5,2015");
// var sDate = new Date("January 1,2015");
// var refMilSec = refdate.getTime();
// var sMilSec = sDate.getTime();
// var mSec = refMilSec - sMilSec;
// var sec = mSec/1000;
// document.write("On Reference Date: " + refdate + " <br> "+ sec+ " Seconds has passed since the beginning of 2015");

//11

// var currentDate= new Date();


//12

//13

//14

// var name = prompt("Enter Your name: ");
// var unit = prompt("Enter number of unites useed:");
// var date = new Date();
// var month = date.getMonth();
// var billingMonth="";
// if(month == 0)
// {    
//     billingMonth = "January"
// }
// else if(month == 1)
// {
//     billingMonth = "February"
// }
// else if(month == 2)
// {
//     billingMonth = "March"
// }
// else if(month == 3)
// {
//     billingMonth = "April"
// }
// else if(month == 4)
// {
//     billingMonth = "May"
// }
// else if(month == 5)
// {
//     billingMonth = "June"
// }
// else if(month == 6)
// {
//     billingMonth = "July"
// }
// else if(month == 7)
// {
//     billingMonth = "August"
// }
// else if(month == 8)
// {
//     billingMonth = "September"
// }
// else if(month == 9)
// {
//     billingMonth = "October"
// }
// else if(month == 10)
// {
//     billingMonth = "November"
// }
// else if(month == 11)
// {
//     billingMonth = "December"
// }
// var charge = 20;
// var lateSurcharge = 400;
// document.write("<h1><b>K-Electric Bill</b></h1><br><br>");
// document.write("Customer Name: <b>"+name+"</b><br>");
// document.write("Month: <b>"+billingMonth+"</b><br>");
// document.write("Number of units: <b>"+unit+"</b><br>");
// document.write("Charges per unit: <b>"+charge+"</b><br>");
// document.write("<br>Net Amount Payable(within Due Date): <b>"+unit*charge+"</b><br>");
// document.write("Late payment surcharge: <b>"+lateSurcharge+"</b><br>");
// document.write("Gross Amount Payable(after Due Date): <b>"+((unit*charge)+lateSurcharge)+"</b><br>");

//Chapter 35 - 38

//1

// function date() {
//     var d=new Date();
//     alert(d)
// }
//date()

//2

// function greet(a,b){
//     alert(" Welcome "+a+" "+b)
// }
// var fn = prompt("Enter your first name: ")
// var ln = prompt("Enter your last name: ")
// greet(fn,ln)

//3

// function add(a,b){
//     return a+b
// }
// var a = +prompt("Enter first number: ")
// var b = +prompt("Enter second number: ")
// var c = add(a,b)
// alert("Sum of these numbers is: "+c)

//4

// function calculator(num1,op,num2) {
//     if(op == '+')
//     {
//         return num1 + num2
//     }
//     else if (op == '-')
//     {
//         return num1 - num2
//     }
//     else if (op == '*')
//     {
//         return num1 * num2
//     }
//     else if (op == '/')
//     {
//         return num1 / num2
//     }
//     else
//     {
//         alert("Invalid operator")
//     }
// }
// var numm1 = +prompt("Enter first number: ")
// var numm2 = +prompt("Enter second number: ")
// var oop = prompt("Enter the operator: ")
// var result= calculator(numm1,oop,numm2)
// alert(numm1 + " "+ oop + " "+ numm2 + " = "+result)

//5

// function square(a)
// {
//     return a*a
// }
// var n=+prompt("Enter a number: ")
// var sq = square(n)
// alert("Square of "+n+ " is: "+sq)

//6

// function factorial(num) {
//     var fac=1;
//     for(var i =num;i>0;i--)
//     {
//         fac = i*fac
//     }
//     return fac
// }
// var num=prompt("Enter a number: ")
// var f=factorial(num)
// alert("Factorial of "+num+" is: "+f)

//7

// function count(start,end) { 
//     document.write("Counting from "+start+ " to "+end+'<br>')
//     for(var i =start;i<=end;i++)
//     {
//         document.write(i+"<br>")
//     }
// }
// var num1=prompt("Enter starting number: ")
// var num2=prompt("Enter ending number: ")
// count(num1,num2)

//8

// function hyp(b,p) {
//     function sq(n){return n*n}
//     var h = sq(b) + sq(p)
//     return h
// }
// var base=+prompt("Enter base of the right triangle")
// var per=+prompt("Enter perpendicular of right triangle")
// var hypotenuse = hyp(base,per)
// alert("Hypotenuse is: "+hypotenuse)

//9

// function area(w,h)
// {
//     return w*h
// }
// var width=+prompt("Enter width of rectangle hacing height 20cm: ")
// var a = area(width,20)
// alert("Area is: "+a)

//10

//11

//12

//13

//14

// function calcCircum(r){
//     var circum = 2*3.1416*r
//     document.write("The circumference is "+circum+" <br>")
// }
// function calcArea(r){
//     var area = 3.1416*r*r
//     document.write("The area is "+area+" <br>")
// }
// var radius = +prompt("Enter radius of the circle: ")
// calcCircum(radius)
// calcArea(radius)

//Chapter 38 - 42

//1

// function power(a,b){
//     var res=1;
//     for(var i=1;i<=b;i++)
//     {
//         res = res*a;
//     }
//     return res;
// }
// var num=+prompt("Enter a number: ")
// var p=+prompt("Enter its power: ")
// var result = power(num,p)
// alert(num + " raised to power "+p+" is: "+result)

//2

//3

// function areaTriangle(a,b,c){
//     function S(){
//         return ((a+b+c)/2)
//     }
//     var area = S()*(S()-a)*(S()-b)*(S()-c);
//     return area
// }
// var side1 = +prompt("Enter side a of triangle: ")
// var side2 = +prompt("Enter side b of triangle: ")
// var side3 = +prompt("Enter side c of triangle: ")
// var area = areaTriangle(side1,side2,side3)
// alert("Area of this triangle is : "+area)

//4

// function average(sub1,sub2,sub3){
//     return (sub1+sub2+sub3)/3
// }
// function percentage(sub1,sub2,sub3){
//     return (((sub1+sub2+sub3)/300)*100)
// }
// function main(){
//     var sub1 = +prompt("Enter marks for subject 1: ")
//     var sub2 = +prompt("Enter marks for subject 2: ")
//     var sub3 = +prompt("Enter marks for subject 3: ")
//     var avg = average(sub1,sub2,sub3)
//     var Percentage = percentage(sub1,sub2,sub3)
//     alert("Average of these marks are: "+avg+"\nPercentage is : "+Percentage+"%")
// }
// main()

//5

//Chapter 43 - 48

//1
//Done on index.html with number 1-C-43-48
//2
//Done on index.html with number 2-C-43-48
//3
//Done on index.html with number 3-C-43-48

// function del(j){
//     var id = document.getElementById(j)
//     id.innerHTML= " "
// }

//4
//Done on index.html with number 4-C-43-48
//5
//Done on index.html with number 5-C-43-48

// var c=0;
// var count = document.getElementById("count");
// function inc(){
//     c++;
//     count.innerHTML = c;
// }

// function dec(){
//     c--;
//     count.innerHTML = c;
// }
// function reset(){
//     c=0;
//     count.innerHTML = c;
// }

// Chapter 49 - 52

