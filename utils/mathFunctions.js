function isPrime(num) {
    if (num < 2) return false;
    for (let i=2; i<=Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function isPerfect(num) {
    let sum = 0;
    for (let i=1; i<num; i++) {
        if (num % i === 0) sum +=i
    }
    return sum === num;
}

function isArmstrong(num) {
    const digits = num.toString().split('');
    const sum = digits.reduce((acc, digit) => acc + Math.pow(parseInt(digit), digits.length), 0);
    return sum === num;
}

function digitSum(num) {
    return Math.abs(num).toString().split('').map((item) => Number(item)).reduce((a, b) => a+b, 0);
}

module.exports = { isPerfect, isPrime, isArmstrong, digitSum }; 