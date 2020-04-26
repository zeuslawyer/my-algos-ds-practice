function rand7() {
  return Math.floor(Math.random() * (7 - 1 + 1)) + 1;
}

function rand5() {
  let result = rand7();

  return result <= 5 ? result : rand5();
}

for (let i = 0; i < 10; i++) {
  console.log(rand5());
}
