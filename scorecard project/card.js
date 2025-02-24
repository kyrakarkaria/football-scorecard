let pointsa=0
let pointsb=0
function inc(team){
    if(team==="A"){
        pointsa++;
        document.getElementById("pointsa").innerText=pointsa;
    }
    else if(team==="B"){
        pointsb++;
        document.getElementById("pointsb").innerText=pointsb;
    }
}