var x = Number(prompt("Introdueix un numero:"));
var resultat = 0;
var n;
for (n = 1; resultat < x; n++) {
    resultat = n + resultat;
}

n = n-1;
document.write("El numero n maxim es: " + n);