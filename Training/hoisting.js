// Hoisting

console.log(a);
var a = 123;

//JS是同步執行，也代表程式會由上而下開始執行
//上面範例在宣告a之前，就試圖印出它，正常會顯示 a is not defined??
//結果是 undefined  (有宣告，但沒有值)

/*
JS在執行時大致分二個階段

1. 創建
    編譯(解析)程式
    創建全域執行環境
    變數 this
    創建全域物件(在瀏覽器中為 window)
    將變數、函數放入記憶體

2. 執行

*/

//所以可以理解，在第一個環節，所宣告的變數、函數就會被放到記憶體
//所以流程可以理解如下：

var a;
console.log(a);
a = 123;


// Scope Chain (範圍鏈)
// JS 在使用變數時，會遵循Scope Chain 一層一層往外找，若函數找不到，則往外找

var myVar = "outer";

function func(){
  console.log(myVar);
  myVar = "inner";
}

func(); // outer
console.log(myVar); // inner



