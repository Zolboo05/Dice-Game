// Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогч 0, 2dahi ni 1;
var activePlayer = 1;

// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];
// Тоглогчийн ээлжин дээр цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;

// Шооний аль талаараа буусныг хадгалах хувьсагч, 1-6 гэсэн утгыг
var dice = Math.floor(Math.random() * 6) + 1;
var sum = 0;
//  <div class="player-score" id="score-0">43</div>
// window.document.querySelector("#score-0").textContent = dice;
// document.querySelector("#score-1").innerHTML = "<em>Yes.!<em>";
// Програм эхлэхэд 0 байна
window.document.querySelector("#score-0").textContent = 0;
window.document.querySelector("#score-1").textContent = 0;
document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;
document.querySelector(".dice").style.display = "none";
console.log("Шоо :" + dice);
