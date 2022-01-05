// javascript로 html코드를 출력하기

/*
    <script>
        let name = prompt('이름을 입력하세요.');
        document.write('<b><big>' + name + '</big></b>님, 환영합니다.');
    </script>
*/

// prompt() function - 사용자에게 값을 입력 받을 때 가장 쉽게 사용할 수 있는 함수

prompt(); // => "Hi!" 입력

// alert() function - web browser view에서 간단한 알림 내용을 출력

alert("hello~!");

// document.write() - web browser view print function / 결과값을 웹 브라우저 화면에 출력

let name = prompt("이름 : ");
document.write(name + "님, 어서오세유~!");

// console.log() - 괄호 안의 내용을 콘솔 창에 출력

let name = prompt("이름 : ");
console.log(name + "님, 어서오세유~!");

/*
    [JavaScript 규칙]
    1. 대소문자를 구별하여 소스를 작성
    2. 읽기 쉽게 들여쓰는 습관을 들이기
    3. 세미콜론으로 문장을 구분
    4. 소스에 메모하려면 주석을 사용
    5. 식별자는 정해진 규칙을 지켜 작성할것
    6. 예약어는 식별자로 사용할 수 없다
*/
