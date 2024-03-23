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
let load = document.querySelector(".load");


let online = false

var novo = -220;
var handle = false
let millisecond = 0

let openCamera = document.querySelector(".camera")
let memoria = document.querySelector(".memoria")
let del = document.getElementById("delete");

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

let lanternaAtiva = false;

///efeitos sonoros///////////////
let switchlanter = "/scr/audioEfect/light-switch-81967.mp3"
let computerNoises = "/scr/audioEfect/computer-hum-noise.mp3"


//não ta sendo usado
var cordenadas = maoTres.getBoundingClientRect();

function lanterna() {
  lanternaAtiva = !lanternaAtiva;
  playsound(switchlanter);

  if(lanternaAtiva == true){
    maoUm.style=`display:flex;`

  }else{
    maoUm.style=`display:none;`
  }
}

maoDois.addEventListener("click", (event) => {
  let x = cordenadas.left
  let y = cordenadas.top

  console.log(x, y)


  if (lanternaAtiva == true) {
    frente.style.webkitMaskImage = `radial-gradient(circle at ${x}px ${y}px, transparent 2px, black 400px)`;
  } else if (lanternaAtiva == false) {
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
        novo-= 2;
        }
        console.log(novo)
        screen.style = `right: ${novo}px;`;
        
      }
}

function timerN(){
    if ((millisecond += 10) == 10) {
        millisecond = 0;
        if(novo <  320){
        novo += 2;
        }
        console.log(novo)
        screen.style = `right: ${novo}px;`;
      }
}
let porcentagem = 100

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
  fade.style = "display: flex;"
  setTimeout(function(){
    fade.style = "display: none;"
  },1000)
  setTimeout(lista, 500);
});

botao_frente.addEventListener("click", function () {
  fade.style = "display: flex;"
  setTimeout(function(){
    fade.style = "display: none;"
  },1000)
  setTimeout(lista2, 500);

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



  let on = false


//INTERAÇÃO COM O COMPUTADOR///////
  if (x == 1){
    portaSala()
    maoUm
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
  }

  if (x ==  0){
    curtina.style = 'display: flex;'
  } else {
    curtina.style = 'display: none;'
  }
  del.addEventListener('mousedown',function(){
    sobrecarregado(true)
  })

  del.addEventListener('mouseup',function(){
    sobrecarregado(false)
  })
  if(porcentagem > 0 && on == false && onEnemy == true){
    console.log("hehehehhesh",onEnemy)
    porcentagem -= 0.6;
  } else if (onEnemy == true  && porcentagem > 1){
    porcentagem = porcentagem
  } else if (porcentagem <= 1 && onEnemy == true){
    setTimeout(function(){
      telefonema(false)
    }, 2000)
  }
  memoriaServe(porcentagem)
}, 100);



function sobrecarregado(off){
  console.log("aparece porra", off)
  on = off
  if(porcentagem < 100 && on == true) {
    porcentagem += 0.05
  }
}

function memoriaServe(){
  load.style = `width: ${porcentagem}%;`
}

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
  maoUm.style = `
      height: 30px;
      width: 30px;
      position: absolute;
      z-index: 40;
      left: 300px;
      bottom: 380px;
      opacity: .6;
      `
}

maoUm.addEventListener("click", function(){
  if (x == 0){
  mostrarComputador()
  }
})



function mostrarComputador(){
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
fundoMusical.volume = .4;
fundoMusical.loop = true;


let indoorsteps = document.querySelector(".steps")
let heartBt = document.querySelector(".heathB")
let LostAre = document.querySelector(".lostAre")
let homem = document.querySelector(".homen")
let susto = document.querySelector(".medo")
let telefone = document.getElementById("telefone")

let creak = document.querySelector(".woodCreak")
let doorKnocks = document.querySelector(".doorKnocks")
let jumpscary = document.querySelector(".jumps")
let eyes = document.querySelector(".eyes")
let mensagemDispensado = document.querySelector(".despedido")
let telaVitoria = document.querySelector(".win")



let sucess = document.querySelector(".sucesso")

let tempo = document.getElementById("hora")


let randomfoto
const local = [1,2,3,4,5];
let onEnemy = false;

let hr = 0
//SE O INIMIGO ESTIVER ATIVO ESSA FUNÇÂO TOCA.
setTimeout(function(){
  onEnemy = true
}, 3000)


setInterval(function(){
  if(hr < 7 && onEnemy == true){
    hr++
  }
  if (porcentagem > 2){
    moreT(hr)
  }
}, 10000)


function moreT(a){
  pm = a
  tempo.innerHTML=`0${pm}:00`;
  if (pm == 6){
    telefonema(true)
    telefone.pause()
    sucess.play()

    setTimeout(function(){
      onEnemy= false
      return onEnemy
    }, 2000)
  }
}

setInterval(  function(){

  if(onEnemy == true){
    randomfoto = Math.floor(Math.random() * local.length);
  }

  record.style = `${shots[randomfoto]}`
  console.log("foto escolhida"+randomfoto)


  if (randomfoto == 2){
    doorKnocks.pause()
    LostAre.pause()
    som()

    setTimeout( function(){
      behindWindow(randomfoto)
    }, 5000)
    
    setTimeout( function(){
      heartBt.currentTime = 0
      heartBt.play()
    }, 2000)
  


  } else if(randomfoto == 1) {
    OfbehindWindow()
    heartBt.pause()
    LostAre.pause()
    doorKnocks.pause()
  } else if (randomfoto == 3) {
    LostAre.currentTime = 0
    OfbehindWindow()
    heartBt.pause()
    LostAre.play()
    doorKnocks.pause()
  } else if (randomfoto == 4){
    heartBt.pause()
    LostAre.pause()
    OfbehindWindow()
    creak.volume = 1.0
    creak.play()
    batidaPorta()
  }



}, 10000)

function batidaPorta (){
  doorKnocks.currentTime = 0
  setTimeout(function (){
    creak.pause()
    doorKnocks.volume = 0.2
    doorKnocks.play()
  }, 3000)
}

function som(){
  indoorsteps.play()
}


function behindWindow(randomfoto){

    if(randomfoto == 2 && lanternaAtiva == true){
      setTimeout(function(){
        jumpscary.style = "display: flex;"
        setTimeout(function(){
          eyes.style = "display: flex;"
          susto.play()
        }, 2000)
        setTimeout(function(){
          eyes.style = "display: none;"
          homem.play()
        }, 4000)
      })



      }

  setTimeout(function(){
    classes.replace("hide", "show");
  }, 1000)
}

function telefonema(a){
  V = a
  jumpscary.style = "display: flex;"
  eyes.style = "display: none;"

  if(V == false){
    telefone.play();
    setTimeout(function(){
      mensagemDispensado.style = "display: flex;"
      telaVitoria.style = "display: none;"

    }, 2000)
  } else if(V == true){
    telaVitoria.style = "display: flex;"
    mensagemDispensado.style = "display: none;"
  }
  onEnemy = false
}

function OfbehindWindow(){
  classes.replace("show", "hide");
}