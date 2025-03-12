// 문제 설명
// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

// 제한 사항
// n은 0 이상 3000이하인 정수입니다.

// 입출력 예
// n	return
// 12	28
// 5	6

// 주어진 함수
function solution(n) {
    var answer = 0;
    return answer;
}

// 풀이
function solution(n) {
    var answer = 0;
    for(var i = 0; i <= n; i++){
        if(n % i === 0){
            answer += i;
        }
    }
    return answer;
}