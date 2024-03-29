function search(arr,n,k){
   
    let l=0;
    let h=n-1;
    let ans=-1;

    while(l<=h){
      let mid=Math.floor(l+(h-l)/2);
      if(arr[mid]===k){
          l=mid+1;
        return 1;
      }else if(arr[mid]>k){
          ans=mid;
        h=mid-1;
      }else{
        l=mid+1;
      }
  
    }
    return ans;
  }
  
  
  function runProgram(input) {
      // Write code here
     input=input.trim().split("\n");
     let [n,k]=input[0].trim().split(" ").map(Number);
     let arr=input[1].trim().split(" ").map(Number);
     let ans=search(arr,n,k);
   
     console.log(ans);
  
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
     