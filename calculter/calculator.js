let g=document.getElementById("Green");
let y=document.getElementById("Yellow");
let r=document.getElementById("Red");
let text=document.getElementById("ari");

g.onclick=()=>{text.style.color="Green"}
y.onclick=()=>{text.style.color="Yellow"}
r.onclick=()=>{text.style.color="Red"}


let addb=document.getElementById("btn1");
let subb=document.getElementById("btn2");
let mulb=document.getElementById("btn3");
let divb=document.getElementById("btn4");

addb.onclick=()=>{add();}
mulb.onclick=()=>{mul();}
subb.onclick=()=>{sub();}
divb.onclick=()=>{div();}

function add(){
    let a1=document.getElementById("a1").value;
    let b1=document.getElementById("b1").value;
    let c=parseFloat(a1)+parseFloat(b1);
    document.getElementById("result").value=c;
}

function sub(){
    let a1=document.getElementById("a1").value;
    let b1=document.getElementById("b1").value;
    let c=parseFloat(a1)-parseFloat(b1);
    document.getElementById("result").value=c;
}
function mul(){
    let a1=document.getElementById("a1").value;
    let b1=document.getElementById("b1").value;
    let c=parseFloat(a1)*parseFloat(b1);
    document.getElementById("result").value=c;
}
function div(){
    let a1=document.getElementById("a1").value;
    let b1=document.getElementById("b1").value;
    let c=parseFloat(a1)/parseFloat(b1);
    document.getElementById("result").value=c;
}

