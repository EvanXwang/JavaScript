//運算式 (Expression) 與 運算子(Operator)

//JavaScript 的語法基本上可以分為兩大類
//「敘述句 (Statement)」 與 「運算式 (Expression)」

//敘述句 (Statement)：
//簡單來說，敘述句就是執行某個動作。
//像是變數的宣告、賦值，迴圈和 if 判斷式等等都可以被歸類於

var a = 10*100;
console.log(a)

//在運算式中，會透過提供一些數值給「運算子」(Operator) 進行運算，進而得到一個運算的結果。
//四則運算「加、減、乘、除」都是屬於運算子的一種。
/*
算術運算子 (Arithmetic Operator)
指派運算子 (Assignment Operator)
位元運算子 (Bitwise Operator)
比較運算子 (Comparison Operator)
邏輯運算子 (Logical Operator)
字串運算子 (String Operator)
特殊運算子 (Special Operator)
*/


//「特殊的數字」
Infinity + Infinity      // Infinity
-Infinity + -Infinity    // -Infinity
-Infinity + Infinity     // NaN
10 + NaN            // NaN
Infinity + NaN      // NaN
-Infinity + NaN     // NaN

//假設加號 + 兩側的其中一方，不是數字而是「字串」
//當加號 + 兩側的其中一方是字串的情況下，加號 + 會將兩者都視為「字串」連接在一起。
100 + "100"      // "100100"
100 + "ABC"      // "100ABC"
"ABC" + "XYZ"    // "ABCXYZ"

//在一個很長的運算式中，可能會有「數字」與「字串」的混搭算式，如：
var num1 = 10;
var num2 = 100;
var str = "10 加 100 的數字會是" + num1 + num2;  //輸出為 「 "10 加 100 的數字會是10100" 」

//運算式的計算是「由左而右」且「先乘除後加減」的模式來運算
//要避免這樣的問題時，可以在 num1 + num2 的算式中，用小括號 ( ) 包覆起來
var num1 = 10;
var num2 = 100;
var str = "10 加 100 的數字會是" + (num1 + num2);
console.log(str)


//正號 + 與負號 -
//正號 + 與負號 - 分別用來表示數字的「正數」與「負數」的狀態。
var a = +10;
var b = -10;
console.log(a);       // 10
console.log(b);       // -10

//若是正號 + 與負號 - 後面帶的並不是一個數字型態的值
//JavaScript 會在背後先透過 Number() 的方法嘗試著將其轉型
var a = "+10";
var b = "-10";
var c = "Hello";

console.log( +a );      // 10
console.log( -a );      // -10
console.log( +b );      // -10
console.log( -b );      // 10
console.log( +c );      // NaN
console.log( -c );      // NaN

//遞增 ++ 與遞減 --
//更常見的一元運算子就屬「遞增」 ++ 與「遞減」 --
//當變數遇上了 ++ 就會加一，而 -- 就會減一：

var a = 10;
a++;
console.log(a);  // 11

a--;
console.log(b)  // 9


//比較運算子 (Comparison Operators)
//「相等」 == 與 「全等」 ===
//一個等號 = 的情況很單純，是「指定、賦值」的意思，像：
var a = 10;

//「三個等號 === 不會替數值做自動轉型」
var a = 10;
var b = "10";
console.log( a == b );      // true
console.log( a === b );     // false


