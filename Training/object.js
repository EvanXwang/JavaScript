//物件 Object

//所有基本型別 (Primitives) 以外的值都是物件

var person = {
    name:'evan',
    height:'170',
    weight:'65',
    sayName:function(){
        alert(this.name);
        }
};


console.log(person.name)


//在JS中並沒有Array 這個型別，它一樣是屬於物件，其在記憶體中的位置也不是連續的
// 只是JS提供了很多Method，讓它用起來更像是Array
var arr = ['hello', 'world'];
console.log(arr.length);

arr.push('apple');
console.log(arr);



//動態綁定屬性
const book = {
    title: 'spider-man',
    author: 'evan',
    price: 999
}
//使用with ，則不需在寫 類似book.tile  語法
with(book) {
    console.log('書名:', title);
    console.log('作者:', author);
    console.log('價格:', price);
}