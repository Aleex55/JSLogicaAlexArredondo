var x = "Yo tengo 20 cartas y mi hermano tiene 17."
var num = s.replace(/[^0-9]/ig,"");

var num2 = 0;

for (let i = 0; i < num.length; i++) {
    num2 += Number(num.charAt(i));
}

document.write("La suma dels numeros es es: " + num2);