let xCarros = [700, 700, 700, 700, 700, 700]
let yCarros = [40, 96, 150, 210, 270, 318]
let velocidadeCarros = [8.3, 7.5, 3.2, 3.5, 5, 6]
let comprimentoCarro = 50;
let alturaCarro = 40;


function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++ ){
  image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}


function movimentaCarro(){
  for( i = 0; i < velocidadeCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }

}

function voltaPosicaoInicialDoCarro(){
  for (i = 0; i < imagemCarros.length; i++){
    if(passouTodaATela(xCarros[i])) {
     xCarros[i] = 600;
  }
}}

function passouTodaATela(xCarro){
  return xCarro < - 50;
}


