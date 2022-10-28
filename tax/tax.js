

function calculate()
{
    let tax=0
    let age=parseFloat(document.getElementById("age").value);
    let sal=parseFloat(document.getElementById("salary").value);
    let gen=document.getElementById("gender").value;


    console.log(gen);

    document.getElementById("totals").value=sal;

    
    if(sal<=300000)
    {
        tax=(sal*0.08);
    }
    else if(sal>300000 && sal<=500000)
    {
        tax=(sal*0.10);
    }
    else if(sal>500000 && sal<=800000)
    {
        tax=(sal*0.12);
    }
    else if(sal>800000 && sal<=1000000)
    {
        tax=(sal*0.14);
    }
    else if(sal>100000)
    {
        tax=(sal*0.16);
    }
    else
    {
        console.log("Error in the Program");
    }


    if(age<18 || age>60)
    {
        tax=tax-(tax*0.50);
    }
    else if(gen=="Female")
    {
        tax=tax-(tax*0.10);
    }

    let net=sal-tax;
    document.getElementById("nets").value=net;
    document.getElementById("tax").value=tax;
}
function printNumbersWhile()
{
console.log("-----do while loop-----")
do{
    console.log(x=10);
    i++;

}while(i<=10);
}
