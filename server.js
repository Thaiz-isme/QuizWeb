import { readFile } from 'fs';
const data = JSON.parse(readFile('quiz1.json'));
console.log(data);
