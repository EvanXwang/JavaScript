//流程判斷與迴圈
//JavaScript 的條件語法有兩種︰ if...else 和 switch。

//if...else
var month = 4;

if( Math.ceil( month/3 ) === 1 ){
  console.log('春天');
}
else if( Math.ceil( month/3 ) === 2 ){
  console.log('夏天');
}
else if( Math.ceil( month/3 ) === 3 ){
  console.log('秋天');
}
else if( Math.ceil( month/3 ) === 4 ){
  console.log('冬天');
}
else{
  console.log('月份錯誤');
}


//改用 switch 的語法
var month = 12;
// 註：Math.ceil(n) 代表將 n 數值無條件進位
switch ( Math.ceil(month/3) ){
  case 1:
    console.log('春天');
    break;
  case 2:
    console.log('夏天');
    break;
  case 3:
    console.log('秋天');
    break;
  case 4:
    console.log('冬天');
    break;
  default:
    console.log('月份錯誤');
    break;
}