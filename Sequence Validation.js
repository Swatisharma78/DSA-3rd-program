function runProgram(input){
    input = input.trim().split('\n')
    var tc = +input[0];
    var line = 1;
    for(var i=0; i<tc; i++){
        var l = +input[line++];
        var arr = input[line++].trim().split(' ').map(Number);
        var strpop = input[line++].trim().split(' ').map(Number);
        out(arr, strpop)
    }
}
function out(arr,strpop){
    var a1 = 0;
    var a2 = 0;
    var so = [];
    so.push(arr[a1++]);
    while(a2<strpop.length)
    {
        if(so[so.length-1]!==strpop[a2])
        {
            if(a1<arr.length)
            {
                so.push(arr[a1++])
            }
            else
            {
                a2==strpop.length
                break;
            }
        }else if(so[so.length-1]==strpop[a2])
        {
            so.pop();
            a2++;
        }
    }
    if(so.length==0)
    {
        console.log(1)
    }
    else
    {
        console.log(0)
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