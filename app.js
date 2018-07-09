function animateElement(element, start, end, duration){
    return new Promise((resolve, reject)=>{ //resolve: Para completar promesas. reject: Para rechazarlas. (Como then y catch). NO SON PALABRAS RESERVADAS.
        const delta = (end - start)*30/duration; //Distancia que va a recorrer cada elemento x 40 (milisegundos) / duración 
        element.style.left = start; //start parte desde la izquierda
        let counter = 0;
        const loop = setInterval(()=>{ //función itineraria
            const currentPosition = start + delta * counter++;
            element.style.left = currentPosition;
            if(currentPosition >= end){
                clearInterval(loop);
                resolve(); //Llama a then cuando termina la animación
            }
        }, 30);// ejecuta una funcion cada cierto tiempo
    });
}

// Somos las programadoras de la promise
//====================== Promise =====================
// Somos las programadoras usuarias de la promise

const allImg = document.getElementsByTagName("img");
console.log("Comienza promesa");
animateElement(allImg[0], -200, 500, 3000).then(()=>{
    console.log("Terminó la animación de doge");
}).catch(()=>{

});
console.log("Holi soy código después de la promesa"); 