// - oimikuji : DOM操作と配列を利用して運勢を表示(console.log で OK)チャレンジ課題
// ランダム関数、クリックしたらおみくじができる。出力。

let fate = document.getElementById('fate');
fate.addEventListener('click',function(){
  let num = Math.random()
  if(num < 0.3){
    this.textContent = '大吉';
  }else if (num < 0.45){
    this.textContent = '中吉';
  }else if (num < 0.60 ){
    this.textContent = '小吉';
  }else if (num < 0.85){
    this.textContent = '吉';
  }else {
    this.textContent = '凶';
  } 
});


