function canenter(hasKey, hasMagic, isBanned) {
  if ((hasKey || hasMagic === true) && !isBanned) {
    console.log("you can enter ");
  }
}
