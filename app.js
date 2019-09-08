// // - oimikuji : DOM操作と配列を利用して運勢を表示(console.log で OK)チャレンジ課題
// // ランダム関数、クリックしたらおみくじができる。出力。

// let fate = document.getElementById('fate');
// fate.addEventListener('click', function () {
//   let num = Math.random()
//   if (num < 0.3) {
//     this.textContent = '大吉';
//   } else if (num < 0.45) {
//     this.textContent = '中吉';
//   } else if (num < 0.60) {
//     this.textContent = '小吉';
//   } else if (num < 0.85) {
//     this.textContent = '吉';
//   } else {
//     this.textContent = '凶';
//   }
// });

// let num = Math.floor(Math.random() * omikujiImage.length);
// console.log(num);
let omikujiImage = ['img/bello.png', 'img/dream.jpg', 'img/bananay.jpg', 'img/sky.jpeg', 'img/iburu.jpg', 'img/karl.jpg', 'img/haaa.jpg'];
let omikujiWords = ['BELLO!', 'Gelato', 'me want banana', 'Tulaliloo ti amo', 'BAAAAAA!', 'BEE DO BEE DO', 'Sa la ka!'];
document.getElementById('clickme');
document.getElementById('comments');
clickme.addEventListener('click',
  function omikuji() {
    let num = Math.floor(Math.random() * omikujiImage.length);
    click.src = omikujiImage[num];
    comments.textContent = omikujiWords[num];
    if (num === 6) {
      document.body.style.backgroundColor = 'red';
      // document.body.style.fontSize = '30px';

    } else if (num === 0) {
      document.body.style.backgroundColor = 'lightpink';
      document.body.style.color = 'black';
      // document.body.style.fontSize = '30px';
    } else {
      document.body.style.backgroundColor = '#1d1d1d';
      document.body.style.color = 'aliceblue';
      // document.body.style.fontSize = '20px';
    }
  })
