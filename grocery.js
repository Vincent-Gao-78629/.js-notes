const cart = [
  { name: "Apples", price: 3.5, quantity: 4 },
  { name: "Milk", price: 4.75, quantity: 2 },
  { name: "Steak", price: 15.99, quantity: 3 },
  { name: "Cereal", price: 5.25, quantity: 1 },
  { name: "Bananas", price: 1.25, quantity: 6 },
];

/* function calculateTotal(cart) {
  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    let totalPrice = 0;
    let totalCartPrice = 0;
    if (item.price < 5) {
      item.price *= 0.95;
    }
    totalPrice += item.price * item.quantity;
    totalCartPrice += totalPrice;
    if (totalCartPrice > 100) {
      totalCartPrice *= 0.9;
    }
    console.log(totalCartPrice.toFixed(2));
    return totalCartPrice;
  }
}
calculateTotal(cart); */
function Total(cart) {
  let total = 0;
  cart.forEach((item) => {
    let itemPrice = item.price;
    if (itemPrice < 5) {
      itemPrice *= 0.95;
    }
    total += itemPrice * item.quantity;
  });
  if (total > 100) {
    total *= 0.9;
  }
  console.log(total.toFixed(2));
  return total;
}

Total(cart);
