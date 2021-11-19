'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    const AMPMindex = s.indexOf("M") - 1;
    const AMPM = s.substring(AMPMindex);
    const time = s.substring(0,AMPMindex);
    let [hours, minutes, seconds] = time.split(":");
    if (AMPM === "AM" && hours === "12") hours = "00";
    if (AMPM === "PM" && hours < 12) hours = parseInt(hours) + 12;
    return `${hours}:${minutes}:${seconds}`;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
