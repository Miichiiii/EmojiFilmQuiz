
const readline = require("readline");

const raetselListe = [
  { emojis: "🧙‍⚡📚", antwort: "harry potter" },
  { emojis: "🚀🤠🐴", antwort: "toy story" },
  { emojis: "👨‍🍳🐀", antwort: "ratatouille" },
  { emojis: "🐘🎪", antwort: "dumbo" },
  { emojis: "🦁👑", antwort: "der könig der löwen" },
  { emojis: "❄️⛄👭", antwort: "die eiskönigin" },
  { emojis: "🧸📦", antwort: "ted" },
  { emojis: "🦕🌋", antwort: "jurassic park" },
  { emojis: "🐟🔍", antwort: "findet nemo" },
  { emojis: "🧑‍🚀🌕", antwort: "interstellar" },
  { emojis: "🎈🏠👴", antwort: "oben" },
  { emojis: "🧑🕷️", antwort: "spider man" },
  { emojis: "🦇🌃", antwort: "batman" },
  { emojis: "🧙‍♂️💍", antwort: "der herr der ringe" },
  { emojis: "👸🌹🐻", antwort: "die schöne und das biest" },
  { emojis: "👩🏻🍎🧙‍♀️", antwort: "schneewittchen" },
  { emojis: "🐍🚌🛫", antwort: "snakes on a plane" },
  { emojis: "🚢🧊💔", antwort: "titanic" },
  { emojis: "👽📞🏠", antwort: "e.t." },
  { emojis: "🐷👮‍♂️🏃", antwort: "zoomania" },
  { emojis: "🧛🩸🌙", antwort: "twilight" },
  { emojis: "🚗⚡🏁", antwort: "cars" },
  { emojis: "🐼🥋🐉", antwort: "kung fu panda" },
  { emojis: "👻🔑🏠", antwort: "ghostbusters" },
];


let aktuellesRaetsel = 0;
let punkte = 0;
let richtigeAntworten = 0;
let falscheAntworten = 0;

const eingabeSchnittstelle = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function frageRaetsel() {
  const frage = raetselListe[aktuellesRaetsel];
  console.log(`\nRätsel ${aktuellesRaetsel + 1}: ${frage.emojis}`);
  eingabeSchnittstelle.question("Deine Antwort: ", (userInput) => {
    const nutzerAntwort = userInput.trim().toLowerCase();
    
    if (nutzerAntwort === frage.antwort) {
      console.log("✅ Richtig! 🎉");
      punkte += 10;
      richtigeAntworten++;
    } else {
      console.log(`❌ Falsch! Die korrekte Antwort wäre: "${frage.antwort}"`);
      falscheAntworten++;
    }

    console.log(
      `Punkte: ${punkte} | Richtige Antworten: ${richtigeAntworten} | Falsche Antworten: ${falscheAntworten}`
    );

    aktuellesRaetsel++;

    if (aktuellesRaetsel < raetselListe.length) {
      frageRaetsel();
    } else {
      console.log("\n🎉 Das Spiel ist beendet!");
      console.log(`Endpunktzahl: ${punkte} Punkte`);
      eingabeSchnittstelle.close();
    }
  });
}


console.log("Willkommen zum Film-Emoji-Rätselspiel!");
frageRaetsel();
