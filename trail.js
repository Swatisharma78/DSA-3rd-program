const findGreater = (array,n)=>{
    let stack = [],res = [];
    for(let i = n- 1; i >= 0; i--){
     while(stack.length > 0 && stack[stack.length - 1] <= array[i]) stack.pop();
     stack.length === 0 ? res.push(-1) : res.push(stack[stack.length - 1])
        stack.push(array[i])
    }
    console.log(res.reverse().join(' '));
}

const runProgram = (input)=> {
  input = input.trim().split('\n')
   let cases = +input[0],line = 1;
   for (let i = 0; i < cases; i++) {
       let n = +input[line++],array = input[line++].trim().split(" ").map(Number);
       findGreater(array,n)
   }
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
   