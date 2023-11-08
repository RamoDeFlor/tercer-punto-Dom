document.addEventListener("DOMContentLoaded", function () {
    const tarjetasContainer = document.getElementById("tarjetas");

    // Datos de ejemplo para las tarjetas
    const datosTarjetas = [
        {
            titulo: "Tarjeta 1",
            contenido: "Contenido de la tarjeta 1."
        },
        {
            titulo: "Tarjeta 2",
            contenido: "Contenido de la tarjeta 2."
        },
        {
            titulo: "Tarjeta 3",
            contenido: "Contenido de la tarjeta 3."
        }
    ];

    // Función para crear una tarjeta y agregarla al contenedor
    function crearTarjeta(titulo, contenido) {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h3>${titulo}</h3>
            <p>${contenido}</p>
        `;

        // Manejar clic en la tarjeta para expandirla
        card.addEventListener("click", function () {
            card.classList.toggle("expandida");
        });

        tarjetasContainer.appendChild(card);
    }

    // Generar las tarjetas
    datosTarjetas.forEach((tarjeta) => {
        crearTarjeta(tarjeta.titulo, tarjeta.contenido);
    });
});
