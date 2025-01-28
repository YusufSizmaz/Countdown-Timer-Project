const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

//Yeni yıl 1 ocak 2026 olarak atadım
const newYears = "1 Jan 2026";

//countdown adında fonksiyon oluşturdum. içinde değişkenlerde yeni tarih ve mevcut tarihi aldım. totalsüre adındaki değişkende yeni yıldan mevcut günü çıkarttım.
// ve 1000'e böldüm. Gün saat dakika saniye olarak değişken atadım. Bu değişkenleri Math.floor ile matametik fonksiyonu kullanıp sonucları ilgili alanlara böldüm.
// dönen değerleri .innerHTML e DOM'a  gün saat dakika saniye olarak değerleri yazdım.
// doundown fonksiyonunu çağırıdm    setInterval ile 1000ms yani 1 saniye de bir çalışmasını sağlayan işlemi yazdım.
function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minsEl.innerHTML = mins;
  secondsEl.innerHTML = seconds;
}

countdown();

setInterval(countdown, 1000);
