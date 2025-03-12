// 문제 설명
// 정수 배열 numbers와 정수 num1, num2가 매개변수로 주어질 때,
// numbers의 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을 return 하도록
// solution 함수를 완성해보세요.

// 제한사항
// 2 ≤ numbers의 길이 ≤ 30
// 0 ≤ numbers의 원소 ≤ 1,000
// 0 ≤num1 < num2 < numbers의 길이

// 입출력 예
// numbers	num1	num2	result
// [1, 2, 3, 4, 5]	1	3	[2, 3, 4]
// [1, 3, 5]	1	2	[3, 5]


// 주어진 함수
function solution(numbers, num1, num2) {
    var answer = numbers.slice()
    return answer;
}


// 풀이
function solution(numbers, num1, num2) {
    var answer = numbers.slice(num1, num2+1);
    return answer;
  }