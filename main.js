let target = document.querySelector("#dynamic");
let stringArr = ["삶은 개구리 모임에 오신 것이 맞나요?", "환영합니다! 잘 찾아오셨네요","허가된 이용자만 접근하실 수 있습니다.", "아이것도대충하고쉬어야지그냥아.ㄴ아 잊어주세요", "Boiled Frog Syndrome Club"];
let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
let selectStringArr = selectString.split("");


function randomString(){
    let stringArr = ["삶은 개구리 모임에 오신 것이 맞나요?", "환영합니다! 잘 찾아오셨네요","허가된 이용자만 접근하실 수 있습니다.", "???:아이것도대충하고쉬어야지그냥아.ㄴ아 잊어주세요", "Boiled Frog Syndrome Club"];
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
    let selectStringArr = selectString.split("");   

    return selectStringArr;
}

// 리셋
function resetTyping(){
    target.textContent = "";
    dynamic(randomString());
}

// 한글짜식 텍스트 출력 
function dynamic(randomArr) {

   
    if (randomArr.length > 0) {
        target.textContent += randomArr.shift();
        setTimeout(function(){
            dynamic(randomArr);
        },80);
        }else{
            setTimeout(resetTyping, 1000);
        }
    }


dynamic(randomString());

console.log(selectString);
console.log(selectStringArr);


// 커서 깜빡임
function blink(){
        target.classList.toggle("active");

    }
    // toggle 토글 설정

setInterval(blink, 500);
// 0.5초 간격으로 깜빡




// 지문누르면 화면 전환

function toggleScreen() {
    var First = document.querySelector('.first');
    var Second = document.querySelector('.second');
    // var bG = document.querySelector('body')
    
    First.classList.toggle('onblock');
    
   if (Second.style.display === 'block') {
    Second.style.display = 'none';
} else {
    Second.style.display = 'block';
};


    Second.style.background = 'url(pepe.gif)';
   


}

