const spaces = 5;
const yesterday = "CC..C";
const today = "C.C.C";

function samespots(yesterday, today, spaces) {
  let same = 0;
  for (let i = 0; i < spaces; i++) {
    if (yesterday[i] === "C" && today[i] === "C") {
      same = same + 1;
    }
  }
  console.log(same);
}

samespots(yesterday, today, spaces);
