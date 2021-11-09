let q;
let p;
let d;
let n;

function isPrime (num) {
   for (let i = 3; i <= Math.sqrt(num); i++) {
    if ((num % i) == 0) {
      return false;
    }
  }
  return true;
}

function updateQandPandN (initialQ, initialP) {
  q = initialQ
  p = initialP

  console.log(`q ${q}`)
  console.log(`p ${p}`)
  
  while (!isPrime(q)) {
    q++;
  }

  while (!isPrime(p)) {
    p++;
  }

  n = q * p
  console.log(`n ${n}`)
}

function gcd(a,b) {
    a = Math.abs(a);
    b = Math.abs(b);
    if (b > a) {var temp = a; a = b; b = temp;}
    while (true) {
        if (b == 0) {
          return a;
        }
        a %= b;

        if (a == 0) {
          return b;
        }
        b %= a;
    }
}

function updateD(initialD) {
    d = initialD;

    while (!gcd(d, (p-1)*(q-1))) {
        d++;
    }

    console.log(`d ${d}`)

}

function updateE(initialE) {
    e = initialE

    while ((e*d) % ((p-1)*(q-1)) != 1) {
        e++
    }

    console.log(`e ${e}`)
}

function updateInfo (initialQ, initialP, initialeE) {
    updateQandPandN(initialQ, initialP)
    updateD(initialD)
    updateE(initialeE)
}

function encode (text, cuurentE, currentN) {
    const textAsNums = strToNums(text)

    return textAsNums.map(i => ((i ^ currentE) % currentN))
}

function strToNums (str) {
    let strIndexes = allIndexesOfString(str)

    return strIndexes.map(i => str.charCodeAt(i))
}

function allIndexesOfString (str) {
    return range(0, str.length - 1)
}

function range(start, end) {
    return [...Array(end - start + 1).keys()]
        .map(num => num + start)
}

function decode (text, currentD, currentN) {
    let textAsNums = strToNums(text);

    return textAsNums.map(i => (i ^ currentD) % currentN)
}

updateInfo()
