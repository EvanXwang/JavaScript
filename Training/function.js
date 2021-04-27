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