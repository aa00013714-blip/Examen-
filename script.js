const preguntaElemento = document.getElementById("pregunta");
const botones = document.querySelectorAll(".btn");
const contador = document.getElementById("contador");
const scoreText = document.getElementById("score");

let preguntaActual = 0;
let score = 0;

function cargarPregunta(){

  const actual = preguntas[preguntaActual];

  preguntaElemento.innerText = actual.pregunta;

  botones.forEach((btn, index)=>{
    btn.innerText = actual.opciones[index];

    btn.onclick = ()=>{

      if(index === actual.correcta){
        score++;
      }

      preguntaActual++;

      if(preguntaActual < preguntas.length){
        cargarPregunta();
      }else{
        terminarJuego();
      }

    }

  });

  contador.innerText =
    `Pregunta ${preguntaActual + 1} de ${preguntas.length}`;

  scoreText.innerText =
    `Puntos: ${score}`;
}

function terminarJuego(){

  document.getElementById("quiz").classList.add("hidden");

  document.getElementById("final").classList.remove("hidden");

  document.getElementById("resultado").innerText =
    `Obtuviste ${score} de ${preguntas.length}`;
}

cargarPregunta();
