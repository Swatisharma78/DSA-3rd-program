//Enter code here
function runProgram(input){
    input=input.split("\n")
     var test=+input[0]
     var l=1;
     
     for(var i=0; i<test; i++)
     {
        var string=input[l++]
        console.log(validPali(string))
    
    }
    function validPali(swati){
        var i=0;
        var j=swati.length-1;
        
         while(i<j)
         {
            if(swati[i]==swati[j])
        {
            i++;
            j--;
        }
        else
        {
        var sam1=i,
        sam2=i+1,
        sun1=j-1,
        sun2=j;
                    
        while(sam1<sun1 && swati[sam1]==swati[sun1])
        {
            sam1++;
            sun1--;
        }
    if(sam1>=sun1)
                    
        return "YES";
                    
    while(sam2<sun2 && swati[sam2]==swati[sun2])
        {
            sam2++;
            sun2--;
    }
        if(sam2>=sun2)
                    
            return "YES";
            return "NO";
        }
        }
    return "YES";
        }
        
    }
     
    
    if(process.env.USER === "swatisharma"){
      runProgram(``);
    }else{
      process.stdin.resume();
      process.stdin.setEncoding("ascii");
      let read = "";
      process.stdin.on("data", function (input){
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