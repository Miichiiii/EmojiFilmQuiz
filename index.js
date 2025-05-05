// emojiRiddleGame.js
const readline = require("readline");

const emojiRiddles = [
  { emojis: "🧙‍⚡📚", answer: "harry potter" },
  { emojis: "🚀🤠🐴", answer: "toy story" },
  { emojis: "👨‍🍳🐀", answer: "ratatouille" },
  { emojis: "🐘🎪", answer: "dumbo" },
  { emojis: "🦁👑", answer: "der könig der löwen" },
  { emojis: "❄️⛄👭", answer: "die eiskönigin" },
  { emojis: "🧸📦", answer: "ted" },
  { emojis: "🦕🌋", answer: "jurassic park" },
  { emojis: "🐟🔍", answer: "findet nemo" },
  { emojis: "🧑‍🚀🌕", answer: "interstellar" },
  { emojis: "🎈🏠👴", answer: "oben" },
  { emojis: "🧑🕷️", answer: "spider man" },
  { emojis: "🦇🌃", answer: "batman" },
  { emojis: "🧙‍♂️💍", answer: "der herr der ringe" },
  { emojis: "👸🌹🐻", answer: "die schöne und das biest" },
  { emojis: "👩🏻🍎🧙‍♀️", answer: "schneewittchen" },
  { emojis: "🐍🚌🛫", answer: "snakes on a plane" },
  { emojis: "🚢🧊💔", answer: "titanic" },
  { emojis: "👽📞🏠", answer: "e.t." },
  { emojis: "🐷👮‍♂️🏃", answer: "zoomania" },
  { emojis: "🧛🩸🌙", answer: "twilight" },
  { emojis: "🚗⚡🏁", answer: "cars" },
  { emojis: "🐼🥋🐉", answer: "kung fu panda" },
  { emojis: "👻🔑🏠", answer: "ghostbusters" },
];

let currentRiddleIndex = 0;
let score = 0;
let correctAnswers = 0;
let wrongAnswers = 0;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askRiddle() {
  const riddle = emojiRiddles[currentRiddleIndex];
  console.log(`\nRätsel ${currentRiddleIndex + 1}: ${riddle.emojis}`);
  rl.question("Deine Antwort: ", (userInput) => {
    const userAnswer = userInput.trim().toLowerCase();
    if (userAnswer === riddle.answer) {
      console.log("✅ Richtig! 🎉");
      score += 10;
      correctAnswers++;
    } else {
      console.log(`❌ Falsch! Die richtige Antwort war: "${riddle.answer}"`);
      wrongAnswers++;
    }

    console.log(
      `Punktestand: ${score} | Richtig: ${correctAnswers} | Falsch: ${wrongAnswers}`
    );

    currentRiddleIndex++;

    if (currentRiddleIndex < emojiRiddles.length) {
      askRiddle(); // nächste Frage
    } else {
      console.log("\n🎉 Spiel beendet!");
      console.log(`Endstand: ${score} Punkte`);
      rl.close();
    }
  });
}

// Spiel starten
console.log("Willkommen zum Film-Emoji-Rätselspiel!");
askRiddle();
