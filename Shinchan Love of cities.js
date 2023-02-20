//Enter code here
function runProgram(input){
    input=input.split("\n")
    var test=+input[0]
    var l=1;
    
    for(var i=0; i<test; i++)
    {
        var [n,c]=input[l++].split(" ").map(Number)
        var arr=input[l++].split(" ").map(Number)
        
        ShinchanLove(n,c,arr)
    }
    function ShinchanLove(n,c,arr){
        
        arr=arr.sort((a,b)=>a-b)
        
        var j=n-1;
        var i=0;
        var sam=0;
        
        while(j>0 && i<n)
        {
            var sub=arr[i+1]-arr[i]
            
            sam=sam+(c*sub)
           
            i++
            j--
        }
        console.log(sam)
    }
        
    }
    if (process.env.USER === "swatisharma"){
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
       