

// function Salary(){
//     var salary=0;
//     for(let i=0;i<=salary.length-1,i++){

//     }
// }


function fact(x) {
    if(x==0) {
       return 1;
    }
    return x * fact(x-1);
 }
 
 var res= fact(20)
 console.log(res)