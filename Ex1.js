var num = Number(prompt("Introdueix un numero:"));

if (num%3 == 0) {
    document.write("El numero introduit es multiple de 3");
}else if (num%7 == 0){
    document.write("El numero introduit es multiple de 7");;
}else{
    document.write("El numero introduit no es multiple de 7 ni de 3");
}