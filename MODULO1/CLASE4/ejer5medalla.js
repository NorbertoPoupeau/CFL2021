let readlineSync=require("readline-sync");
let puesto=readlineSync.questionInt("indique posicion de llegada ");
switch(puesto){
    case 1:
        console.log("entregar medalla de oro");
        break;
        case 2:
            console.log("entregar medalla de plata");
            break;
            case 3:
                console.log("entregar medalla de bronce");
                break;
                default:
                    console.log("entregar mencion especial");
}
