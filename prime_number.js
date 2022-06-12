
// var userInp = parseInt(prompt("please put your number for checking prime number"))

// function isPrime(num) {

//     if (num <= 1) {
//         console.log("0,1 or any negative value is not a prime number");

//     } else if (num == 2) {
//         console.log("2 is a prime number ")
//     } else if (num > 2) {
//         for (i = 2; i < num; i++) {
//             if (num % i == 0) {
//                 console.log(num + " is not a prime number as it is has one or more divisors")
//                 return;
//             }

//         }
//     }
//     console.log("this is a prime number");
// }


// isPrime(userInp)



//------------------------------------------method 2



// var inp = 354;
// var arr = [];

// if(inp > 2){
//     for(i = 2; i<inp ; i++){
//         if(inp % i == 0){
//             arr.push(i)
//             console.log(arr)
//         }

//     }
// }

// if(arr.length == 0){
//     console.log("this is a prime number")
// }else if(arr.length >= 1){
//     console.log('this is not a prime number as it has divisors of ' + arr)
// }else if(inp<2){
//     console.log("01 or any negative integer is not a prime number")
// }
