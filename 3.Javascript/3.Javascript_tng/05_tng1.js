// 아래처럼 별을 찍어주세요.
// 예시)
// *****
// *****
// *****
// *****
// *****
// let star = '*';

// for(let i = 0; i < 10; i++) {
//   let makedStar = '';

//   for(let z = 0; z < 5; z++) {
//     makedStar += star;
//   }
//   console.log(`${makedStar}`);
// }

// 아래처럼 별을 찍어주세요.
// 예시)
// *
// **
// ***
// ****
// *****
// let makedStar = '';
// for(let lineCnt = 0; lineCnt < 5; lineCnt++) {
//   makedStar += '*';
//   console.log(makedStar);
// }

// for(let lineCnt = 0; lineCnt < 5; lineCnt++) {
//   let makedStar = '';
//   for(let starCnt = 0; starCnt <= lineCnt; starCnt++) {
//     makedStar += '*';
//   }
//   console.log(makedStar);
// }

// 아래처럼 별을 찍어주세요.
// 예시)
//     *
//    **
//   ***
//  ****
// *****
let makedStar = '';

for(let lineCnt = 5; lineCnt > 0; lineCnt--) {
  makedStar += '*';
  let makedSpace = '';

  for(let spaceCnt = 1; spaceCnt < lineCnt; spaceCnt++) {
    makedSpace += ' ';
  }
  console.log(makedSpace + makedStar);
}