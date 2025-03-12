// 문제
// 영문 문장을 입력받아 모음의 개수를 세는 프로그램을 작성하시오.
// 모음은 'a', 'e', 'i', 'o', 'u'이며 대문자 또는 소문자이다.

// 입력
// 입력은 여러 개의 테스트 케이스로 이루어져 있으며,
// 각 줄마다 영어 대소문자, ',', '.', '!', '?', 공백으로 이루어진 문장이 주어진다.
// 각 줄은 최대 255글자로 이루어져 있다.

// 입력의 끝에는 한 줄에 '#' 한 글자만이 주어진다.

// 출력
// 각 줄마다 모음의 개수를 세서 출력한다.

// 예제 입력 1 
// How are you today?
// Quite well, thank you, how about yourself?
// I live at number twenty four.
// #
// 예제 출력 1 
// 7
// 14

// 풀이
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

/*
How are you today?
Quite well, thank you, how about yourself?
I live at number twenty four.
#
*/
public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader bj = new BufferedReader(new InputStreamReader(System.in));
        List<String> lines = new ArrayList<>();
        String line;
        while((line = bj.readLine()) != null && !line.isEmpty()){
            lines.add(line);
        }
        lines.remove(lines.size()-1);
    }
}

