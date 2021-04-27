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