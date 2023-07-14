/* <==========  Depreciacion Anual ==========>*/
const resultDPAMobiliario = document.querySelector(".dpa-mobiliario");
const resultDPAEOficina = document.querySelector(".dpa-eoficina");
const resultDPAVehiculo = document.querySelector(".dpa-vehiculo");
const resultDPATotal = document.querySelector(".dpa-total");


/* <==========  Depreciacion X AÑos ==========>*/
const resultDPXMobiliario = document.querySelector(".dpx-mobiliario");
const resultDPXEOficina = document.querySelector(".dpx-eoficina");
const resultDPXVehiculo = document.querySelector(".dpx-vehiculo");
const resultDPXTotal = document.querySelector(".dpx-total");



/* <==========  Mobiliario  ==========>*/
const inputValorInicialMobiliario = document.querySelector("#vi-mobiliario");
const inputTasaDepreciacionMobiliario = document.querySelector("#td-mobiliario");
const inputVidaUtilMobiliario = document.querySelector("#vu-mobiliario");
const calcularMobiliario = document.querySelector("#btn-mobiliario");

const resultValorInicialMobiliario = document.querySelector(".vi-mobiliario-result");
const resultTasaDepreciacionMobiliario = document.querySelector(".td-mobiliario-result");
const resultDepreciacionAnualMobiliario = document.querySelector(".da-mobiliario-result");
const resultValorDelMobiliario_UnAño = document.querySelector(".vda-mobiliario-result");
const resultValorDelMobiliario_XAños = document.querySelector(".vdx-mobiliario-result");

calcularMobiliario.addEventListener("click", calcularAFNMobiliario);

function calcularAFNMobiliario(){
    const valorInicial = Number(inputValorInicialMobiliario.value);
    const tasaDepreciacion = Number(inputTasaDepreciacionMobiliario.value);
    const vidaUtil = Number(inputVidaUtilMobiliario.value);
    const depreciacionAnual = valorInicial * (tasaDepreciacion/100)

    resultValorInicialMobiliario.innerText = valorInicial.toFixed(2);
    resultTasaDepreciacionMobiliario.innerText = `${tasaDepreciacion}%`;
    resultDepreciacionAnualMobiliario.innerText = depreciacionAnual.toFixed(2);
    resultValorDelMobiliario_UnAño.innerText = (valorInicial - depreciacionAnual).toFixed(2);
    resultValorDelMobiliario_XAños.innerText = (valorInicial - (depreciacionAnual * vidaUtil)).toFixed(2);

    resultDPAMobiliario.innerHTML = depreciacionAnual.toFixed(2);
    resultDPXMobiliario.innerHTML = (depreciacionAnual * vidaUtil).toFixed(2);

    dpaTotal();
    dpxTotal();
}




/* <==========  Equipos de Oficina  ==========>*/
const inputValorInicialEOficina = document.querySelector("#vi-eoficina");
const inputTasaDepreciaciónEOficina = document.querySelector("#td-eoficina");
const inputVidaUtilEOficina = document.querySelector("#vu-eoficina");
const calcularEOficina = document.querySelector("#btn-eoficina");

const resultValorInicialEOficina = document.querySelector(".vi-eoficina-result");
const resultTasaDepreciacionEOficina = document.querySelector(".td-eoficina-result");
const resultDepreciacionAnualEOficina = document.querySelector(".da-eoficina-result");
const resultValorDelEOficina_UnAño = document.querySelector(".vda-eoficina-result");
const resultValorDelEOficina_XAños = document.querySelector(".vdx-eoficina-result");

calcularEOficina.addEventListener("click", calcularAFNEOficina, dpaTotal);

function calcularAFNEOficina(){
    const valorInicial = Number(inputValorInicialEOficina.value);
    const tasaDepreciacion = Number(inputTasaDepreciaciónEOficina.value);
    const vidaUtil = Number(inputVidaUtilEOficina.value);
    const depreciacionAnual = valorInicial * (tasaDepreciacion/100)

    resultValorInicialEOficina.innerText = valorInicial.toFixed(2);
    resultTasaDepreciacionEOficina.innerText = `${tasaDepreciacion}%`;
    resultDepreciacionAnualEOficina.innerText = depreciacionAnual.toFixed(2);
    resultValorDelEOficina_UnAño.innerText = (valorInicial - depreciacionAnual).toFixed(2);
    resultValorDelEOficina_XAños.innerText = (valorInicial - (depreciacionAnual * vidaUtil)).toFixed(2);

    resultDPAEOficina.innerHTML = depreciacionAnual.toFixed(2);
    resultDPXEOficina.innerHTML = (depreciacionAnual * vidaUtil).toFixed(2);

    dpaTotal();
    dpxTotal();
}




/* <==========  Vehiculo  ==========>*/
const inputValorInicialVehiculo = document.querySelector("#vi-vehiculo");
const inputTasaDepreciacionVehiculo = document.querySelector("#td-vehiculo");
const inputVidaUtilVehiculo = document.querySelector("#vu-vehiculo");
const calcularVehiculo = document.querySelector("#btn-vehiculo");

const resultValorInicialVehiculo = document.querySelector(".vi-vehiculo-result");
const resultTasaDepreciacionVehiculo = document.querySelector(".td-vehiculo-result");
const resultDepreciacionAnualVehiculo = document.querySelector(".da-vehiculo-result");
const resultValorDelVehiculo_UnAño = document.querySelector(".vda-vehiculo-result");
const resultValorDelVehiculo_XAños = document.querySelector(".vdx-vehiculo-result");

calcularVehiculo.addEventListener("click", calcularAFNVehiculo, dpaTotal);

function calcularAFNVehiculo(){
    const valorInicial = Number(inputValorInicialVehiculo.value);
    const tasaDepreciacion = Number(inputTasaDepreciacionVehiculo.value);
    const vidaUtil = Number(inputVidaUtilVehiculo.value);
    const depreciacionAnual = valorInicial * (tasaDepreciacion/100)

    resultValorInicialVehiculo.innerText = valorInicial.toFixed(2);
    resultTasaDepreciacionVehiculo.innerText = `${tasaDepreciacion}%`;
    resultDepreciacionAnualVehiculo.innerText = depreciacionAnual.toFixed(2);
    resultValorDelVehiculo_UnAño.innerText = (valorInicial - depreciacionAnual).toFixed(2);
    resultValorDelVehiculo_XAños.innerText = (valorInicial - (depreciacionAnual * vidaUtil)).toFixed(2);

    resultDPAVehiculo.innerHTML = depreciacionAnual.toFixed(2);
    resultDPXVehiculo.innerHTML = (depreciacionAnual * vidaUtil).toFixed(2);

    dpaTotal();
    dpxTotal();
}



/* <==========  DPA Total  ==========>*/
function dpaTotal() {
    const mobiliario = parseFloat(resultDPAMobiliario.innerText);
    console.log(mobiliario);
    
    const eoficina = parseFloat(resultDPAEOficina.innerText);

    const vehiculo = parseFloat(resultDPAVehiculo.innerText);

    resultDPATotal.innerText = (mobiliario + eoficina + vehiculo).toFixed(2);
}


/* <==========  DPX Total  ==========>*/
function dpxTotal() {

    const mobiliario = (parseFloat(resultDPXMobiliario.innerText));
    console.log(mobiliario);
    
    const eoficina = (parseFloat(resultDPXEOficina.innerText));
    console.log(eoficina);

    const vehiculo = (parseFloat(resultDPXVehiculo.innerText));
    console.log(vehiculo);

    resultDPXTotal.innerText = (mobiliario + eoficina + vehiculo).toFixed(2);
}
