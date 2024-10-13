// Chap (35-38)


// Q1


// var date = new Date();

// console.log(date.toLocaleTimeString());

// console.log(date);


// Q2


// function greet(firstName,lastName){
//       console.log(`WELCOME ${firstName} ${lastName}`);
// };

// greet(prompt("Enter your first name"), prompt(`Enter your last name`));



// Q3

// function sum (sum1,sum2){
//         console.log(`The sum of ${sum1} and ${sum2} is ${sum1 + sum2}`);
// };

// sum(+prompt(`Enter one number`), +prompt(`Enter second number `));



// Q4

// function calculator(num1,num2,operator){
//         if(operator === `+`){
//              console.log(`${num1+num2}`)
//         }else if(operator === `-`){
//             console.log(`${num1-num2}`)
//        }else if(operator === `*`){
//         console.log(`${num1 * num2}`)
//    }else if(operator === `%`){
//     console.log(`${num1 % num2}`)
// }else if(operator === `/`){
//     console.log(`${num1 / num2}`)
// }else{
//     console.log(`This is not an operator`)
// };
// };

// calculator(+prompt(`Enter one number`),prompt(`Enter second number`),prompt(`Enter operator`))



// Q5

// function square(num1){
//           console.log(`${num1 * num1}`)
// };
// square(+prompt(`Enter any number`));


// Q6


// function counting(startNum,endNum){

//     for(var i = startNum; i<=endNum ; i++){
//         console.log(i);
        
//     }

// };
// counting(+prompt(`enter starting number`), +prompt(`enter ending number`));


// Q7


// function sirDard(base,per){
//      function sirDard2(){
//      hyp = base*base 
//      hyp2 = per * per
//      }
//      function sirDard3(){
//         console.log(`Hypotenese =`,hyp + hyp2);
//      }

// };

// sirDard(+prompt(`Enter base value`),+prompt(`enter Perpendicular value`));



// Q8


// function palindrome(word){
//     var revrse = "";

//      for(var i = word.length -1 ; i >= 0 ; i--){
//        revrse += word[i]  
//      };
//      if(word === revrse){
//         console.log(`The word is palindrome`)
//      }else {
//         console.log(`The word is not palindrome`)

//      }
// };

// palindrome(prompt(`Enter any word`));




// Q9


// function kuchBhi(string){
      
//     string.slice(0,1).touppercase()
//     string.slice(,1).touppercase()

// };


// kuchBhi(prompt(`Enter any word`));




// Chp (38-42)


// Q1


// function kuchBhi(a,b){
//       console.log(`${a+b}`)
// };
// kuchBhi(20,30);




// Q2


// function year(saal){
//             if(saal=== `2012`){
//                 console.log(`this is leap year`);
                
//             }else{
//                 console.log(`this is not a leap year`);
                
//             };

// };
// year(+prompt(`Enter ANy year`));



// Q3


