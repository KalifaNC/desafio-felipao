let nome_h = "";
let xp = 0;
nome_h = prompt("Qual o seu nome de herói?");
switch (xp<0) {
    case (xp<1000):
    console.log("Ferro");
    break;
    case (xp>=1000 && xp<2000):
    console.log("Bronze");
    break;
    case (xp>=2001 && xp<5000):
    console.log("Prata");
    break;
    case (xp>=5001 && xp<6000):
    console.log("Ouro");
    break;    
    case (xp>=6001 && xp<7000):
    console.log("Platina");
    break;
    case (xp>=7001 && xp<8000):
    console.log("Diamante");
    break;
    case (xp>=8001 && xp<9000):
    console.log("Ascendente");
    break;
    case (xp>=9001 && xp<10000):
    console.log("Imortal");
    break;
    case (xp>=10001):
    console.log("Radiante");
    break;
    
default:
    console.log (nome_h, + xp);
    break;
}