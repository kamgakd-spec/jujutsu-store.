
// ======================================
// JUJUTSU STORE - THE CURSED COLLECTION
// ======================================

// PRODUCTOS
const productos = [
    { id: 1, nombre: "Audífonos Gojo", precio: 85000, emoji: "🎧" },
    { id: 2, nombre: "Teclado Sukuna", precio: 150000, emoji: "⌨️" },
    { id: 3, nombre: "Mouse Infinity", precio: 65000, emoji: "🖱️" },
    { id: 4, nombre: "Figura Gojo Satoru", precio: 95000, emoji: "⚡" },
    { id: 5, nombre: "Figura Ryomen Sukuna", precio: 110000, emoji: "👹" },
    { id: 6, nombre: "Mousepad Jujutsu", precio: 45000, emoji: "🌀" }
];

// CARRITO
let carrito = [];
let fugaActiva = false;
let purpleActivo = false;
let vaciadoActivo = false;
let dominioActivo = false;

// ELEMENTOS HTML
const listaProductos = document.getElementById("lista-productos");
const contadorCarrito = document.getElementById("contador-carrito");
const modalCarrito = document.getElementById("modal-carrito");
const elementosCarrito = document.getElementById("elementos-carrito");
const totalCarrito = document.getElementById("total-carrito");

const botonAbrirCarrito = document.getElementById("abrir-carrito");
const botonCerrarCarrito = document.getElementById("cerrar-carrito");
const botonVaciarCarrito = document.getElementById("vaciar-carrito");

const formularioContacto = document.getElementById("formulario-contacto");
const respuestaFormulario = document.getElementById("respuesta-formulario");

// ======================================
// UTILIDADES
// ======================================

function formatearPrecio(precio) {
    return precio.toLocaleString("es-CO", {
        style: "currency",
        currency: "COP",
        maximumFractionDigits: 0
    });
}

function crearElemento(clase, padre = document.body) {
    const elemento = document.createElement("div");
    elemento.className = clase;
    padre.appendChild(elemento);
    return elemento;
}

// ======================================
// MOSTRAR PRODUCTOS
// ======================================

function mostrarProductos() {
    if (!listaProductos) return;

    listaProductos.innerHTML = "";

    productos.forEach(producto => {
        const tarjeta = document.createElement("article");

        tarjeta.className = "product-card";

        tarjeta.innerHTML = `
            <div class="product-emoji">${producto.emoji}</div>
            <h3>${producto.nombre}</h3>
            <p>${formatearPrecio(producto.precio)}</p>
            <button class="main-button" data-producto="${producto.id}">
                AGREGAR AL CARRITO
            </button>
        `;

        listaProductos.appendChild(tarjeta);
    });
}

// ======================================
// CORTES DE SUKUNA
// ======================================

function activarCortesSukuna() {
    const cantidad = Math.floor(Math.random() * 5) + 9;

    for (let i = 0; i < cantidad; i++) {
        const corte = crearElemento("sukuna-slash");

        const angulo = Math.random() * 100 - 50;
        const retraso = Math.random() * 0.22;
        const ancho = Math.random() * 280 + 260;

        corte.style.left = `${Math.random() * 100}%`;
        corte.style.top = `${Math.random() * 100}%`;
        corte.style.setProperty("--slash-angle", `${angulo}deg`);
        corte.style.setProperty("--slash-width", `${ancho}px`);
        corte.style.animationDelay = `${retraso}s`;

        if (i % 3 === 0) {
            corte.classList.add("slash-heavy");
        }

        setTimeout(() => corte.remove(), 1300);
    }

    const destello = crearElemento("slash-impact");

    setTimeout(() => destello.remove(), 550);

    console.log("SUKUNA: MALEVOLENT SLASH!");
}

// ======================================
// SUKUNA - CONSTRUCCIÓN DEL SANTUARIO
// DURACIÓN: 10 SEGUNDOS
// ======================================

function crearDientesTemplo(templo) {
    const filaSuperior = document.createElement("div");
    filaSuperior.className = "temple-teeth temple-teeth-top";

    const filaInferior = document.createElement("div");
    filaInferior.className = "temple-teeth temple-teeth-bottom";

    for (let i = 0; i < 13; i++) {
        const dienteSuperior = document.createElement("span");
        dienteSuperior.className = "temple-tooth";
        dienteSuperior.style.setProperty("--tooth-delay", `${i * 0.045}s`);
        filaSuperior.appendChild(dienteSuperior);

        const dienteInferior = document.createElement("span");
        dienteInferior.className = "temple-tooth";
        dienteInferior.style.setProperty("--tooth-delay", `${i * 0.045}s`);
        filaInferior.appendChild(dienteInferior);
    }

    templo.appendChild(filaSuperior);
    templo.appendChild(filaInferior);
}

function crearEstructuraTemplo(templo) {
    const techo = document.createElement("div");
    techo.className = "temple-roof";

    const techoSuperior = document.createElement("div");
    techoSuperior.className = "temple-roof-top";

    const techoInferior = document.createElement("div");
    techoInferior.className = "temple-roof-bottom";

    const estructura = document.createElement("div");
    estructura.className = "temple-building";

    const entrada = document.createElement("div");
    entrada.className = "temple-entrance";

    const sombra = document.createElement("div");
    sombra.className = "temple-darkness";

    const columnaIzquierda = document.createElement("div");
    columnaIzquierda.className = "temple-column temple-column-left";

    const columnaDerecha = document.createElement("div");
    columnaDerecha.className = "temple-column temple-column-right";

    techo.appendChild(techoSuperior);
    techo.appendChild(techoInferior);

    estructura.appendChild(entrada);
    estructura.appendChild(sombra);
    estructura.appendChild(columnaIzquierda);
    estructura.appendChild(columnaDerecha);

    templo.appendChild(techo);
    templo.appendChild(estructura);

    crearDientesTemplo(templo);
}

function crearHumoDeCorte(dominio, corte) {
    const humo = document.createElement("span");
    humo.className = "domain-cut-smoke";

    const rect = corte.getBoundingClientRect();

    humo.style.left = `${rect.left + rect.width / 2}px`;
    humo.style.top = `${rect.top + rect.height / 2}px`;

    humo.style.setProperty(
        "--smoke-drift-x",
        `${Math.random() * 140 - 70}px`
    );

    humo.style.setProperty(
        "--smoke-drift-y",
        `${Math.random() * 100 - 50}px`
    );

    humo.style.setProperty(
        "--cut-smoke-size",
        `${45 + Math.random() * 75}px`
    );

    dominio.appendChild(humo);

    setTimeout(() => humo.remove(), 1500);
}

function crearCorteDeDominio(dominio) {
    if (!dominio.isConnected) return;

    const corte = document.createElement("div");
    corte.className = "domain-slash";

    const ancho = Math.random() * 430 + 300;
    const angulo = Math.random() * 180 - 90;

    corte.style.left = `${Math.random() * 100}%`;
    corte.style.top = `${Math.random() * 100}%`;

    corte.style.setProperty("--domain-angle", `${angulo}deg`);
    corte.style.setProperty("--domain-width", `${ancho}px`);

    corte.style.animationDuration = `${0.45 + Math.random() * 0.35}s`;

    dominio.appendChild(corte);

    setTimeout(() => {
        if (corte.isConnected) {
            crearHumoDeCorte(dominio, corte);
        }
    }, 120);

    setTimeout(() => corte.remove(), 1100);
}

// ======================================
// SUKUNA - EXPANSIÓN DE DOMINIO
// TEMPLO EN LA POSICIÓN DEL GIF
// ======================================

function activarDominioSukuna() {
    if (dominioActivo) return;

    const sukuna = document.querySelector(".sukuna-gif");

    if (!sukuna) {
        console.warn("No se encontró el elemento .sukuna-gif");
        return;
    }

    dominioActivo = true;

    const posicion = sukuna.getBoundingClientRect();

    const centroX = posicion.left + posicion.width / 2;
    const centroY = posicion.top + posicion.height / 2;

    const dominio = crearElemento("sukuna-domain");

    dominio.style.setProperty("--temple-origin-x", `${centroX}px`);
    dominio.style.setProperty("--temple-origin-y", `${centroY}px`);

    // OSCURIDAD DEL DOMINIO
    const oscuridad = document.createElement("div");
    oscuridad.className = "domain-darkness-overlay";
    dominio.appendChild(oscuridad);

    // ESFERA NEGRA VISCOSA
    const esfera = document.createElement("div");
    esfera.className = "temple-black-sphere";

    const esferaBrillo = document.createElement("div");
    esferaBrillo.className = "temple-sphere-glow";

    esfera.appendChild(esferaBrillo);
    dominio.appendChild(esfera);

    // TEMPLO QUE NACE DESDE LA POSICIÓN DE SUKUNA
    const templo = document.createElement("div");
    templo.className = "domain-temple temple-forming";

    templo.style.setProperty("--temple-origin-x", `${centroX}px`);
    templo.style.setProperty("--temple-origin-y", `${centroY}px`);

    crearEstructuraTemplo(templo);
    dominio.appendChild(templo);

    // NO SE CREA EL SÍMBOLO NI EL TÍTULO JAPONÉS

    // HUMO AMBIENTAL
    for (let i = 0; i < 18; i++) {
        const humo = document.createElement("div");

        humo.className = "domain-smoke";
        humo.style.left = `${Math.random() * 100}%`;
        humo.style.top = `${Math.random() * 100}%`;

        humo.style.setProperty(
            "--smoke-size",
            `${100 + Math.random() * 180}px`
        );

        humo.style.setProperty(
            "--smoke-delay",
            `${Math.random() * 2}s`
        );

        dominio.appendChild(humo);
    }

    // PARTÍCULAS ROJAS
    for (let i = 0; i < 25; i++) {
        const particula = document.createElement("div");

        particula.className = "domain-particle";
        particula.style.left = `${Math.random() * 100}%`;
        particula.style.top = `${Math.random() * 100}%`;
        particula.style.animationDelay = `${Math.random() * 2}s`;

        dominio.appendChild(particula);
    }

    // PRIMER MOMENTO: APARECEN LOS DIENTES
    setTimeout(() => {
        if (!dominio.isConnected) return;
        templo.classList.add("temple-teeth-opening");
    }, 100);

    // SEGUNDO MOMENTO: LA ESFERA ABSORBE EL TEMPLO
    setTimeout(() => {
        if (!dominio.isConnected) return;

        templo.classList.add("temple-being-absorbed");
        esfera.classList.add("sphere-absorbing");

    }, 850);

    // TERCER MOMENTO: EL TEMPLO EMERGE
    // CONSERVANDO LA POSICIÓN ORIGINAL DE SUKUNA
    setTimeout(() => {
        if (!dominio.isConnected) return;

        esfera.classList.add("sphere-burst");
        templo.classList.remove("temple-being-absorbed");
        templo.classList.add("temple-emerging");

    }, 1750);

    // CUARTO MOMENTO: COMIENZAN LOS CORTES
    setTimeout(() => {
        if (!dominio.isConnected) return;

        templo.classList.add("temple-established");
        dominio.classList.add("domain-active");

        for (let i = 0; i < 12; i++) {
            setTimeout(() => {
                crearCorteDeDominio(dominio);
            }, i * 65);
        }

    }, 2500);

    // LLUVIA CONTINUA DE CORTES DURANTE EL DOMINIO
    const intervaloCortes = setInterval(() => {
        if (!dominio.isConnected) {
            clearInterval(intervaloCortes);
            return;
        }

        for (let i = 0; i < 5; i++) {
            crearCorteDeDominio(dominio);
        }
    }, 350);

    document.body.classList.add("domain-shake");

    console.log("RYOMEN SUKUNA: EXPANSIÓN DE DOMINIO.");

    // DURACIÓN DEL DOMINIO: 10 SEGUNDOS
    setTimeout(() => {
        clearInterval(intervaloCortes);

        dominio.classList.add("domain-ending");
        document.body.classList.remove("domain-shake");

        setTimeout(() => {
            dominio.remove();
            dominioActivo = false;

            console.log("SANTUARIO MALEVOLENTE: DOMINIO CERRADO.");
        }, 1000);

    }, 10000);
}

// CLIC EN SUKUNA
const sukuna = document.querySelector(".sukuna-gif");

if (sukuna) {
    sukuna.style.cursor = "pointer";
    sukuna.setAttribute("title", "Haz clic para activar el SANTUARIO MALEVOLENTE");
    sukuna.addEventListener("click", activarDominioSukuna);
}

// ======================================
// FUGA - LLAMAS MEDIANAS ALREDEDOR
// DE LA EXPLOSIÓN NUCLEAR
// ======================================

function crearLlamasMedianas(incendio) {
    const cantidad = 22;

    for (let i = 0; i < cantidad; i++) {
        const llama = document.createElement("span");

        llama.className = "fuga-medium-flame";

        // Distribución circular alrededor de la explosión
        const angulo = (360 / cantidad) * i + Math.random() * 10;
        const radioX = 13 + Math.random() * 8;
        const radioY = 12 + Math.random() * 8;

        const radianes = angulo * Math.PI / 180;

        const x = 50 + Math.cos(radianes) * radioX;
        const y = 50 + Math.sin(radianes) * radioY;

        llama.style.left = `${x}%`;
        llama.style.top = `${y}%`;

        llama.style.setProperty(
            "--flame-width",
            `${25 + Math.random() * 25}px`
        );

        llama.style.setProperty(
            "--flame-height",
            `${65 + Math.random() * 55}px`
        );

        llama.style.setProperty(
            "--flame-delay",
            `${Math.random() * 1.2}s`
        );

        llama.style.setProperty(
            "--flame-rotation",
            `${Math.random() * 50 - 25}deg`
        );

        incendio.appendChild(llama);

        setTimeout(() => llama.remove(), 6500);
    }
}

// ======================================
// FUGA - EXPLOSIÓN NUCLEAR
// ======================================

function activarFuga() {
    if (fugaActiva) return;

    fugaActiva = true;

    const efecto = crearElemento("fuga-effect");

    // TÍTULO
    const titulo = document.createElement("div");
    titulo.className = "fuga-title";
    titulo.textContent = "FUGA";

    efecto.appendChild(titulo);

    // ESCENARIO
    const escenario = document.createElement("div");
    escenario.className = "fuga-scenario";

    efecto.appendChild(escenario);

    // FLECHA
    const flecha = document.createElement("div");
    flecha.className = "fuga-arrow";

    escenario.appendChild(flecha);

    // ESTELA
    const estela = document.createElement("div");
    estela.className = "fuga-trail";

    escenario.appendChild(estela);

    requestAnimationFrame(() => {
        flecha.classList.add("arrow-fly");
        estela.classList.add("trail-fly");
    });

    // LA FLECHA DESAPARECE AL LLEGAR AL CENTRO
    setTimeout(() => {
        flecha.classList.add("arrow-disappear");
    }, 375);

    console.log("FUGA: FLECHA DISPARADA.");

    // DETONACIÓN
    setTimeout(() => {
        if (!efecto.isConnected) return;

        flecha.remove();
        estela.remove();

        efecto.classList.add("fuga-detonation");

        // BOLA DE FUEGO
        crearElemento("fuga-explosion", efecto);

        // NÚCLEO BLANCO
        crearElemento("fuga-nucleus", efecto);

        // ONDA DE CHOQUE
        crearElemento("fuga-shockwave", efecto);

        // HONGO ATÓMICO
        const hongo = crearElemento("atomic-mushroom", efecto);

        crearElemento("atomic-stem", hongo);
        crearElemento("atomic-cap", hongo);

        // ONDAS EXPANSIVAS
        for (let i = 0; i < 3; i++) {
            const ondaExtra = crearElemento("atomic-ring", efecto);
            ondaExtra.style.animationDelay = `${i * 0.25}s`;
        }

        // FUEGO AMBIENTAL REDUCIDO
        const incendio = crearElemento("fuga-fire-screen", efecto);
        incendio.classList.add("fuga-fire-reduced");

        // LLAMAS MEDIANAS ALREDEDOR DE LA EXPLOSIÓN
        crearLlamasMedianas(incendio);

        // BRASAS PEQUEÑAS
        for (let i = 0; i < 55; i++) {
            const brasa = document.createElement("span");

            brasa.className = "fuga-screen-spark";
            brasa.style.left = `${Math.random() * 100}%`;
            brasa.style.top = `${Math.random() * 100}%`;

            brasa.style.setProperty(
                "--spark-delay",
                `${Math.random() * 3}s`
            );

            brasa.style.setProperty(
                "--spark-distance",
                `${50 + Math.random() * 150}px`
            );

            incendio.appendChild(brasa);
        }

        // HUMO NATURAL
        for (let i = 0; i < 10; i++) {
            const humo = document.createElement("span");

            humo.className = "fuga-smoke";
            humo.style.left = `${Math.random() * 100}%`;
            humo.style.top = `${45 + Math.random() * 45}%`;
            humo.style.animationDelay = `${Math.random() * 2}s`;

            incendio.appendChild(humo);
        }

        document.body.classList.add("fuga-screen-shake");

        setTimeout(() => {
            document.body.classList.remove("fuga-screen-shake");
        }, 1500);

        console.log("FUGA: DETONACIÓN NUCLEAR.");

        // MANTENER EL EFECTO DURANTE 15 SEGUNDOS
        setTimeout(() => {
            if (!efecto.isConnected) return;

            efecto.classList.add("fuga-ending");

            setTimeout(() => {
                efecto.remove();
                fugaActiva = false;

                console.log("FUGA: EL EFECTO SE HA EXTINGUIDO.");
            }, 1500);

        }, 15000);

    }, 750);
}

// ======================================
// AGREGAR AL CARRITO
// 80% SUKUNA / 20% FUGA
// ======================================

function agregarAlCarrito(id) {
    if (vaciadoActivo) return;

    const producto = productos.find(item => item.id === id);

    if (!producto) return;

    carrito.push(producto);

    actualizarCarrito();

    if (Math.random() < 0.8) {
        activarCortesSukuna();
    } else {
        activarFuga();
    }

    console.log(`${producto.nombre} agregado al carrito.`);
}

if (listaProductos) {
    listaProductos.addEventListener("click", evento => {
        const boton = evento.target.closest("[data-producto]");

        if (!boton) return;

        agregarAlCarrito(Number(boton.dataset.producto));
    });
}

// ======================================
// ACTUALIZAR CARRITO
// ======================================

function actualizarCarrito() {
    if (!contadorCarrito || !elementosCarrito || !totalCarrito) return;

    contadorCarrito.textContent = carrito.length;
    elementosCarrito.innerHTML = "";

    let total = 0;

    carrito.forEach((producto, indice) => {
        total += producto.precio;

        const elemento = document.createElement("div");
        elemento.className = "cart-item";

        elemento.innerHTML = `
            <span>
                ${producto.nombre} - ${formatearPrecio(producto.precio)}
            </span>

            <button class="eliminar-producto" data-indice="${indice}">
                Eliminar
            </button>
        `;

        elementosCarrito.appendChild(elemento);
    });

    totalCarrito.textContent = formatearPrecio(total);

    if (carrito.length === 0) {
        elementosCarrito.innerHTML = `
            <p class="carrito-vacio">
                Tu carrito está vacío. ¡Agrega algún producto!
            </p>
        `;
    }
}

// ======================================
// ELIMINAR PRODUCTOS
// ======================================

function eliminarDelCarrito(indice) {
    if (vaciadoActivo) return;
    if (indice < 0 || indice >= carrito.length) return;

    carrito.splice(indice, 1);
    actualizarCarrito();
}

if (elementosCarrito) {
    elementosCarrito.addEventListener("click", evento => {
        const boton = evento.target.closest("[data-indice]");

        if (!boton) return;

        eliminarDelCarrito(Number(boton.dataset.indice));
    });
}

// ======================================
// BLACK FLASH
// AL ABRIR EL CARRITO
// ======================================

function abrirCarrito(evento) {
    if (!modalCarrito || modalCarrito.classList.contains("active")) return;

    const posicion = evento.currentTarget.getBoundingClientRect();

    const efecto = crearElemento("black-flash");

    efecto.style.setProperty(
        "--flash-x",
        `${posicion.left + posicion.width / 2}px`
    );

    efecto.style.setProperty(
        "--flash-y",
        `${posicion.top + posicion.height / 2}px`
    );

    modalCarrito.classList.add("active");

    setTimeout(() => efecto.remove(), 1200);

    console.log("BLACK FLASH ACTIVADO.");
}

// ======================================
// ENERGÍA MALDITA AZUL
// AL CERRAR EL CARRITO
// ======================================

function cerrarCarrito() {
    if (!modalCarrito || !modalCarrito.classList.contains("active")) return;

    const efecto = crearElemento("cursed-exit");

    modalCarrito.classList.remove("active");

    setTimeout(() => efecto.remove(), 850);

    console.log("ENERGÍA MALDITA LIBERADA.");
}

if (botonAbrirCarrito) {
    botonAbrirCarrito.addEventListener("click", abrirCarrito);
}

if (botonCerrarCarrito) {
    botonCerrarCarrito.addEventListener("click", cerrarCarrito);
}

if (modalCarrito) {
    modalCarrito.addEventListener("click", evento => {
        if (evento.target === modalCarrito) {
            cerrarCarrito();
        }
    });
}

document.addEventListener("keydown", evento => {
    if (evento.key === "Escape") {
        cerrarCarrito();
    }
});

// ======================================
// AGUJERO NEGRO AZUL
// ABSORBER LOS PRODUCTOS DEL CARRITO
// ======================================

function vaciarCarrito() {
    if (carrito.length === 0 || vaciadoActivo) return;
    if (!elementosCarrito) return;

    vaciadoActivo = true;

    const elementos = [...elementosCarrito.querySelectorAll(".cart-item")];

    const agujero = crearElemento("blue-black-hole");

    agujero.style.setProperty("--hole-x", "50vw");
    agujero.style.setProperty("--hole-y", "50vh");

    elementos.forEach((elemento, indice) => {
        const posicion = elemento.getBoundingClientRect();

        elemento.style.setProperty(
            "--item-x",
            `${posicion.left + posicion.width / 2 - window.innerWidth / 2}px`
        );

        elemento.style.setProperty(
            "--item-y",
            `${posicion.top + posicion.height / 2 - window.innerHeight / 2}px`
        );

        elemento.style.animationDelay = `${indice * 0.08}s`;
        elemento.classList.add("item-absorbed");
    });

    agujero.classList.add("hole-active");

    console.log("INFINITY VOID: ABSORBIENDO PRODUCTOS.");

    setTimeout(() => {
        carrito = [];
        actualizarCarrito();
    }, 750);

    setTimeout(() => {
        agujero.classList.add("hole-collapse");
    }, 1000);

    setTimeout(() => {
        agujero.remove();
        vaciadoActivo = false;

        console.log("AGUJERO NEGRO CERRADO.");
    }, 1900);
}

if (botonVaciarCarrito) {
    botonVaciarCarrito.addEventListener("click", vaciarCarrito);
}

// ======================================
// GOJO: HOLLOW PURPLE
// ======================================

function activarHollowPurple() {
    if (purpleActivo) return;

    purpleActivo = true;

    const efecto = crearElemento("hollow-purple");

    const rojo = document.createElement("div");
    rojo.className = "purple-orb purple-red";

    const azul = document.createElement("div");
    azul.className = "purple-orb purple-blue";

    const nucleo = document.createElement("div");
    nucleo.className = "purple-core";

    const explosion = document.createElement("div");
    explosion.className = "purple-explosion";

    efecto.appendChild(rojo);
    efecto.appendChild(azul);
    efecto.appendChild(nucleo);
    efecto.appendChild(explosion);

    for (let i = 0; i < 45; i++) {
        const particula = document.createElement("span");
        particula.className = "purple-particle";

        particula.style.setProperty("--particle-angle", `${Math.random() * 360}deg`);
        particula.style.setProperty("--particle-distance", `${100 + Math.random() * 700}px`);
        particula.style.setProperty("--particle-delay", `${Math.random() * 0.6}s`);

        efecto.appendChild(particula);
    }

    setTimeout(() => {
        efecto.classList.add("purple-merging");
    }, 50);

    setTimeout(() => {
        efecto.classList.add("purple-blast");
        document.body.classList.add("purple-shake");
    }, 1600);

    setTimeout(() => {
        efecto.classList.add("purple-ending");
        document.body.classList.remove("purple-shake");
    }, 3200);

    setTimeout(() => {
        efecto.remove();
        purpleActivo = false;
    }, 4200);

    console.log("GOJO: HOLLOW PURPLE!");
}

// CLIC EN EL GIF DE GOJO
const gojo = document.querySelector(".gojo-gif");

if (gojo) {
    gojo.style.cursor = "pointer";
    gojo.addEventListener("click", activarHollowPurple);
    gojo.setAttribute("title", "Haz clic para activar HOLLOW PURPLE");
}

// ======================================
// FORMULARIO DE CONTACTO
// ======================================

if (formularioContacto) {
    formularioContacto.addEventListener("submit", evento => {
        evento.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        if (!nombre || !correo || !mensaje) {
            if (respuestaFormulario) {
                respuestaFormulario.textContent =
                    "Por favor, completa todos los campos.";
            }

            return;
        }

        if (respuestaFormulario) {
            respuestaFormulario.textContent =
                `¡Gracias, ${nombre}! Tu mensaje ha sido enviado correctamente.`;
        }

        formularioContacto.reset();

        console.log("Mensaje de contacto enviado correctamente.");
    });
}

// ======================================
// INICIAR JUJUTSU STORE
// ======================================

mostrarProductos();
actualizarCarrito();

console.log("JUJUTSU STORE iniciada correctamente.");
