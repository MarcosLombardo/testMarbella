// Tabla de ganancias

// prettier-ignore
const allnamesincountr = [
    "María", "Josefa", "Ana", "Carmen", "Rosa", "Laura", "Marta", "Flor",
    "Andrea", "Adriana", "Olga", "Karla", "Elizabeth", "Karen", "Silvia",
    "Sandra", "Sonia", "Katherine", "Luz", "Adriana", "José", "Luis",
    "Carlos", "Juan", "David", "Daniel", "Mario", "Francisco", "Jorge",
    "Manuel", "Miguel", "Eduardo", "Alejandro", "Fernando", "Rafael",
    "Antonio", "Sergio", "Ricardo", "Roberto", "Victor", "Manuel", "Miguel",
    "Eduardo", "Alejandro"
];

// prettier-ignore
const citiesincountr = [
    "San José", "Alajuela", "Cartago", "Heredia", "Guanacaste", "Puntarenas",
    "Limón", "San Carlos", "Puntarenas", "Guanacaste", "Limón", "San Carlos",
    "Puntarenas", "Guanacaste", "Limón"
];

const datamoney = 135000;
const dataContainer = document.getElementById("data-container");

for (let i = 1; i <= 10; i++) {
    const row = document.createElement("div");
    row.className = "item-table";
    row.innerHTML = `
        <div class="name">
            <span class="circle"></span>
            <b id="namedata-${i}"></b>
        </div>
        <div class="win">
            <b id="windata-${i}"></b>
        </div>
        <div class="city">
            <b id="citydata-${i}"></b>
        </div>
    `;
    dataContainer.appendChild(row);
}

function updateData() {
    for (let i = 1; i <= 10; i++) {
        const name = document.querySelector("#namedata-" + i);
        const moneydata = document.querySelector("#windata-" + i);
        const citidata = document.querySelector("#citydata-" + i);

        const randomNumber = Math.floor(
            Math.random() * allnamesincountr.length
        );
        const randomcityNumber = Math.floor(
            Math.random() * citiesincountr.length
        );
        const moneyRandom =
            Math.random() * (datamoney * 10 - datamoney) + datamoney;

        name.innerHTML = allnamesincountr[randomNumber];
        citidata.innerHTML = citiesincountr[randomcityNumber];
        moneydata.innerHTML = moneyRandom.toLocaleString("es-CR", {
            style: "currency",
            currency: "CRC",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        });
    }
}

updateData();

setInterval(updateData, 5000);

// Obtención de la fecha actual

function obtenerFechaActual() {
    const fecha = new Date();
    const opciones = { year: "numeric", month: "long", day: "numeric" };
    return fecha.toLocaleDateString("es-ES", opciones);
}

function establecerFecha() {
    const fechaElemento = document.getElementById("fecha");
    if (fechaElemento) {
        fechaElemento.innerHTML = obtenerFechaActual();
    }
}

document.addEventListener("DOMContentLoaded", (event) => {
    establecerFecha();
});

// Formulario

const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success");
};

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = "";
    inputControl.classList.add("success");
    inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
    const firstnameValue = firstname.value.trim();
    const emailValue = email.value.trim();
    const lastnameValue = lastname.value.trim();
    const phoneValue = phone.value.trim();

    if (firstnameValue === "") {
        setError(firstname, "El nombre es requerido");
    } else {
        setSuccess(firstname);
    }

    if (lastnameValue === "") {
        setError(lastname, "El apellido es requerido");
    } else {
        setSuccess(lastname);
    }

    if (emailValue === "") {
        setError(email, "El email es requerido");
    } else if (!isValidEmail(emailValue)) {
        setError(email, "El email es inválido");
    } else {
        setSuccess(email);
    }

    if (phoneValue === "") {
        setError(phone, "El número de télefono es requerido");
    } else {
        setSuccess(phone);
    }
};
