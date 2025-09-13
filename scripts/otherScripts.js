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

const mobileQuery = window.matchMedia("(max-width: 787px)");

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

const OUTREACHES = [
    document.getElementsByClassName("twentyfour")[0],
    document.getElementsByClassName("twenty")[0],
    document.getElementsByClassName("nineteen")[0],
    document.getElementsByClassName("eighteen")[0]
];

let outreachIndex = 0;


function next2(){
    outreachIndex+=1;
    if(outreachIndex==OUTREACHES.length){
        outreachIndex=0;
        OUTREACHES[OUTREACHES.length-1].style.display = "none";
    }else{
        OUTREACHES[outreachIndex-1].style.display = "none";
    }
    OUTREACHES[outreachIndex].style.display = "block";
}

function prev2(){
    outreachIndex-=1;
    if(outreachIndex==-1){
        outreachIndex = OUTREACHES.length-1;
        OUTREACHES[0].style.display = "none";
    }else{
        OUTREACHES[outreachIndex+1].style.display = "none";
    }
    OUTREACHES[outreachIndex].style.display = "block";
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

function mobileAdjust(query){
    if(query.matches){
        document.getElementById("mobileNavbar").style.display = "block";
        document.getElementById("navbar").style.display = "none";
        document.getElementsByClassName("footer-txt")[0].innerHTML = '<span class="footer-unweighted-txt">waghostrobotics@gmail.com<br>Rooms 219 and 221, Westford Academy, 30 Patten Road, Westford, MA, 01886</span>';
    }else{
        document.getElementById("mobileNavbar").style.display = "none";
        document.getElementById("navbar").style.display = "block";
        document.getElementsByClassName("footer-txt")[0].innerHTML = `Email: <span class="footer-unweighted-txt">waghostrobotics@gmail.com | </span>Address:
        <span class="footer-unweighted-txt">Rooms 219 and 221, Westford Academy, 30 Patten Road, Westford, MA,
          01886</span>`;
    }
}

mobileQuery.addEventListener("change", (e)=>{
    mobileAdjust(e);
});

document.addEventListener("DOMContentLoaded", ()=>{
    mobileAdjust(mobileQuery);
});

let state = 0;

function showOptions(){
    if(state==0){
        state=1;
        document.getElementById("otherLinks").style.display = "grid";
        document.getElementById("dropdownBtn").innerText = "^"
    }else{
        state=0;
        document.getElementById("otherLinks").style.display = "none";
        document.getElementById("dropdownBtn").innerText = "V"
    }
}