//變數

// 透過var 宣告變數a , 因為沒給a值，故內容為undefined
var a;
var b = 1;
console.log(a,b)

// 沒透過 var 宣告的變數都會自動變成全域變數
c = 1;
console.log(c)



//string字串

//倘若要在單引號內包覆單引號，或是雙引號內包覆雙引號就會出現問題：
// var str = 'let's go !' ;   // error
var str = "Let's go!";    // OK

//如果有非用不可的時候，可以透過 \ (跳脫字元, escape character) 來處理：
var str = 'Let\'s go!';    // OK


// number數字

//JavaScript 只有一種數值的型別，就是 number，不管整數或帶有小數點的數字都是：
var a = 10;
var b = 22.3


// boolean 布林值

//判斷式
var a1 = true;
var b1 = false;
var c1 = (100 > 30);
console.log(a1,b1,c1)


//null 與 undefined

//在大多數的程式語言中，都有 null 或是類似空值類型的設定
//而 JavaScript 又多了一個 undefined，這裡就把它們放在一起比較。

//undefined 代表的是「(此變數) 還沒有給值，所以不知道是什麼」
//null 代表的是「(此變數可能曾經有值，可能沒有值) 現在沒有值」
var a2;    // undefined, 尚未給值，未定義
var b2 = null;    // null, 明確代表此變數沒有值
console.log(a2,b2)



/*
Before ES6
在 ES6 之前，只有兩種 scope

全域活動範圍(global scope)
函數活動範圍(function scope)
*/

var myVar = 0;
  {
    var myVar = 1;
    console.log("inner scope: %d\n", myVar); // 1
  }
console.log("main scope: %d\n", myVar); // 1

/*
ES6 以前，只能使用 var 來宣告變數，
在函數中以 var 宣告的變數，其活動範圍僅在函數內，
外部無法使用，而沒有用 var 或是在函數外宣告的變數，就屬於全域範圍
*/


//從ES6開始，多了兩種宣告變數的方式：let、const
//let 不同於var , 它是以區塊為活動範圍
//可以在for 、if 、純區塊中，使用let宣告以區塊為活動範圍的變數

let myVar1 = 0 ;
    {
        let myVar1 = 1 ;
        console.log('inner scope: %d\n', myVar1);
    }
console.log('main scope: %d\n', myVar1);

//let vs var 區別
/*
let 禁止在同一活動範圍中再次宣告相同名稱的變數
var 會無視第二次宣告，直接指派變數值。
let 禁止在宣告變數之前就使用它。
*/


//const 常數
//無法再更動其值，也是常數的概念，若試圖改變const宣告的變數，會產生語法錯誤


