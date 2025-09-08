let nao = document.getElementById("nao");
let caixa = document.getElementById("caixa");

function moverBotao(){
    let maxX = caixa.clientWidth - nao.offsetWidth;
    let maxY = caixa.clientHeight - nao.offsetHeight;
    let x = Math.random()* maxX;
    let y = Math.random()* maxY;

    nao.style.left = x + "px";
    nao.style.top = y + "px";

}

nao.addEventListener("mouseover", moverBotao);
