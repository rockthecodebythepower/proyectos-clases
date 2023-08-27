//? vamos a irnos de vacaciones para ello vamos a plantear a donde podemos ir, tenemos pensado irnos a portugal o a las islas figgi. Dependiendo de cuanto haya podido ahorrar y otro tipo de cosas que iremos mirando 

// ahorro < 2000 -> portugal -> figgi
// vuelos 20/08/2023 
// hotel 

let ahorro = 3000;
let vuelos = "figgi";
let hotel = "Portugal figgi";

    // vuelos incluye Portugal dará true
if (ahorro >= 2000 && vuelos.includes("figgi") && hotel.includes("figgi")) {
    // si he ahorrado menos de 2000 y hay vuelos a portugal y hay hoteles disponibles en portugal pues me voy a portugal
    console.log("me voy a figgi de vacaciones");
} else if (vuelos.includes("Portugal") && hotel.includes("Portugal")) {
    console.log("me voy a portugal de vacaciones");
} else {
    console.log("no me puedo ir de vacaciones");
}