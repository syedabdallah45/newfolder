// templates
// constructor function
// pascal casing
// function Mobile(clr) {
//     this.width = 5; // 8 bytes
//     this.height = 7; // 8 bytes
//     this.color = clr; // 8 bytes
// }

// Mobile.prototype.PI = 3.14;

// Mobile.prototype.call = function () { // 8 bytes
//     console.log('Calling....', this.width, this.height);
// }

// var m1 = new Mobile('Black'); // 24 bytes
// var m2 = new Mobile('Red'); // 24 bytes
// var m3 = new Mobile('Blue'); // 24 bytes

// console.log(m1);


// function person(fname,lname,age){
//    this.fname=fname;
//     this.lname=lname;
//     this.age=age;
// }

// // var res=person.fname;
// // console.log(res)
// var x= new person("syed","abdallah",23)
// var x2= new person("syed","abbudi",29)
// x.nationality ='english'
// console.log(x)
// console.log(x2)



// function linearSearch(arr, k) {
//     for (var i = 0; i < arr.length; i++) {
//          return arr[i];
//     }

// }


// var arr = [10, 20, 30, 40, 50];
// var res = linearSearch(arr, 30);
// console.log(res);

function sockMerchant(n, ar) {
    let socks = {};
    let pairs = 0;
    
  for (let element of ar) {
    socks[element] = socks[element] + 1 || 1;
      if (socks[element] % 2 === 0) {
        pairs += 1;
      }
    }
  return pairs;
  
  }
  var ar=[10 ,20, 20, 10, 10, 30, 50, 10, 20,10,20,10,20]
var res= sockMerchant(13,ar)
console.log(res)


