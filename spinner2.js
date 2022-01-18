const lines = ["|", "/", "-", "\\", "|"];
let timer = 0;

const spins = (numOfSpins) => {
  for (let spins = 0; spins < numOfSpins; spins++) {
    for (let i = 0; i < lines.length; i++) {
      setTimeout(() => {
        process.stdout.write(`\r${lines[i]}     `);
      }, timer);
      timer += 200;
    }
  }
};

spins(2);

// OLD VERSION:
// setTimeout(() => {
//   process.stdout.write("\r|     ");
// }, 100);

// setTimeout(() => {
//   process.stdout.write("\r/     ");
// }, 300);

// setTimeout(() => {
//   process.stdout.write("\r-     ");
// }, 500);

// setTimeout(() => {
//   process.stdout.write("\r\\    ");
// }, 700);

// setTimeout(() => {
//   process.stdout.write("\r|    ");
// }, 900);

// setTimeout(() => {
//   process.stdout.write("\r/    ");
// }, 1100);

// setTimeout(() => {
//   process.stdout.write("\r-    ");
// }, 1300);

// setTimeout(() => {
//   process.stdout.write("\r\\    ");
// }, 1500);

// setTimeout(() => {
//   process.stdout.write("\r|    \n");
// }, 1700);
