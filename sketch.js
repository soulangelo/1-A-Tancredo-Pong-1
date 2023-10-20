let xBolinha = 400
let yBolinha = 300
let diametro = 20
let raio = diametro/2
let velocidadeXbolinha = 10
let velocidadeYbolinha = 10
let xRaquete = 10
let yRaquete = 265
let xRaquete2 = 780
let yRaquete2 = 265
let larguraRaquete = 10
let alturaRaquete = 100
let lRaquete2 = 10
let aRaquete2 = 100
let velocidadeYraquete = 10
let velocidadeYinimigo = 10
let hit = false;


function setup() {
  createCanvas(800, 600);
}



function draw() {
 
  background(0);
  criarBolinha();
  moverBolinha();
  borda();
  criarRaquete();
  movimentoRaquete();
  colisãoRaquete();
  raqueteInimigo();
  colisãoInimigo();
  movimentoInimigo();
 
 
 
function criarBolinha(){
 
circle(xBolinha,yBolinha,diametro);

}



function moverBolinha(){
  xBolinha += velocidadeXbolinha;
  yBolinha += velocidadeYbolinha;
 
}

 
 
function borda(){
  if(xBolinha + raio > width || xBolinha - raio < 0){velocidadeXbolinha *= -1}
   if(yBolinha + raio > height || yBolinha - raio < 0){velocidadeYbolinha *= -1}
  }

 
function criarRaquete(){
   
  rect(xRaquete,yRaquete, larguraRaquete, alturaRaquete);
   


  }
   
 
function movimentoRaquete(){
 
 if(keyIsDown(87)){yRaquete -= velocidadeYraquete}
if(keyIsDown(83)){yRaquete += velocidadeYraquete}
 
}
 
function colisãoRaquete(){
  hit = collideRectCircle(xRaquete, yRaquete, larguraRaquete, alturaRaquete, xBolinha,yBolinha, raio);
  if(hit){
    velocidadeXbolinha *= -1
  }
 

}

 
 
function raqueteInimigo(){
   
  rect(xRaquete2,yRaquete2, lRaquete2, aRaquete2);
   
  }
 
 
 
  function colisãoInimigo(){
  hit = collideRectCircle(xRaquete2, yRaquete2, lRaquete2, aRaquete2, xBolinha,yBolinha, raio);
  if(hit){
    velocidadeXbolinha *= -1}
   }
 
 
  function movimentoInimigo(){
 
 if(keyIsDown(UP_ARROW)){yRaquete2 -= velocidadeYinimigo}
if(keyIsDown(DOWN_ARROW)){yRaquete2 += velocidadeYinimigo}
  }


}

  
  
  
  
  
  
  
  
  























































































