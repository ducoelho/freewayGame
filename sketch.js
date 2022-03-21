



function setup() {
  createCanvas(600, 400);
  somTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialDoCarro();
  verificaColisao();
  marcaPonto();
  incluiPontos();
  terminaJogo();
  
  }

function terminaJogo(){
  
  if(meusPontos == 5){
    textAlign(CENTER);
    textSize(75);
    fill(color(0, 0,255));
    text("YOU WIN", 300, 200);
    draw = false}
  
  if(pontosPerdidos == 5){
    textAlign(CENTER);
    textSize(75);
    fill(color(255, 0, 0));
    text("YOU LOSE", 300, 200);
    draw = false}
  
  }

