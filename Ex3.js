var nota = Number(prompt("Introdueix la nota de l'alumne:"));

switch (true) {
    case nota>=0 && nota < 5:
        document.write("L'alumne ha suspes");
        break;

    case nota>=5 && nota < 6:
        document.write("L'alumne te un suficient");
        break;

    case nota>=5 && nota < 6:
        document.write("L'alumne te un suficient");
        break;

    case nota>=6 && nota < 7:
        document.write("L'alumne te un be");
        break;

    case nota>=7 && nota < 9:
        document.write("L'alumne te un notable");
        break;

    case nota>=9 && nota <= 10:
        document.write("L'alumne te un excelent");
        break;
    
        
    default:
        document.write("La nota introduida no es valida");
        break;
}