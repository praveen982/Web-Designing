function seenu()
{
    let ch=document.getElementById("img1").clientHeight;
    let cw=document.getElementById("img1").clientWidth;
    if(ch>250 || cw>250)
    {
        let k=document.getElementsByClassName("d1");
        k[0].style.overflow="scroll";
    }
    else{
        let k=document.getElementsByClassName("d1");
        k[0].style.overflow="hidden";
    }
    let va=document.getElementsByName("gen");
    if(radioV(va)=="zoom-in")
    {
        zoomin();
    }
    else if(radioV(va)=="Zoom-out"){
        zoomout();
    }
    else{
        document.getElementById("img1").style.width="250";
        wid=250;
        document.getElementById("img1").style.height="250";
    }
}
let wid=250;
function zoomin()
{
    let speed=parseInt(document.getElementById("speed").value)
    document.getElementById("img1").style.width=wid+speed;
    console.log(speed)
    document.getElementById("img1").style.height=wid+speed;
    wid=wid+speed;
}
function zoomout()
{    
    let speed=parseInt(document.getElementById("speed").value)
    document.getElementById("img1").style.width=wid-25;
    document.getElementById("img1").style.height=wid-25;
    wid=wid-speed;
}

function chpoiter(){
    let va=document.getElementsByName("gen");
    if(radioV(va)=="zoom-in")
    {
        let k=document.getElementsByClassName("d1");
        k[0].style.cursor="zoom-in";
    }
    else if(radioV(va)=="Zoom-out"){
        let k=document.getElementsByClassName("d1");
        k[0].style.cursor="zoom-out";
    }
    else{
        let k=document.getElementsByClassName("d1");
        k[0].style.cursor="auto";
    }
}
function chpoiter1(){
    
}

function radioV(n)
{
    for(let i=0;i<n.length;i++)
    {
        if(n[i].checked===true)
        {
            return n[i].value;
        }
    }
}