const poster = [
  {
    bild: "rentner.png",
    platzhalter: false,
    titel: "Herr Schneider: Gesundheitsfragen",
    beschreibung:
      "Herr Schneider nutzt das Internet für Nachrichten und Gesundheitsfragen. Er hat wenig technisches Fachwissen, geht aber davon aus, dass digitale Systeme kompetent und objektiv sind.",
    risiko:
      "Risiko: Eine KI ist kein Arzt. Sie kann Symptome übersehen oder falsche medizinische Ratschläge geben. Blindes Vertrauen in die Maschine kann gesundheitsgefährdend sein."
  },
  {
    bild: "",
    platzhalter: true,
    titel: "Lena: Emotionale Unterstützung",
    beschreibung:
      "Lena hat eine Trennung hinter sich und fühlt sich einsam. In dieser emotionalen Ausnahmesituation nutzt sie KI als ständige, zuhörende Ansprechpartnerin.",
    risiko:
      "Risiko: KI hat keine echte Empathie und ist nicht psychologisch geschult. Sie simuliert Mitgefühl. Das kann echte Hilfe verzögern."
  },
  {
    bild: "",
    platzhalter: true,
    titel: "Leon: Leistungsdruck in der Schule",
    beschreibung:
      "Leon steht unter Leistungsdruck. Anfangs nutzt er ChatGPT nur als Nachhilfe. Weil seine Noten besser werden, entwickelt er sehr starkes Vertrauen.",
    risiko:
      "Risiko: Leon übernimmt Antworten ungeprüft. Nach einer falschen KI-Antwort kippt sein Vertrauen komplett, und er hält KI für nutzlos."
  }
];

let aktuellesPoster = 0;

function posterAnzeigen() {
  const daten = poster[aktuellesPoster];
  const anzeige = document.getElementById("posterAnzeige");

  if (daten.platzhalter) {
    anzeige.innerHTML = `
      <div class="poster-placeholder">
        <span>Poster folgt</span>
      </div>
    `;
  } else {
    anzeige.innerHTML = `
      <img src="${daten.bild}" alt="${daten.titel}">
    `;
  }

  document.getElementById("posterTitel").textContent = daten.titel;
  document.getElementById("posterBeschreibung").textContent = daten.beschreibung;
  document.getElementById("posterRisiko").textContent = daten.risiko;
}

function naechstesPoster() {
  aktuellesPoster = (aktuellesPoster + 1) % poster.length;
  posterAnzeigen();
}

function vorherigesPoster() {
  aktuellesPoster = (aktuellesPoster - 1 + poster.length) % poster.length;
  posterAnzeigen();
}

posterAnzeigen();

document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    const ziel = document.querySelector(this.getAttribute("href"));

    if (ziel) {
      ziel.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});
