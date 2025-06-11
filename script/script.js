const info = document.querySelector(".info");
info.innerHTML =
  "Pilih angkamu dan tebak berapa angka ku!!<br>Kamu punya 3 Kesempatan";

//   generate angka random
function getPilihanComputer() {
  const comp = Math.floor(Math.random() * 10) + 1;
  return comp;
}

// rulse hasil
function getHasil(comp, player) {
  if (player == comp)
    return (
      "Selamat Pilihan kamu benar<br>jawabannya ialah : " + pilihanComputer
    );
  if (player < comp) return "Pilihanmu Rendah\nCoba lagi";
  if (player > comp) return "Pilihanmu Tinggi\nCoba lagi";
}

// score
let scoreLose = 0;
let scoreWin = 0;
let kesempatan = 3;

// pilihan computer
let pilihanComputer = getPilihanComputer();
const winCount = document.querySelector(".win-count");
const loseCount = document.querySelector(".lose-count");
const pilihan = document.querySelectorAll(".angka p");
const tombolReset = document.querySelector(".lagi");

// logika permainan
pilihan.forEach(function (pil) {
  pil.addEventListener("click", function () {
    if (kesempatan > 0) {
      const pilihanPlayer = parseInt(this.textContent);
      const hasil = getHasil(pilihanComputer, pilihanPlayer);
      if (pilihanPlayer === pilihanComputer) {
        info.innerHTML = hasil;
        scoreWin++;
        winCount.textContent = scoreWin;
        kesempatan = 0;
      }
      if (kesempatan !== 0) {
        info.innerHTML = hasil + `<br>Sisa kesempatan: ${kesempatan - 1}`;
        console.log(pilihanComputer);
        console.log(pilihanPlayer);
        console.log(hasil);
        kesempatan--;
      }
      if (pilihanPlayer === pilihanComputer) return;
      if (kesempatan === 0 && pilihanPlayer !== pilihanComputer) {
        info.innerHTML =
          "Game Over! <br>Kamu kehabisan kesempatan.<br> jawabannya ialah : " +
          pilihanComputer;
        scoreLose++;
        loseCount.textContent = scoreLose;
      }
    }
  });

  //   tombol reset
  tombolReset.addEventListener("click", function () {
    kesempatan = 3;
    pilihanComputer = getPilihanComputer();
    info.innerHTML =
      "Pilih angkamu dan tebak berapa angka ku!!<br>Kamu punya 3 Kesempatan";
  });
});
