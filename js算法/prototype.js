//From https://juejin.im/post/5c72a1766fb9a049ea3993e6

console.log(Object.prototype)
//{}
console.log(String.__proto__)
//[Function]
console.log(Function.prototype)//[Function]
console.log(Function.prototype.__proto__)//{}
console.log(Object.__proto__)//[Function]
console.log(Function.__proto__)//[Funciton]

Object.__proto__ === Function.prototype;
Function.prototype.__proto__ === Object.prototype;
Object.prototype.__proto__ === null;

// 定义鸟类
function Bird(color) {
    this.color = color;
}

// 定义飞的动作
function fly(bird) {
    console.log(bird + " 飞起来了！");
}

// 创造一只鸟
let bird1 = new Bird('蓝色');

fly(bird1); // [object Object] 飞起来了！

// IF 定义飞的动作
function fly(bird) {
    console.log(bird.color + " 的鸟飞起来了！");
}

fly(bird1); // 蓝色 的鸟飞起来了！

//实例的 __proto__ 属性（原型）等于其构造函数的 prototype 属性。

console.log(Function.prototype.call) // [Function: call]
//call改变了this的指向

var animals = [
    {
      species: 'Lion',
      name: 'King'
    },
    {
      species: 'Whale',
      name: 'Fail'
    }
  ]
  
  for(var i = 0; i < animals.length; i++) {
    (function(i) {
      this.print = function() {
        console.log('#' + i + ' ' + this.species + ": " + this.name);
      }
      this.print();
    }).call(animals[i], i);
  }
  

//call() 方法调用父构造函数。