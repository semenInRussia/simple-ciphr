function isPrime (num) {
   for (let i = 3; i <= Math.sqrt(num); i++) {
    if ((num % i) == 0) {
      return false;
    }
  }
  return true;
}

function generatePrimeNumber(initialVal) {
  let res = initialVal;
  
  while (!isPrime(res)) {
    res += 1;
  }
  
  return res
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

function generateP(initVal) {
  return generatePrimeNumber(initVal)
}

function generateQ(initVal) {
  return generatePrimeNumber(initVal)
}

function generateN(p, q) {
  return p * q;
}

function generateD(initVal, p, q) {
  let res = initVal;
  
  while (!(gcd((p-1) * (q -1), res) == 1)) {
    res ++;
  }
  
  return res
}

function generateE(initVal, d, p, q) {
  let e = initVal;
  
  while ((e*d) % ((p-1)*(q-1))!=1) {
    e ++;
  }
  
  return e
}

function generateAll (initialQ, initialP, initialE, initialD) {
    let p = generateP(initialP);
    let q = generateQ(initialQ);
    let d = generateD(initialD, p, q);
    let e = generateE(initialE, d, p, q);
    
    return {
      p,
      q,
      d,
      e
    }
}

function encode (text, e, n) {
    const textAsNums = strToNums(text)

    let nums = textAsNums.map(i => ((i ^ e) % n))
    
    return numsToStr(nums)
}

function strToNums (str) {
    let strIndexes = allIndexesOf(str)

    return strIndexes.map(i => str.charCodeAt(i))
}

function numsToStr (nums) {
  return nums.map(String.fromCharCode)
}

function allIndexesOf (arr) {
    return range(0, arr.length - 1)
}

function range(start, end) {
    return [...Array(end - start + 1).keys()]
        .map(num => num + start)
}

function decode (text, currentD, currentN) {
    let textAsNums = strToNums(text);

    return textAsNums.map(i => (i ^ currentD) % currentN)
}



let p = generateP(2)
let q = generateQ(10)
let n = generateN(p, q)
let d = generateD(1, p, q)
let e = generateE(4000, d, p, q)

let str = "Nikita!"
let encoded = encode(str, e, n)
// let decoded = decode(encoded, d, n)

console.log(encoded)

