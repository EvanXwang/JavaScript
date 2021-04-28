//函式 Function
//「函式」指的是將一或多段程式指令包裝起來，可以重複使用，也方便維護

//在括號 ( ) 中的部分，稱為「參數 (arguments) 」，參數與參數之間會用逗號 , 隔開
//在大括號 { } 內的部分，內含需要重複執行的內容，是函式功能的主要區塊。
function square(number) {
    return number * number;
}

square(2);        // 4
square(3);        // 9
square(4);        // 16


//範例1
function sayHi(){
    console.log('HI');
}
sayHi();


//範例2   , 也可帶入參數
function addTwoNum(a, b){
    return a + b;
}

var total = addTwoNum(3, 6);
console.log(total);


//範例3   ，物件也可以是function
var obj = {
    i:0,
    add:function(){
        obj.i++;
    }
}

obj.add();
obj.add();
console.log(obj.i);


//函數的寫法有這幾種

//命名函數
function sayHi(){
    console.log('hello');
}
sayHi(); // hello

//匿名函數(想成把函數當作變數傳遞
var sayHi_1 = function (){
    console.log('say hello');
}
sayHi_1(); //say hello

//箭頭函數
var sum = function(x, y){
    return x + y;
}
console.log(sum(3, 4)); //7

//可以改寫成
var sum1 = (x, y ) => x + y;
console.log(sum(2, 3)); //5


//預設參數值 ，函數可以接受參數值傳入
function guessWhat(str = 'hi'){
    console.log(str);
}
guessWhat(); // hi


//中斷函數
//(函數會有回傳值，也就是return ，可使用此特性中斷函數, 就是直接return 空值)

function sayHi(myStr = 'hello'){
    if(myStr == 'bye'){
        return
    }
    console.log(myStr);
}

sayHi(); // hello
sayHi('bye'); // show nothing



//Closure 閉包
//範例1
function outer(){
  var myStr = "a";
  function sayHi(){
    console.log(myStr);
  }
  return sayHi;
}

var myFun = outer();
myFun(); // a

//範例2
function outer() {
  var a = 10;
  function addNum(b) {
    return a + b;
  }
  return addNum;
}

var myFun = outer();
console.log(myFun(10)); // 20
console.log(myFun(20)); // 30
