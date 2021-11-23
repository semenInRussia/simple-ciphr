const amountOfCharsBeforeLetterInASCII = 96;
const INIT_VAL_OF_GENERATE_KEYS_LIMIT = 100;


function generateRandomKeys() {
    let randomState = randomBefore(INIT_VAL_OF_GENERATE_KEYS_LIMIT);

    return generateKeys(randomState);
}


function generateKeys(state) {
    const p = generateP(state);
    const q = generateQ(state + 20);
    const n = generateN(p, q);
    const d = generateD(100, p, q);
    const e = generateE(100, d, p, q);

    return {
        encryptKey: [e, n],
        decryptKey: [d, n]
    };
}


function generateP(initVal) {
    return generatePrimeNumber(initVal);
}


function generateQ(initVal) {
    return generatePrimeNumber(initVal);
}


function generateN(p, q) {
    return p * q;
}


function generatePrimeNumber(initialVal) {
    let res = toEven(initialVal);

    while (!isPrime(res)) {
        res += 2; // This is ignore odd numbers
    }

    return res;
}


function toEven(num) {
    if (num % 2 == 0) {
        return num + 1;
    }

    else {
        return num;
    }
}


function isPrime (num) {
    for (let i = 3; i <= Math.sqrt(num); i++) {
        if ((num % i) == 0) {
            return false;
        }
    }
    return true;
}


function generateD(initVal, p, q) {
    let res = initVal;

    while (gcd((p-1) * (q -1), res) != 1) {
        res++;
    }

    return res;
}


function gcd(a,b) {
    a = Math.abs(a);
    b = Math.abs(b);
    if (b > a) {
        const temp = a;
        a = b; b = temp;
    }
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


function generateE(initVal, d, p, q) {
    let e = initVal;

    while ((e*d) % ((p-1)*(q-1))!=1) {
        e++;
    }

    return e;
}


function randomBefore(n) {
    return Math.floor(Math.random() * n);
}


function encode (text, encryptKey) {
    const textAsNums = strToNums(text);
    const encodedNums = encodeNums(textAsNums, encryptKey);

    return bigIntsToStr(encodedNums);
}


function encodeNums(nums, encryptKey) {
    const [e, n] = encryptKey;

    return nums.map(i => bigIntsMod(bigIntsPow(i, e), n));
}


function strToNums (str) {
    const strIndexes = allIndexesOf(str);

    return strIndexes.map(i => str.charCodeAt(i));
}


function allIndexesOf (arr) {
    return range(0, arr.length - 1);
}


function range(start, end) {
    return [...Array(end - start + 1).keys()]
        .map(num => num + start);
}


function bigIntsMod(a, b) {
    return BigInt(a) % BigInt(b);
}


function bigIntsPow(a, b) {
    return BigInt(a) ** BigInt(b);
}


function bigIntsToStr(bigInts) {
    const nums = bigInts.map(Number);

    return numsToStr(nums);
}


function numsToStr (nums) {
  return String.fromCharCode(...nums);
}


function decode (text, decryptKey) {
    const encodedNums = strToNums(text);
    const decodedNums = decodeNums(encodedNums, decryptKey);

    return bigIntsToStr(decodedNums);
}


function decodeNums(nums, decryptKey) {
    const [d, n] = decryptKey;

    return nums.map(
        i => bigIntsMod(bigIntsPow(i, d), n)
    );
}


const keys = generateRandomKeys();

const str = "nikita!";

const encoded = encode(str, keys.encryptKey);
const decoded = decode(encoded, keys.decryptKey);

console.log("private = ", keys.decryptKey);
console.log("public  =", keys.encryptKey)

console.log(encoded);
console.log(decoded);
