function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}

function assertArrayEquals(a, b, desc) {
  if (a.length !== b.length) {
    console.log(`${desc} ... FAIL: ${a} length != ${b} length`);
    return;
  }

  const len = a.length;

  for (let i = 0; i < len; i++) {
    let x = a[i];
    let y = b[i];
    if (x === y) {
      console.log(`${desc} at index ${i} ... PASS`);
    } else {
      console.log(`${desc}  at index ${i}... FAIL: ${x} != ${y}`);
    }
  }
}

module.exports = { assertEquals, assertArrayEquals };
