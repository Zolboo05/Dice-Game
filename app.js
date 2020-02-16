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
    // Herev idvehtei toglogch 0 baival idevhtei toglogchiig 1 bolgo.
    // Ugui bol idvehtei toglogchiig 1 baival idevhtei toglogchiig 0 bolgo
    // Ene toglogchiin eeljin deer tsugluulsan onoog 0 bolgono
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;
    // Toglogchiin eeljiig nogoo toglogch ruu shiljuulne
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    // Ulaan tsegiig shiljuuleh tsegiig olno
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    // Shoog tur alga bolgono
    diceDom.style.display = "none";
    // if (activePlayer === 0) {
    //   activePlayer = 1;
    // } else {
    //   activePlayer = 0;
    // }
  }
});
