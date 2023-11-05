var playerTurn = true;
var jaGanhou = false

placar()
verificarVitoria()

function reset(){
    document.getElementById('1').innerHTML = ""
    document.getElementById('2').innerHTML = ""
    document.getElementById('3').innerHTML = ""
    document.getElementById('4').innerHTML = ""
    document.getElementById('5').innerHTML = ""
    document.getElementById('6').innerHTML = ""
    document.getElementById('7').innerHTML = ""
    document.getElementById('8').innerHTML = ""
    document.getElementById('9').innerHTML = ""
    jaGanhou = false
    ganhou.close()
}

function verificarVitoria(){
    let a1 = document.getElementById("1").innerHTML
    let a2 = document.getElementById("2").innerHTML
    let a3 = document.getElementById("3").innerHTML
    let a4 = document.getElementById("4").innerHTML
    let a5 = document.getElementById("5").innerHTML
    let a6 = document.getElementById("6").innerHTML
    let a7 = document.getElementById("7").innerHTML
    let a8 = document.getElementById("8").innerHTML
    let a9 = document.getElementById("9").innerHTML
    let x = "X"
    let o = "O"
    

    if ((a1 === x && a2 === x && a3 === x) ||
        (a4 === x && a5 === x && a6 === x) ||
        (a7 === x && a8 === x && a9 === x) ||
        (a1 === x && a4 === x && a7 === x) ||
        (a2 === x && a5 === x && a8 === x) ||
        (a3 === x && a6 === x && a9 === x) ||
        (a1 === x && a5 === x && a9 === x) ||
        (a3 === x && a5 === x && a7 === x)) {
            
            jaGanhou = true
            ganhou.show()
    }else
        

    
    if ((a1 === o && a2 === o && a3 === o) ||
        (a4 === o && a5 === o && a6 === o) ||
        (a7 === o && a8 === o && a9 === o) ||
        (a1 === o && a4 === o && a7 === o) ||
        (a2 === o && a5 === o && a8 === o) ||
        (a3 === o && a6 === o && a9 === o) ||
        (a1 === o && a5 === o && a9 === o) ||
        (a3 === o && a5 === o && a7 === o)) {
            jaGanhou = true
            ganhou.show()
    }else

    console.log(a1)
    console.log(a2)
    console.log(a3)
    console.log(a4)
    console.log(a5)
    console.log(a6)
    console.log(a7)
    console.log(a8)
    console.log(a9)
}

function placar(){
    if (playerTurn) {
        document.getElementById("placar").textContent = "Vez do Jogador: X"
    } else {
        document.getElementById("placar").textContent = "Vez do Jogador: O"
    }
}

 function trocaPlayer() {
    if (playerTurn) {
        document.getElementById("placar").textContent = "Vez do Jogador: X"
        playerTurn = false;
    } else {
        document.getElementById("placar").textContent = "Vez do Jogador: O"
        playerTurn = true;
    }
    placar()
    verificarVitoria()

}

function assinalar1(){
    if(playerTurn && !jaGanhou){
        document.getElementById("1").innerHTML = "X"
        trocaPlayer()
    }else if (!jaGanhou){
        document.getElementById("1").innerHTML = "O"
        trocaPlayer()
    }
     
}
function assinalar2(){
    if(playerTurn && !jaGanhou){
        document.getElementById("2").innerHTML = "X"
        trocaPlayer()
    }else if (!jaGanhou){
        document.getElementById("2").innerHTML = "O"
        trocaPlayer()
    }
    
}
function assinalar3(){
    if(playerTurn && !jaGanhou){
        document.getElementById("3").innerHTML = "X"
        trocaPlayer()
    }else if (!jaGanhou){
        document.getElementById("3").innerHTML = "O"
        trocaPlayer()
    }
    
}
function assinalar4(){
    if(playerTurn && !jaGanhou){
        document.getElementById("4").innerHTML = "X"
        trocaPlayer()
    }else if (!jaGanhou){
        document.getElementById("4").innerHTML = "O"
        trocaPlayer()
    }
    
}
function assinalar5(){
    if(playerTurn && !jaGanhou){
        document.getElementById("5").innerHTML = "X"
        trocaPlayer()
    }else if (!jaGanhou){
        document.getElementById("5").innerHTML = "O"
        trocaPlayer()
    }
    
}
function assinalar6(){
    if(playerTurn && !jaGanhou){
        document.getElementById("6").innerHTML = "X"
        trocaPlayer()
    }else if (!jaGanhou){
        document.getElementById("6").innerHTML = "O"
        trocaPlayer()
    }
    
}
function assinalar7(){
    if(playerTurn && !jaGanhou){
        document.getElementById("7").innerHTML = "X"
        trocaPlayer()
    }else if (!jaGanhou){
        document.getElementById("7").innerHTML = "O"
        trocaPlayer()
    }
    
}
function assinalar8(){
    if(playerTurn && !jaGanhou){
        document.getElementById("8").innerHTML = "X"
        trocaPlayer()
    }else if (!jaGanhou){
        document.getElementById("8").innerHTML = "O"
        trocaPlayer()
    }
    
}
function assinalar9(){
    if(playerTurn && !jaGanhou){
        document.getElementById("9").innerHTML = "X"
        trocaPlayer()
    }else if (!jaGanhou){
        document.getElementById("9").innerHTML = "O"
        trocaPlayer()
    }
    
}
