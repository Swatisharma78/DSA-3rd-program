function dynamic(l, m) {
  let dp = Array(l + 1).fill(-1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = Array(m + 1).fill(-1);
  }
  return dp;
}

function findit(str1, str2, m, n, dp) {
  if (m == 0 || n == 0) return 0;
  if (dp[m][n] != -1) return dp[m][n];
  if (str1[m - 1] == str2[n - 1])
    return 1 + findit(str1, str2, m - 1, n - 1, dp);
  else {
    return (dp[m][n] = max(
      findit(str1, str2, m - 1, n, dp),
      findit(str1, str2, m, n - 1, dp)
    ));
  }
}
function max(a, b) {
  return a > b ? a : b;
}

function runProgram(input) {
  input = input.trim().split("\n");
  let str1 = input[0].trim();
  let str2 = input[1].trim();
  let m = str1.length;
  let n = str2.length;
  let dp = dynamic(m, n);
  console.log(findit(str1, str2, m, n, dp));
}
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
 