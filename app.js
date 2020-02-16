// Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогч 0, 2dahi ni 1;
var activePlayer = 0;

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
// Shoog shideh event listener
document.querySelector(".btn-roll").addEventListener("click", function() {
  // 1-6 hurtel sanamsargui neg toog gargaj avna
  var diceNumber = Math.floor(Math.random() * 6) + 1;

  // Shoonii zurgiig veb deer gargaj irne
  diceDom.style.display = "block";

  // Buusan sanamsargui toond hargaltsah toonii zurgiig veb deer gargaj irne
  diceDom.src = "dice-" + diceNumber + ".png";

  // Buusan too ni 1-ees ylgaatai bol idevhtei hereglegchiin toog nemegduulne Toglogchiin eeljiin onoog oorchilnoo
  if (diceNumber !== 1) {
    // 1-ees ylgaatai too buulgana.Buusan toog toglogchid nemne
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    // 1 buusan tul toglogchiin eeljiig solij ogno
    switchNextPlayer(); // DRY Dont Repeat Yourself
  }
});

// Hold товчний eventlistener
document.querySelector(".btn-hold").addEventListener("click", function() {
  // Ug toglogchiin tsugluulsan eeljnii onoog global onoon deer nemj ogno
  // if (activePlayer === 0) {
  //   scores[0] = scores[0] + roundScore;
  // } else {
  //   scores[1] = scores[1] + roundScore;
  // }
  scores[activePlayer] = scores[activePlayer] + roundScore;
  // Уг тоглогч хожсон эсэхийг шалгах
  // Дэлгэц дээрх оноог өөрчлөх
  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];
  if (scores[activePlayer] >= 100) {
    document.getElementById("name-" + activePlayer).textContent =
      "You're Winner.!";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
  } else {
    switchNextPlayer();
  }
});
// Тоглогчийн ээлжийн дараачийн тоглогч руу шилжүүлнэ
function switchNextPlayer() {
  // Тоглогчийн ээлжийн солих
  // Тоглогчийн цуглуулсан оноог 0 болгоно
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = "0";

  // Тоглогчийн ээлжийг нөгөө тоглогч руу шилжүүлнэ
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  // Улаан цэгийг шилжүүлэх тоглогчийн ээлжийг солино
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  // Шоог түр алга болгох
  diceDom.style.display = "none";
}

// Шинэ тоглоомыг эхлүүлэх eventlistener
document.querySelector("btn-new").addEventListener("click", function() {
  alert("1313");
});
