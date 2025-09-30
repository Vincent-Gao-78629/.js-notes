const sentence = "i suck aTTTTTsssssssssssss coding";
function engorfr(sentence) {
  let snum = 0;
  let tnum = 0;
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i].toLowerCase();

    if (letter === "s") {
      snum = snum + 1;
    } else if (letter === "t") {
      tnum = tnum + 1;
    }
  }
  if (snum >= tnum) {
    console.log("french");
  } else console.log("english");
}

engorfr(sentence);
