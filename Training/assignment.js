//指派運算子 (Assignment Operator)

//最基本的指派運算子就是大家都很熟悉的 =，一個等號來表示。
var a = 10 * 100;

//除了最基本的用法之外，還可以結合數學運算子：
var a = 10;
a += 100;           // 代表 a = a + 100;
console.log( a );   // 110

/*
運算子	實際行為
a += b	a = a + b
a -= b	a = a - b
a *= b	a = a * b
a /= b	a = a / b
a %= b	a = a % b
*/


//逗號運算子
//主要的工作讓逗號分隔運算式可以循序執行 (由左至右)
//並且會回傳最後一個運算式的值。
//最常出現的地方應該是 for 迴圈：
for (i = 0, j = 10; i < 10; i++,j++){
    k = i + j;
    console.log(k)
}

//透過 , 運算子可以將多組運算式看做是一個。
//像上面的 a 與 b 可以寫成：
var a = 10, b = 10;


//邏輯運算子 (Logical Operator)
//AND &&、 OR || 還有 NOT !
//運算後會得到一個「boolean」的值，不是 true 就是 false
var a = 123;
var b = "abc";
var c = null;

console.log( a && b );        // "abc"
console.log( a || b );        // 123
console.log( c && a );        // null
console.log( c || b );        // "abc"
console.log( c || a );        // 123

/*
「AND &&」：用兩個 & 符號來表示，在「多數程式語言」中代表的意義是：
「(條件/運算式A) && (條件/運算式B)」當 && 左右兩側的值同時為 true 時，則會得到 true 的結果。
若其中一方是 false 的情況下，則得到 false 。

「OR ||」：用兩個 | (pipe) 符號來表示，在「多數程式語言」中代表的意義是：
「(條件/運算式A) || (條件/運算式B)」當 || 左右兩側的值只要有一方為 true，則結果為 true。
只有在兩側皆為 false 的情況下才會得到 false 。

「NOT !」：以一個 ! 驚嘆號來表示，原本是 true 的結果經過 ! 轉換後會得到 false，而 false 會變成 true。
所以你可能會看到很多人用 !!xxx 來取代 Boolean(xxx)，透過兩次的「NOT」操作，即可判斷某數值 Boolean 轉換後的結果。
*/


//簡單來說，透過 && 或 || 所產生的值不一定會是 Boolean，而是兩者其中之一。
//&& 與 || 運算子在判斷的時候，會先對左邊的數值進行檢查。


//三元運算子
//condition ? val1:val2 
//如果condition 是true ，就傳回val1的結果，否則傳回val2的結果
var age = 2;
var status = (age >= 18) ? '已成年':'未滿18';
console.log(status); //未滿18歲