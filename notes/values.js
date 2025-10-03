const kortnee = {
  firstName: "Kortnee",
  lastName: "Rong",
  graduated: false,
  DOB: 2010,
  siblings: ["Kortknee", "Courtnee"],
  age: function () {
    return year - this.DOB;
  },
};

console.log(kortnee.siblings);
