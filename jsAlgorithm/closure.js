// function wait(message){
//     setTimeout(function timer(){
//         console.log(message);
//     },1000);
// }
// wait("Hello, closure!");

// for (var i=1; i<=5; i++){
// 	setTimeout(function(){
// 		console.log(i);
//     },i*1000);
// }

// function foo(){
//     var a = 2;
//     function bar(){
//         console.log(a); // 2
//     }
//     bar();
// }
// foo(); // 2
// var baz = foo(); // 2
// console.log(typeof(baz)) //undefined
// console.log(baz) //undefined

// for (var i = 1; i <= 5; i++) {
//     setTimeout(function timer() {
//       console.log(i);
//     }, i * 1000);

//   }

//   //二是传入i值并保存在闭包中。
//   for (var i = 1; i <= 5; i++) {
//     (function (i) {
//       setTimeout(function timer() {
//         console.log(i);
//       }, i * 1000);
//     })(i)
//   }

// //当然，也可以在setTimeout的第一个参数处利用闭包。
//   for (var i = 1; i <= 5; i++) {
//     setTimeout((function (i) {
//       return function () {
//         console.log(i);
//       }
//     })(i), i * 1000);
//   }

setTimeout(function () {
    console.log(a);
}, 0);

var a = 10;

console.log(b);
console.log(fn);

var b = 20;

function fn() {
    setTimeout(function () {
        console.log('setTImeout 10ms.');
    }, 10);
}

fn.toString = function () {
    return 30;
}

console.log(fn);

setTimeout(function () {
    console.log('setTimeout 20ms.');
}, 20);

fn();