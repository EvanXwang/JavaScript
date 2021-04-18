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


//for 迴圈
//for 迴圈的使用情境，大多是用在迴圈執行次數「明確」的狀態
var i;
for (i = 0; i <= 10 ; i++){
    console.log(i)
}

//while 迴圈
// while 迴圈則剛好相反，當迴圈執行次數「不確定」的時候更適合
var count = 1;
while (count <11){
    console.log(count);
    count++;
}


//break 與 continue
for (var i = 1; i <= 10; i++) {

  // i 能被 3 整除表示 i 是 3 的倍數，遇到 continue 就會跳過這次
  if( i % 3 === 0){
    continue;
  }

  console.log(i);
}

// 假設陣列是這樣包含一堆 0 與若干其他數字
var arr = [0,0,0,0,7,0,9,0,4,8,0];

for(var i = 0; i < arr.length; i++ ) {

  if( arr[i] !== 0 ){
    // 找到那個不是 0 的數字，印出後退出迴圈
    console.log( arr[i] );
    break;
  }
}