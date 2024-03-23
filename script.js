let frente = document.getElementById("frente");
let fundo = document.getElementById("fundo");
let botao_costa = document.getElementById("costa");
let botao_frente = document.getElementById("frontal");
let wall = document.getElementById("fundo");
let fade = document.querySelector(".fade")

let screen = document.getElementById("screen")

let curtina = document.querySelector("#curtina")
let p = false;

let esquerda = document.getElementById("esquerda");
let direita = document.getElementById("direita");

let maoUm = document.getElementById("mao-1")
let maoDois = document.getElementById("mao-2")
let maoTres = document.getElementById("switch")

let computador = document.getElementById("computador")
let online = false

var novo = -220;
var handle = false
let millisecond = 0

let openCamera = document.querySelector(".camera")
let memoria = document.querySelector(".memoria")

let rom = [
  `background-image: url(scr/scenes/BG-2.png);`,
  `background-image: url(scr/scenes/BG-3.png);`,
  `background-image: url(scr/scenes/BG-1.png);`,
];

let record = document.querySelector(".record");

let shots = [
  `background-image: url(scr/tasks/camera/camera-1.png)`,
  `background-image: url(scr/tasks/camera/camera-2.png)`,
  `background-image: url(scr/tasks/camera/camera-3.png)`,
  `background-image: url(scr/tasks/camera/camera-4.png)`,
  `background-image: url(scr/tasks/camera/camera-5.png)`
];

let x = 0;
wall.style = rom[x];

let lantenaAtiva = false;

///efeitos sonoros///////////////
let switchlanter = "/scr/audioEfect/light-switch-81967.mp3"
let computerNoises = "/scr/audioEfect/computer-hum-noise.mp3"


//não ta sendo usado
var cordenadas = maoTres.getBoundingClientRect();

function lanterna() {
  lantenaAtiva = !lantenaAtiva;
  playsound(switchlanter);

  if(lantenaAtiva == true){
    maoUm.style=`display:flex;`

  }else{
    maoUm.style=`display:none;`
  }
}

maoDois.addEventListener("click", (event) => {
  let x = cordenadas.left
  let y = cordenadas.top

  console.log(x, y)

  if (lantenaAtiva == true) {
    frente.style.webkitMaskImage = `radial-gradient(circle at ${x}px ${y}px, transparent 2px, black 400px)`;
  } else if (lantenaAtiva == false) {
    frente.style.webkitMaskImage = `radial-gradient(circle at ${x}px ${y}px, transparent 0px, black 0px)`;
  }
});




function cetaEsquerda(handle){
        if (handle == true){
            cron = setInterval(() => { timerP();}, 1 )
        }
        else{
            clearInterval(cron)
        }
    
} 
function cetaDireita(handle){
    if (handle == true){
        cron = setInterval(() => { timerN();}, 1 )
        console.log(cron)
    }
    else{
        clearInterval(cron)
    }
} 


function timerP(){
    if ((millisecond += 10) == 10) {
        millisecond = 0;
        if (novo > -600){
        novo-= 3;
        }
        console.log(novo)
        screen.style = `right: ${novo}px;`;
        
      }
}

function timerN(){
    if ((millisecond += 10) > 10) {
        millisecond = 0;
        if(novo <  320){
        novo += 3;
        }
        console.log(novo)
        screen.style = `right: ${novo}px;`;
      }
}

function lista() {
  if (x < 3) {
    x += 1;
  }
  if(x >= 3){
    x = 2
  }
  wall.style = rom[x];
  console.log(x);

  return x;
}

function lista2() {
  if (x > -1) {
    x -= 1;
  }
  if(x < 0){
    x = 0
  }
  wall.style = rom[x];
  console.log(x);

  return x;
}

//////////////////

botao_costa.addEventListener("click", function () {
  fade.style = "animation: fade 2s forwards;"
  setTimeout(lista, 500);

  setTimeout(
    fundo.style = "filter: ;"
  );
});

botao_frente.addEventListener("click", function () {
  setTimeout(lista2, 1000);

  setTimeout(
    document.querySelector(".fadeIN")?.classList.remove("fadeIN"),
    1500
  );
});

setInterval(function () {
  if(x == 0){
    botao_frente.style = "display: none;";
  } else if (x == 1) {
    botao_frente.style = "display: flex;";
  } else if (x == 2) {
    botao_frente.style = "display: flex;";
    botao_costa.style = "display: flex;";
  }

//INTERAÇÃO COM O COMPUTADOR///////
  if (x == 1){
    ComputadorAtivavel()
    portaSala()
    curtina.style=`display: flex;`

  }else if (x == 2){
    maoUm.style=`
      height: 30px;
      width: 30px;
      position: absolute;
      z-index: 40;
      right: 850px;
      bottom: 380px;
      opacity: .6;
      `
  } else if (x == 3){
  }

  if (x ==  0){
    curtina.style = 'display: flex;'
  } else {
    curtina.style = 'display: none;'
  }

}, 100);

function ComputadorAtivavel() {
  maoUm.style = `
      height: 30px;
      width: 30px;
      position: absolute;
      z-index: 40;
      right: 450px;
      bottom: 380px;
      opacity: .6;
      `
}

function portaSala(){
  maoDois.style = `
      height: 30px;
      width: 30px;
      position: absolute;
      z-index: 40;
      right: 300px;
      bottom: 380px;
      opacity: .6;
      `
}

maoUm.addEventListener("click", function(){
  teste()
})



function teste(){
  computador.style = `display: flex;`
}

function poweOff(){
  computador.style = `display: none;`
}


function playsound(audioName){
  let audio1 = new Audio(audioName);
  audio1.play()
  
}

function opCamera(){
  openCamera.style = `display: block;`
}
function exCamera(){
  openCamera.style = `display: none;`
}



function opMemory(){
  memoria.style = `display: block;`
}

function exMemory(){
  memoria.style = `display: none;`
}


//AQUI VOCÊ TIRA UM NUMERO ALEATORIO NO ESCOPO
let stranger = document.querySelector(".stranger")
const classes = stranger.classList;


let fundoMusical = document.querySelector(".ambient")
fundoMusical.volume = .05;
fundoMusical.loop = true;



let indoorsteps = "/scr/audioEfect/indoor-footsteps-6385.mp3"
let heartBt = document.querySelector(".heathB")
let LostAre = document.querySelector(".lostAre")
let homem = document.querySelector(".homen")
let susto = document.querySelector(".medo")

let tempo = document.getElementById("hora")

const local = [1,2,3,4];
let onEnemy = true;

let misecond = 0
let segundo = 0
let hora =   0


//SE O INIMIGO ESTIVER ATIVO ESSA FUNÇÂO TOCA.
setInterval(  function(){
  let randomfoto = Math.floor(Math.random() * local.length);

  record.style = `${shots[randomfoto]}`
  console.log("foto escolhida"+randomfoto)


  if (randomfoto == 2 && onEnemy){


    som(indoorsteps)
    LostAre.pause()
    behindWindow()
    
    setTimeout( function(){
      heartBt.currentTime = 0
      heartBt.play()
    }, 2000)
  


  } else if(randomfoto == 1) {
    OfbehindWindow()
    heartBt.pause()
    LostAre.pause()
  } else if (randomfoto == 3) {
    LostAre.currentTime = 0
    OfbehindWindow()
    heartBt.pause()
    LostAre.play()
  }



}, 10000)


function som(audioName){
  let ed = new Audio(audioName);
  ed.play()
  ed.muted=false;
  ed.volume = 0.6
}


function behindWindow(){
  console.log(lantenaAtiva)
  if(lantenaAtiva == true){
    susto.play()
    setTimeout(function(){
      homem.play()

    },2000)
    }

  setTimeout(function(){
    classes.replace("hide", "show");
  }, 1000)
}

function OfbehindWindow(){
  classes.replace("show", "hide");
}
