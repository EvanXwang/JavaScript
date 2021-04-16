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