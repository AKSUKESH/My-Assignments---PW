const nums = [2, 4, 5, 2, 1, 2];
const k = 2;

let count = 0;

for (const num of nums) {
    if (num === k) {
        count++;
    }
}

console.log(`The number ${k} occurs ${count} times.`);