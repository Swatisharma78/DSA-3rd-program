/* 
    Sum of Even numbers -6320:36:48
    Description

    You are given an array stored in a variable with the namearr, whose size is stored in a variable with the nameN

    You have to find the sum of even numbers present in the array

    For example, consider the value stored inN = 5, andarr = [2 2 2 2 1]. Then, the even numbers in the array are,2,2,2,2. Therefore, the sum is2 + 2 + 2 + 2 = 8, which is the required output


    Input
    In this question, there are multiple test cases, within each test case, but they are being handled from the backend

    The first line of the input contains the value stored inN

    The next line contains the value stored inarr


    Output
    Print the sum of even numbers present in the array

    Sample Input 1 

    2
    3
    1 2 3
    5
    2 2 2 2 1
    Sample Output 1

    2
    8
    Hint

    In the first sample test case, the value stored inN = 2, andarr = [1 2 3]. Only even number in the array is2. Therefore, the total sum of even numbers in the array is 2

    In the second sample test case, the value stored inN = 5, andarr = [2 2 2 2 1]. Then, the even numbers in the array are,2,2,2,2. Therefore, the sum is2 + 2 + 2 + 2 = 8
*/

function sumOfEvenNumbers(arr, size) {
    
    var sum = 0;

    for(let i=0;i<size;i++){
        if(arr[i]%2 == 0){
            sum+=arr[i];
        }
    }
    console.log(sum);
}


function runProgram(input) {
    input = input.trim().split('\n');
    var line = 0;
    for(let i=0;i<+input[0];i++){
        var size = +input[++line].trim();
        var arr = input[++line].trim().split(' ').map(Number);
        // console.log(arr);
        sumOfEvenNumbers(arr, size);
    }
}
if (process.env.USERNAME === "swatisharma") {
    runProgram(`2
    3
    1 2 3
    5
    2 2 2 2 1`);
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