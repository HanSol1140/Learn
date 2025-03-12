// 문제 설명
// 정수가 담긴 리스트 num_list가 주어질 때,
// num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 1 ≤ num_list의 길이 ≤ 100
// 0 ≤ num_list의 원소 ≤ 1,000

// 입출력 예
// num_list	result
// [1, 2, 3, 4, 5]	[2, 3]
// [1, 3, 5, 7]	[0, 4]


// 주어진 함수
function solution(num_list) {
    let a = 0;
    let b = 0;
    for(i of num_list){
        if(i % 2 == 0){
            a++;
        }else{
            b++;
        }
    }
    var answer = [a,b];
    return answer;
}

