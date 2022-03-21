
let yAtor = 366;
let xAtor = 85;
let colisao = false;
let meusPontos = 0
let pontosPerdidos = 0


function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -=3}
  if(keyIsDown(DOWN_ARROW)){
    if(podeSeMover())
    yAtor +=3
  }}
    
function verificaColisao(){
  
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for(i = 0; i< imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if(colisao){
      voltaAtorPraPosicaoInicial();
      somColidiu.play();
      
    //if(pontosMaiorQueZero()){
         
      pontosPerdidos += 1 }
    }
    
    //} 
}

function voltaAtorPraPosicaoInicial(){
  yAtor = 366;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(0,0,255));
  text(meusPontos, 200 , 27);
  fill(color(255, 0, 0));
  text(pontosPerdidos, 400, 27);
}

function marcaPonto(){
  if(yAtor < 15){
    somPontos.play();
    meusPontos += 1
    
    voltaAtorPraPosicaoInicial();
  
    }
}

//function pontosMaiorQueZero(){
  //return meusPontos > 0
//}

function podeSeMover(){
  return yAtor < 366;
}