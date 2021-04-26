# JavaScript-

## 1 語法說明：  分號 ;
在 JavaScript 中，分號 ; 是可選的，原因是 JavaScript 會幫我們自動加上分號，  
更確切的說法是語法解析器的 ASI（Automatic Semicolon Insertion，自動分號插入）  
斷行解讀並不是實際上插入分號。


## 2  一定要使用分號的情況   

### 2-1
for()  
for() 述句中的三個運算式彼此之間，使用 ; 區隔。   

for(var i = 0; i < 10; i++) {
 //...
}

### 2-2 
同一行寫兩個述句（運算式）  
var a = 0; a++

或是 switch 述句中的 case  
case 'foo': doSomething(); break

### 2-3
以 [ 或 ( 開頭的述句  
其實是 (、[、+、-、或/ 開頭的述句，但 [ 或 ( 開頭的述句比較常見。  

var x = 10  
;(x + 10).toString()  
或是立即函式：  

var x = 42  
;(function() {})()  


## 3 不需要 與 不能加 的情況

### 3-1
for() 第三個運算式  
這裡要注意的是，for() 第三個運算式：  

for (var i = 0; i < 10; i++;){  
  //...  
}  
// Uncaught SyntaxError: Unexpected token ;  

### 3-2

{} 區塊結尾
{} 表示一個區塊，所以 ; 不用加。

function func () {  
  //...  
}  
if () {  
  //...  
}  
for () {  
  //...  
}  
while () {  
  //...  
}  

### 3-3
if()、for()、while()、或 switch()  
if()、for()、while()、或 switch() 的 () 後方絕對不可以加入 ;，雖然合法，但控制邏輯是錯誤的。

if (0 === 1); { console.log('hi') }  
這個 if() 變得與後面的 { alert('hi') } 沒關聯。