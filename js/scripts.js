var d = document;
var wrap = d.querySelector('.wrap');
var items = d.querySelector('.items');
var itemCount = d.querySelectorAll('.item').length;
var scroller = d.querySelector('.scroller');
var pos = 0;
var transform = Modernizr.prefixed('transform');

function setTransform() {
 items.style[transform] = 'translate3d(' + (-pos * items.offsetWidth) + 'px,0,0)';
}

function prev() {
 pos = Math.max(pos - 1, 0);
 setTransform();
}
function next() {
 pos = Math.min(pos + 1 , itemCount - 1);
 setTransform();
 if (pos == 3) {
 	pos -= 4;
 }
}
window.addEventListener('resize', setTransform);﻿


				// Timer Timer Timer Timer Timer Timer Timer Timer Timer


// function CountdownTimer(elm,tl,mes){
//  this.initialize.apply(this,arguments);
// }
// CountdownTimer.prototype={
//  initialize:function(elm,tl,mes) {
//   this.elem = document.getElementById(elm);;
//   this.tl = tl;
//   this.mes = mes;
//  },countDown:function(){
//   var timer='';
//   var today=new Date();
//   var day=Math.floor((this.tl-today)/(24*60*60*1000));
//   var hour=Math.floor(((this.tl-today)%(24*60*60*1000))/(60*60*1000));
//   var min=Math.floor(((this.tl-today)%(24*60*60*1000))/(60*1000))%60;
//   var sec=Math.floor(((this.tl-today)%(24*60*60*1000))/1000)%60%60;
//   var me=this;
//
//   if( ( this.tl - today ) > 0 ){
//    timer += '<span class="number-wrapper"><div class="line"></div><div class="caption">Днів</div><span class="number day">'+day+'</span></span>';
//    timer += '<span class="number-wrapper"><div class="line"></div><div class="caption">Годин</div><span class="number hour">'+hour+'</span></span>';
//    timer += '<span class="number-wrapper"><div class="line"></div><div class="caption">Хвилин</div><span class="number min">'+this.addZero(min)+'</span></span><span class="number-wrapper"><div class="line"></div><div class="caption">Секунд</div><span class="number sec">'+this.addZero(sec)+'</span></span>';
//    this.elem.innerHTML = timer;
//    tid = setTimeout( function(){me.countDown();},10 );
//   }else{
//    this.elem.innerHTML = this.mes;
//    return;
//   }
//  },addZero:function(num){ return ('0'+num).slice(-2); }
// }
var a = new Date(); // Це потрібно щоб вирахувати скільки залишилося часу
var curtime = new Date('2018/04/17 18:00:00'); // Сюди вводити дату :)
var time = curtime.getTime()/1000-a.getTime()/1000; // тут ми беремо нашу дату і дату 1970 року здається і віднімаємо
                                                    // але перед тим ділими на 1000 щоб получити секунди
                                                    // У результаті получимо час в секундан який нам потрібно
var counter = 0; // Відлік часу.
setInterval(timerstart, 1000); // Запускаєм таймер кожну секунду
function timerstart(){ // фукнція яка запускає таймер
  var timeleft = time - counter; // Вираховуємо скільки ще лишилося часу
  if(timeleft >= 0){ // якащо лишилося більше чим 1 секунда
  convert(timeleft); // Конвертувати данні в потрібні
  counter++; // Додає до відліку часу
} else {
    document.getElementsByClassName("CDT")[0].innerHTML = '<span class="number-wrapper"><div class="line"></div><span class="number end">Time is up!</span></span>';
	document.getElementsByClassName("CDT")[1].innerHTML = '<span class="number-wrapper"><div class="line"></div><span class="number end">Time is up!</span></span>';
}
}
function convert(time){ // Функція яка перетворює час
  var tday = document.getElementsByClassName("timer_day"); // Беремо з таймера дні
  var thr = document.getElementsByClassName("timer_hr"); // години
  var tmin = document.getElementsByClassName("timer_min"); // мінути
  var tsec = document.getElementsByClassName("timer_sec"); // секунди
  var days = Math.floor(time/60/60/24); //вираховуємо скільки лишилося днів
  var hour = Math.floor(time/60/60-days*24); //вираховуємо скільки лишилося годин
  var min = Math.floor((((time/60)-hour*60)-days*24*60)); //вираховуємо скільки лишилося мінут
  var sec = Math.floor(time % 60); //вираховуємо скільки лишилося секунд
  if(days <= 9) days = "0"+days; // Додаємо 0 якщо потрібно
  if(hour <= 9) hour = "0"+hour;
  if(min <= 9) min = "0"+min;
  if(sec <= 9) sec = "0"+sec;
  tday[0].textContent = days; //Присвоюємо дні
  thr[0].textContent = hour; //Присвоюємо години
  tmin[0].textContent = min; //Присвоюємо хвилини
  tsec[0].textContent = sec; //Присвоюємо секунди
  tday[1].textContent = days; //Присвоюємо дні
  thr[1].textContent = hour; //Присвоюємо години
  tmin[1].textContent = min; //Присвоюємо хвилини
  tsec[1].textContent = sec; //Присвоюємо секунди
          //Якщо щось не зрозуміло звертайся
}
// function CDT(){
//
//  // Set countdown limit
//  var tl = new Date('2018/11/25 00:00:00');
//
//  // You can add time's up message here
//  var timer = new CountdownTimer('CDT',tl,'<span class="number-wrapper"><div class="line"></div><span class="number end">Time is up!</span></span>');
//  timer.countDown();
// }
// window.onload=function(){
//  CDT();
// }
