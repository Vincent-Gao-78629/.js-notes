const qnum = 5;
const studenta = ("A", "A", "D", "C", "B");
const teachera = ("A", "A", "D", "C", "B");

function grade(qnum, studenta, teachera) {
  let correct = 0;
  for (let i = 0; i < qnum; i++) {
    if (studenta[i] === teachera[i]);
    correct += 1;
  }
}

console.log(grade(qnum, studenta, teachera));
