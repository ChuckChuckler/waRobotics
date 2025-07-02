const SEASONS = [
    document.getElementsByClassName("intoTheDeep")[0],
    document.getElementsByClassName("centerStage")[0],
    document.getElementsByClassName("powerplay")[0],
    document.getElementsByClassName("freightFrenzy")[0],
    document.getElementsByClassName("ultimateGoal")[0],
    document.getElementsByClassName("skystone")[0],
    document.getElementsByClassName("roverRuckus")[0],
    document.getElementsByClassName("relicRecovery")[0]
];

let seasonIndex = 0;

function next(){
    seasonIndex+=1;
    if(seasonIndex==SEASONS.length){
        seasonIndex=0;
        SEASONS[SEASONS.length-1].style.display = "none";
    }else{
        SEASONS[seasonIndex-1].style.display = "none";
    }
    SEASONS[seasonIndex].style.display = "flex";
}

function prev(){
    seasonIndex-=1;
    if(seasonIndex==-1){
        seasonIndex = SEASONS.length-1;
        SEASONS[0].style.display = "none";
    }else{
        SEASONS[seasonIndex+1].style.display = "none";
    }
    SEASONS[seasonIndex].style.display = "flex";
}

document.getElementById("gitIcon").addEventListener("mouseenter", function(){
  document.getElementById("gitInfo").innerText = "Github";
});

document.getElementById("gitIcon").addEventListener("mouseleave", function(){
  document.getElementById("gitInfo").innerText = "";
});

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function redirect(url){
  window.open(url, "_blank");
}

function openPage(page){
  window.location.href = `${page}.html`;
}
