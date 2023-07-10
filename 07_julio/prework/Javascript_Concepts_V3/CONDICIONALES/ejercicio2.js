// Este ejercicio dirigirá a los clientes a la barra de bebidas o a la de comidas, para ello el cliente puede pedir vino, cerveza, refresco, agua. Si pide un cerveza o vino se le dirige a la barra y si no pues se le dirige a la tienda.

let pedido = "te";

if (pedido !== "refresco" && pedido !== "cerveza" && pedido !== "vino" && pedido !== "agua") {
    console.log("no tenemos eso en la tienda");
} else {
    if (pedido === "cerveza" || pedido === "vino") {
        console.log("Te dirijo a la barra");
    } else {
        console.log("Te dirijo a la tienda");
    }
}

