let total = 0;
for (let index = 2; index < process.argv.length; index += 1) {
  total += Number(process.argv[index]);
}
console.log(total);
