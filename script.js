function addBola() {
    var bola = document.createElement("div");
    bola.setAttribute("class","bola");
    //Criar div e depois atribui bola a class
    var p1 = Math.floor(Math.random() * 500);
    var p2 = Math.floor(Math.random() * 400);
    bola.setAttribute("style","left:"+p1+"px;top:"+p2+"px;");

    bola.setAttribute("onclick","estourar(this)");
    document.body.appendChild(bola);
    corRandom(bola);

}
function corRandom(bola) {
    var cor = '#' + Math.floor(Math.random()*16777215).toString(16);
    bola.style.backgroundColor = cor;
}
function estourar(obj) {
    document.body.removeChild(obj);

}
function iniciar() {
    setInterval(addBola,1000);


}