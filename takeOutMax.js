const findSub = (array, n, k) => {
  let sum = 0;
  for (let i = 0; i < k; i++) sum += array[i];
  let max = sum;
  for (let i = k; i < n; i++) {
    sum += array[i] - array[i - k];
    max = Math.max(max, sum);
  }
  console.log(max);
};

const runProgram = (input) => {
  input = input.trim().split("\n");
  let [n, k] = input[0].trim().split(" ").map(Number);
  let array = input[1].trim().split(" ").map(Number);
  findSub(array, n, k);
};
if (process.env.USER === "swatisharma") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
 