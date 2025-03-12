// A+B - 7
 
// 시간 제한	메모리 제한	 제출	    정답	    맞힌 사람	정답 비율
// 1 초	    256 MB	    270078	    132770	   114614	    49.081%
// 문제
// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 테스트 케이스의 개수 T가 주어진다.

// 각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)

// 출력
// 각 테스트 케이스마다 "Case #x: "를 출력한 다음, A+B를 출력한다. 테스트 케이스 번호는 1부터 시작한다.

// 예제 입력 1 
// 5
// 1 1
// 2 3
// 3 4
// 9 8
// 5 2
// 예제 출력 1 
// Case #1: 2
// Case #2: 5
// Case #3: 7
// Case #4: 17
// Case #5: 7




var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString().split("\n");
var input = fs.readFileSync('C:/songhansol/Study/Z-백준/javascript/input.txt').toString().split("\r\n");
const count = Number(input[0]);
for(var i = 1; i <= count; i ++){
    var answer = input[i].split(" ").reduce((a,b) => Number(a) + Number(b));
    console.log("Case #" + i + ": " + answer);
}