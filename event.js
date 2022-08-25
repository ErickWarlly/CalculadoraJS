function somar(num1 , num2 , num3) {

    var v1 = document.getElementById('num1').value;
    var v2 = document.getElementById('num2').value;
    var v3 = document.getElementById('num3').value;

if(document.getElementById('num1').value == "" || document.getElementById('num2').value == "" || document.getElementById('num3').value == "" ){
        if(document.getElementById('num1').value == "")
        {
            alert("1º elemento sem valor");
        }
            if(document.getElementById('num2').value == "")
            {
            alert("2º elemento sem valor");
            }
                if(document.getElementById('num3').value == "")
                {
                    alert("3º elemento sem valor");
                }
            }
//var resullt = (v1 + v2+ v3)
   
    let result = parseFloat(v1) + parseFloat(v2) + parseFloat(v3);

     alert(result);

}

function media(num1 , num2 , num3) {

    var v1 = document.getElementById('num1').value;
    var v2 = document.getElementById('num2').value;
    var v3 = document.getElementById('num3').value;

    if(document.getElementById('num1').value == "" || document.getElementById('num2').value == "" || document.getElementById('num3').value == "" ){
        if(document.getElementById('num1').value == "")
        {
            alert("1º elemento sem valor");
        }
            if(document.getElementById('num2').value == "")
            {
            alert("2º elemento sem valor");
            }
                if(document.getElementById('num3').value == "")
                {
                    alert("3º elemento sem valor");
                }
            }

//var resullt = (v1 + v2+ v3) /3

    let result = (parseFloat(v1) + parseFloat(v2) + parseFloat(v3)) / 3;

    alert(result);
}

function subtrair(num1 , num2 , num3) {

    var v1 = document.getElementById('num1').value;
    var v2 = document.getElementById('num2').value;
    var v3 = document.getElementById('num3').value;

    if(document.getElementById('num1').value == "" || document.getElementById('num2').value == "" || document.getElementById('num3').value == "" ){
        if(document.getElementById('num1').value == "")
        {
            alert("1º elemento sem valor");
        }
            if(document.getElementById('num2').value == "")
            {
            alert("2º elemento sem valor");
            }
                if(document.getElementById('num3').value == "")
                {
                    alert("3º elemento sem valor");
                }
            }
    
    

//var resullt = (v1 - v2 - v3)

    let result = (v1) - parseFloat(v2) - parseFloat(v3);

    alert(result);
}


function multi(num1 , num2 , num3) {

    var v1 = document.getElementById('num1').value;
    var v2 = document.getElementById('num2').value;
    var v3 = document.getElementById('num3').value;

    if(document.getElementById('num1').value == "" || document.getElementById('num2').value == "" || document.getElementById('num3').value == "" ){
        if(document.getElementById('num1').value == "")
        {
            alert("1º elemento sem valor");
        }
            if(document.getElementById('num2').value == "")
            {
            alert("2º elemento sem valor");
            }
                if(document.getElementById('num3').value == "")
                {
                    alert("3º elemento sem valor");
                }
            }
    

//var resullt = (v1 * v2 * v3)

    let result = parseFloat(v1) * parseFloat(v2) * parseFloat(v3);

    alert(result);
}

function divis(num1 , num2 , num3) {

    var v1 = document.getElementById('num1').value;
    var v2 = document.getElementById('num2').value;
    var v3 = document.getElementById('num3').value;

    if(document.getElementById('num1').value == "" || document.getElementById('num2').value == "" || document.getElementById('num3').value == "" ){
        if(document.getElementById('num1').value == "")
        {
            alert("1º elemento sem valor");
        }
            if(document.getElementById('num2').value == "")
            {
            alert("2º elemento sem valor");
            }
                if(document.getElementById('num3').value == "")
                {
                    alert("3º elemento sem valor");
                }
            }
    

//var resullt = (v1 * v2 * v3)

    let result = parseFloat(v1) / parseFloat(v2) / parseFloat(v3);

    alert(result);
}