const fs = require('fs');
let n = fs.readFileSync('/dev/stdin').toString();
n = parseInt(n);
for (let i = 1; i <= n; i++) {
    console.log("*".repeat(i));
}