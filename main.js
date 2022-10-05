const api ={
    key:"6172a571ec73b581f18e4db9618db372",
    url:"https://api.openweathermap.org/data/2.5/weather"
}

const ciudad = document.getElementById("ciudad")
const fecha = document.getElementById("fecha")
const imagen = document.getElementById("imagen-termometro")
const temperatura = document.getElementById("temperatura-valor")
const clima = document.getElementById("clima")
const maxMin = document.getElementById("max-min")
const card=document.getElementById("clima-card")
const imagenGif=document.getElementById("imagenGif")



function busqueda(query){
    fetch(`${api.url}?q=${query}&appid=${api.key}&lang=es`)
    .then((response)=>response.json())
    .then((data)=>{
        card.style.display="block"
        ciudad.innerHTML=`${data.name}, ${data.sys.country}`
        fecha.innerHTML=(new Date()).toLocaleDateString()
        temperatura.innerHTML=toCelcius(data.main.temp)+"°C"
        clima.innerHTML=data.weather[0].description
        gif=data.weather[0].description
        if(gif==="cielo claro"){
            if(hora>12){

            }
        }else if(gif === "nubes"){
            valor="images/nube.gif"
        }else if(gif === "lluvia ligera"){
            valor="images/lluvia.gif"
        }else if(gif === "nubes dispersas"){
            valor="images/nube.gif"
        }else if(gif === "algo de nubes"){
            valor="images/nube.gif"
        }else if(gif === "bruma"){
            valor="images/bruma.gif"
        }else if(gif === "niebla"){
            valor="images/bruma.gif"
        }else if(gif === "muy nuboso"){
            valor="images/muyNublado.gif"
        }else if(gif === "chubasco de ligera intensidad"){
            valor="images/lluvia.gif"
        }else if(gif === "tormenta con lluvia ligera"){
            valor="images/tormenta.gif"
        }
        imagenGif.innerHTML=`<img class="gif" src="${valor}"/>`
        maxMin.innerHTML=`${toCelcius(data.main.temp_max)} °C / ${toCelcius(data.main.temp_min)} °C`
    })
    .catch((err) => {

        Toastify({
            text: "Esa ciudad no existe",
            duration: 2500,
            offset: {
              x: 50, 
              y: 10 
            },
          }).showToast();

    });
}

function toCelcius(kelvin){
    return Math.round(kelvin-273.15)
}


const onSubmit=(e)=>{
    e.preventDefault()
    busqueda(buscador.value)
    
}


const form = document.getElementById("buscador-form")
const buscador = document.getElementById("buscador")

form.addEventListener("submit", onSubmit, true)