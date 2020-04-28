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
  const x = JSON.stringify(a);
  const y = JSON.stringify(b);
  const len = a.length;

  if (x === y) {
    console.log(`${desc}  ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${x} != ${y}`);
  }
}

function assertThrowsError(func, desc) {
  try {
    func();
    console.log(`${desc} ... FAIL`);
  } catch (e) {
    console.log(`${desc} ... PASS`);
  }
}

module.exports = { assertEquals, assertArrayEquals, assertThrowsError };
