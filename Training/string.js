//String字串

//倘若要在單引號內包覆單引號，或是雙引號內包覆雙引號就會出現問題：
// var str = 'let's go !' ;   // error
var str = "Let's go!";    // OK

//如果有非用不可的時候，可以透過 \ (跳脫字元, escape character) 來處理：
var str = 'Let\'s go!';    // OK

//轉換大寫
var myStr = 'hello world';
console.log(myStr.toUpperCase()); // HELLO WORLD

//轉換小寫
var myStr = 'HELLO WORLD';
console.log(myStr.toLowerCase()); // hello world

//字串變成陣列
var myStr = '123abc'.split("");   //split 中放入字串切割分組的關鍵詞 ， 不放則是切割每個字元
for (let i = 0; i < myStr.length; i++){
    console.log(myStr[i]);
}

//替換字元
var myStr = 'abc';
var newStr = myStr.replace('c','zzz'); //第一個參數(欲替換的字串)，第二個參數(將替換的新字串)
console.log(newStr); //abzzz

//移除首尾空白
//有時user輸入的值，頭尾會不小心打到空白，可使用此方法移除
var myStr = '   abc    ';
console.log(myStr.trim()); //abc

//查找字串 (Since ES6 )
//可以檢查某字串是否包含其中(有分大小寫)
//有找到就返回其index ，否則回傳 -1
var myStr = 'abcde';
console.log(myStr.indexOf('b')); //1
console.log(myStr.indexOf('B')); //-1
console.log(myStr.indexOf('a')); //0

//ES6之後新增 includes 方法
//回傳true 、 false
var myStr = 'abcde';
console.log(myStr.includes('a')); //true
console.log(myStr.includes('A')); //false

//取出指定範圍中的字串
//第一個參數(起始值)、第二個參數(取出長度)(不加則是取完剩下字元)
var myStr = 'hello';
console.log(myStr.substr(0, 2));  //he
console.log(myStr.substr(0)); //hello

//返回指定位置的字元
var myStr = 'abc';
console.log(myStr.charAt(0)); //a
console.log(myStr.charAt(2)); //c

//解構賦值
var myStr = 'abc';
var [q, w, e] = myStr;
console.log(q, w, e); //a , b , c

//重複印出字串
//參數值為次數
var myStr = 'abc';
console.log(myStr.repeat(3)); //abcabcabc

//使用+ 運算符號 做數值變換
var age = +'25';
console.log('你的年紀是：',age+1); //你的年紀是： 26