const Header = (baslik, tarih, yazi) => {
  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //
  const headerDiv = document.createElement("div");
  headerDiv.classList.add("header");

  const headerSpan = document.createElement("span");
  headerSpan.classList.add("date");
  headerSpan.textContent = tarih;

  const headerH1 = document.createElement("h1");
  headerH1.textContent = baslik;

  const headerSpan2 = document.createElement("span");
  headerSpan2.classList.add("temp");
  headerSpan2.textContent = yazi;

  headerDiv.append(headerSpan, headerH1, headerSpan2);

  return headerDiv;
};

const headerEkleyici = (secici) => {
  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //
  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper"))
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))
  const header = document.querySelector(secici);
  const baslik = "Teknoloji Zamanı";
  const tarih = "11 Kasım 2022";
  const yazi = "sağdaki yazı";
  header.appendChild(Header(baslik, tarih, yazi));
};

export { Header, headerEkleyici };
