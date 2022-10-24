function somar(num1 , num2) {

    var v1 = document.getElementById('num1').value;
    var v2 = document.getElementById('num2').value;
    var sinal = "+";
    var historico =  document.getElementById('historico').value;

if(document.getElementById('num1').value == "" || document.getElementById('num2').value == "")
    {
        if(document.getElementById('num1').value == "")
        {
            alert("1º elemento sem valor");
        }
            if(document.getElementById('num2').value == "")
            {
            alert("2º elemento sem valor");
            }
    }
//var resullt = (v1 + v2)
   
    let result = parseFloat(v1) + parseFloat(v2);

     document.getElementById("num3").value = result;
     document.getElementById("historico").value = " "+v1+" "+sinal+" "+v2+" = "+result+"\n"+historico;
  

     

}

function media(num1 , num2) {

    var v1 = document.getElementById('num1').value;
    var v2 = document.getElementById('num2').value;
    var sinal = "/ 2";
    var historico =  document.getElementById('historico').value;

    if(document.getElementById('num1').value == "" || document.getElementById('num2').value == "")
    {
        if(document.getElementById('num1').value == "")
        {
            alert("1º elemento sem valor");
        }
            if(document.getElementById('num2').value == "")
            {
            alert("2º elemento sem valor");
            }
    }

//var resullt = (v1 + v2) /2

    let result = (parseFloat(v1) + parseFloat(v2)) / 2;

    document.getElementById("num3").value = result;
    document.getElementById("historico").value = "("+v1+" + "+v2+") "+sinal+" = "+result+"\n"+historico;
}

function subtrair(num1 , num2) {

    var v1 = document.getElementById('num1').value;
    var v2 = document.getElementById('num2').value;
    var sinal = "-";
    var historico =  document.getElementById('historico').value;

    if(document.getElementById('num1').value == "" || document.getElementById('num2').value == "")
    {
        if(document.getElementById('num1').value == "")
        {
            alert("1º elemento sem valor");
        }
            if(document.getElementById('num2').value == "")
            {
            alert("2º elemento sem valor");
            }
    }
    
    

//var resullt = (v1 - v2)

    let result = parseFloat(v1) - parseFloat(v2);

    document.getElementById("num3").value = result;
    document.getElementById("historico").value = " "+v1+" "+sinal+" "+v2+" = "+result+"\n"+historico;
}


function multi(num1 , num2) {

    var v1 = document.getElementById('num1').value;
    var v2 = document.getElementById('num2').value;
    var sinal = "*";
    var historico =  document.getElementById('historico').value;

    if(document.getElementById('num1').value == "" || document.getElementById('num2').value == "")
    {
        if(document.getElementById('num1').value == "")
        {
            alert("1º elemento sem valor");
        }
            if(document.getElementById('num2').value == "")
            {
            alert("2º elemento sem valor");
            }
    }
    

//var resullt = (v1 * v2)

    let result = parseFloat(v1) * parseFloat(v2);

    document.getElementById("num3").value = result;
    document.getElementById("historico").value = " "+v1+" "+sinal+" "+v2+" = "+result+"\n"+historico;
}

function divis(num1 , num2) {

    var v1 = document.getElementById('num1').value;
    var v2 = document.getElementById('num2').value;
    var sinal = "/";
    var historico =  document.getElementById('historico').value;

    if(document.getElementById('num1').value == "" || document.getElementById('num2').value == "")
    {
        if(document.getElementById('num1').value == "")
        {
            alert("1º elemento sem valor");
        }
            if(document.getElementById('num2').value == "")
            {
            alert("2º elemento sem valor");
            }
    }
    

//var resullt = (v1 / v2)

    let result = parseFloat(v1) / parseFloat(v2);

    document.getElementById("num3").value = result;
    document.getElementById("historico").value = " "+v1+" "+sinal+" "+v2+" = "+result+"\n"+historico;
}
