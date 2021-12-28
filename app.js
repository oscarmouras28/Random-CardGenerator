let divup=document.body.querySelector(".card-pintaup")
let divcenter=document.body.querySelector(".card-number")
let divdown=document.body.querySelector(".card-pintadown")
let pintas=["♥","♠","♣","♦"];
let numbers=["1","2","3","4","5","6","7","8","9","10","J","Q","K",];
window.onLoad= () => {
    let i = document.createElement("i");
    let i2 = document.createElement("i");
    let p = document.createElement("p");
    //pinta{
    let pinta = Math.floor(Math.random()*pintas.length)+0;
    if(pintas[pinta]=="♥" || pintas[pinta]=="♦"){
        i.innerHTML=pintas[pinta];
        i.style.color="red"
        i.style.fontSize="100px"
        divup.appendChild(i);
        i2.innerHTML=pintas[pinta];
        i2.style.color="red"
        i2.style.fontSize="100px"
        i2.style.msTransform="rotate(56deg)"
        divdown.appendChild(i2);
    }else{
        i.innerHTML=pintas[pinta];
        i.style.fontSize="100px"
        divup.appendChild(i);
        i2.innerHTML=pintas[pinta];
        i2.style.fontSize="100px"
        i2.style.msTransform="rotate(56deg)"
        divdown.appendChild(i2);
    }
    //}
    let numero=Math.floor(Math.random()*numbers.length)+0;
    p.innerHTML=numbers[numero];
    p.style.fontSize="150px";
    divcenter.appendChild(p);
};
onLoad()
