// 문제 설명
// 정수 number와 n, m이 주어집니다.
// number가 n의 배수이면서 m의 배수이면 1을 아니라면 0을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 10 ≤ number ≤ 100
// 2 ≤ n, m < 10

// 입출력 예
// number	n	m	result
// 60	2	3	1
// 55	10	5	0

//주어진 함수
// function solution(number, n, m) {
//     var answer = 0;
//     return answer;
// }

// 풀이
function solution(number, n, m) {
    if(number % n == 0 && number % m == 0){
        var answer = 1;    
    }else{
        var answer = 0;
    }
    return answer;
}

//삼항조건 연산자(조건부 연산자))
function solution(number, n, m) {
    return (number%n == 0) ? (number%m == 0) ? 1 : 0 : 0;
}