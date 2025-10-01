const P = 1; //paint
const B = 2; //amount per badge
const D = 2; //dollar

function rocket(P, B, D) {
  let money = 0;
  let leftover = P % B;
  let badge = Math.floor(P / B);
  let earning = badge * D;
  money += earning;
  money += leftover;
  console.log(money);
}

rocket(1000, 2, 3);
