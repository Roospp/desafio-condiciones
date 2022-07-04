// function 1

function mark(img1) {
    let image = document.getElementById(img1).style.border;

    if (image === "") {
        document.getElementById(img1).style.border = "3px solid red";
    } else {
        document.getElementById(img1).style.border = "";
    }
}


//function 2

function calcular() {

    let cantidad1 = document.getElementById("totalstickers1").value;
    let cantidad2 = document.getElementById("totalstickers2").value;
    let cantidad3 = document.getElementById("totalstickers3").value;
    let frase = document.getElementById("frase");
    if (cantidad1.trim() === "") { cantidad1 = 0 }
    if (cantidad2.trim() === "") { cantidad2 = 0 }
    if (cantidad3.trim() === "") { cantidad3 = 0 }
    cantidad1 = parseInt(cantidad1);
    cantidad2 = parseInt(cantidad2);
    cantidad3 = parseInt(cantidad3);

    if (cantidad1 !== 0 || cantidad2 !== 0 || cantidad3 !== 0) {
        let total = cantidad1 + cantidad2 + cantidad3;
        total <= '10' ? frase.innerHTML = "llevas " + total + " stickers" : frase.innerHTML = "llevas demsiados stickers"
    } else if (cantidad1 === 0 || cantidad2 === 0 || cantidad3 === 0) {
        frase.innerHTML = "debes ingresar stickers";
    }
}


// function 3

function calcular2() {
    let number1 = document.getElementById("numberlist1").value;
    let number2 = document.getElementById("numberlist2").value;
    let number3 = document.getElementById("numberlist3").value;


    let total = number1 + number2 + number3;

    let clave = document.getElementById("clave");

    if (total === '911') {
        clave.innerHTML = "contraseña correcta";
    } else if (total === '714') {
        clave.innerHTML = "contraseña 2 correcta";
    } else {
        clave.innerHTML = "contraseña incorrecta";
    }
}