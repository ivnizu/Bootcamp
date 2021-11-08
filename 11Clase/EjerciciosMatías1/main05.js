const log = console.log;

function MostrarDiaHora() {
    let hoy = new Date;
    let hora = new Date;

    hoy = hoy.getDay();

    hora = hora.getHours() + ':' + hora.getMinutes();

    let semana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes","Sábado"];

    log(semana[hoy]);
/*
    switch (hoy) {
        case 1: log("Hoy es: Lunes");
            break;
        case 2: log("Hoy es: Martes");
            break;
        case 3: log("Hoy es: Miércoles");
            break;
        case 4: log("Hoy es: Jueves");
            break;
        case 5: log("Hoy es: Viernes");
            break;
        case 6: log("Hoy es: Sábado");
            break;
        case 7: log("Hoy es: Domingo");
            break;
        default: log("Perdón, acá pasó algo raro");
    }
*/
    log("Hora actual: " + hora);
}

MostrarDiaHora();
