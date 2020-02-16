// Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогч 0, 2dahi ni 1;
var activePlayer = 1;

// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];
// Тоглогчийн ээлжин дээр цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;

// Шооний аль талаараа буусныг хадгалах хувьсагч, 1-6 гэсэн утгыг
// Програм эхлэхэд бэлтгэе
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";
// QuerySelector ni olon torloor DOM-oos haidag uchir udaan baidag uuniig hurdan bolgohiin tuld var diceDom gesen huvisagch hadgalsnaar dahin dahin haih shaardlagagui bolsnoor iluu hurdan ajillana
var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";
document.querySelector(".btn-roll").addEventListener("click", function() {
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";
});
