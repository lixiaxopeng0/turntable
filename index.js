let oPoniter = document.querySelectorAll('img')[0];
let oTurntable = document.querySelectorAll('img')[1];

let offon = true;
// 指针点击
function pointerClick() {
    let rdm = Math.floor(Math.random() * 10000);
    oTurntable.style.transform = `rotate(${rdm}deg)`;
    // 8个扇形 360/8=45
    let cat = 45;
    // 结束后停留的角度
    let num = 0;

    setTimeout(() => {
        num = rdm % 360;
        console.log(rdm % 360, '=rdm % 360=')
        if (num > cat * 7 && num < cat * 8) {
            alert('恭喜抽中手机！')
        } else {
            alert('谢谢参与！');
        }
        offon = !offon;
    }, 4000);

}

function init() {
    oPoniter.addEventListener('click', () => {
        if (offon) {
            offon = !offon;
            pointerClick();
        }
    });
}

init();
