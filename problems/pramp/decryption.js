// pramp decryption
// step1:  convert to Ascii
// step 2:  add +1 if index 0 ...OR... add updated value of prev index
// step 3:  subtract 26 until within range

// encryption formula e[ind] = d[ind] + step2[ind] - 26*m
// decryption formula :   d[ind] = e[ind] - step2[ind] + 26*m

// step 2 formula :  step2[i+1] = step2[i] + ascii(i)

function decrypt(word) {
  let decrypted = '';
  let step2Val = 1;
  let a = 'a'.charCodeAt(0);

  for (let i = 0; i < word.length; i++) {
    let charCode = word.charCodeAt(i); // step 1

    charCode = charCode - step2Val; // step 2

    while (charCode < a) {
      charCode += 26; // step 3: bring within range of a-z
    }

    decrypted += String.fromCharCode(charCode);

    // update value of step 2 for next iteration
    step2Val = step2Val + charCode;
  }

  return decrypted;
}

let ans = decrypt('dnotq');
console.log(ans);
