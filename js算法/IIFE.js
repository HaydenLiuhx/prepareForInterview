// for(var i = 0; i<=5; i++){

//     function a() {
//         console.log(i)
//     }
//     a()
// }

// for(var i=1;i<=5;i++){
//     setTimeout(function(){
//         console.log(i);
//     },1000)
// }
// var name = "The Window";

// var object = {
//     name: "My Object",

//     getNameFunc: function () {
//         return function () {
//             return this.name;
//         };

//     }

// };
var timer = setTimeout(function() {
    console.log('setTimeout actions.');
  }, 0);
   
console.log('other actions.');