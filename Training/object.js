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
