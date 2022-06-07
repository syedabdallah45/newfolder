'use strict';

// var mobile = {
//     name: "Mobile",
//     print: function () {
//         console.log(this.name);
//     }
// };

// var car = {
//     name: "Car"
// };

// var bike = {
//     name: "Bike"
// };

// // context changing
// // mobile.print.call(bike);
// // mobile.print.apply(car);

// // mobile.print.call(bike);

// var f = mobile.print.bind(car); // fixes the context
// f();

// var b = mobile.print.bind(bike);
// b();



// var obj = {
//     0: 10,
//     1: 20,
//     2: 30,
//     3: 40,
//     4: 50,
//     length: 5,
// };

// var res = [].slice.call(obj, 1, 2);

// var fn = [].slice.bind(obj);
// var res = fn(0, 3);
// console.log(res);


// run time polymorphism
// var arr = [10, 20, 30, 40, 50];
// var newArr = arr.slice(0, 2);
// console.log(newArr);



// function sumOfDigits(n) {
//     var sum = 0;
//     while (n > 0 || n<0) {
//         var digit = n % 10;
//         sum = sum + digit;
//         n = parseInt(n / 10);
//     }

//     return sum;
// }

// console.log(sumOfDigits(-1234545));
// console.log(sumOfDigits(3567));
// console.log(sumOfDigits(0));



// given a sorted array return index of the element
// ex: [10,20,30,40,50]  k: 40 true, k:35 false
// tracing
// O(N)
// function linearSearch(arr, k) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] === k) return i;
//     }
//     return false;
// }
/*
    arr: 10, 20, 30, 40, 50
    k: 35
    i   i < 5   body
    0   true    10 === 35   
    1   true    20 ===35
    2   true    30 === 35
    3   true    40 === 35
    4   true    50 === 35
    5   false
*/





// var arr = [10, 20, 30, 40, 50];
// var res = linearSearch(arr, 50);
// console.log(res);


// let cookout = {
//     mealOrders: ["chicken", "burger", "burger", "steak", "chicken"],
//     grill: function () {
//         let args = [].slice.call(arguments);

//         console.log("I am going to cook :" + args.join(','));
//     }

// }

// cookout.grill.apply(cookout, cookout.mealOrders);



// given an array return min element
/*
    arr: [20,8,5,10,-1,-6,10]
    min: -6

    sorting: [-6,-1,5,8,10,10,20]
    O(NLogN) > O(N)
    O(N^2)

    min: -6
    O(N)
*/
// function findMin(arr) {
//     var minSoFar = Number.MAX_SAFE_INTEGER;// index range out of exception

//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] < minSoFar) {
//             minSoFar = arr[i];
//         }
//     }

//     return minSoFar;
// }

// console.log(findMin([20, 8, 5, 10, -1, -6, 10]));
// console.log(findMin([]));
// state mgmt
// function minRec(arr, i, minSoFar) {
//     if (i === arr.length) {
//         return minSoFar;
//     }
//     // base 
//     if (arr[i] < minSoFar) {
//         minSoFar = arr[i];
//     }
//     return minRec(arr, i + 1, minSoFar);
// }

// var res = minRec([20, 8, 5, 10, -1, -6, 10], 0, Number.MAX_SAFE_INTEGER);
// console.log(res);




// function maxRec(arr, i, maxSoFar) {
//     if (i === arr.length) {
//         return maxSoFar;
//     }
//     // base 
//     if (arr[i] > maxSoFar) {
//         maxSoFar = arr[i];
//     }
//     return maxRec(arr, i + 1, maxSoFar);
// }

// var res = maxRec([20, 80, 5, 100, -1, -6, 10], 0, Number.MIN_SAFE_INTEGER);


// console.log(res);


// function binSearch(arr, k) {
//     var low = 0, high = arr.length - 1;
//     var mid = parseInt((low + high) / 2);
//     while (low <= high) {
//         var mid = parseInt((low + high) / 2);
//         if (arr[mid] === k) return true;
//         if (arr[mid] > k) {
//             // left
//             high = mid - 1;
//         } else {
//             // right
//             low = mid + 1;
//         }
//     }

//     return false;
// }

// console.log(binSearch([], 50));
// console.log(binSearch([50], 50));
// console.log(binSearch([10, 20, 30, 40, 50], 50));
// console.log(binSearch([10, 20, 30, 40, 50], 35));

function binSearch(arr,k){
    
  //base condition
    if(arr[mid]===k ){
        return  binSearch(arr,k);
    }
    
    var low = 0, high = arr.length - 1;
        while (low <= high) {
            var mid = parseInt((low + high) / 2);
            if (arr[mid] === k)
            return  true;;
            if (arr[mid] > k) {
                // left
                high = mid - 1;
            } else {
                // right
                low = mid + 1;
            }
        }
       
        return false;
     
    }
  
// console.log(binSearch([], 50));
// console.log(binSearch([50], 50));
// console.log(binSearch([10, 20, 30, 40, 50], 50));
// console.log(binSearch([10, 20, 30, 40, 50], 35));

var res = binSearch([20, 80, 50, 100, -1, -6, 10],0);


console.log(res);





// program to count down numbers to 1
// function countDown(number) {
//     const newNumber = number - 1;
//     if (newNumber > 0) {
//         countDown(newNumber);
//     }
//     console.log(number);
//     // display the number
    
//     // decrease the number value
    
//     // base case
   
// }

// countDown(4);


setTimeout(() => {
    console.log('syed')
}, 1000);