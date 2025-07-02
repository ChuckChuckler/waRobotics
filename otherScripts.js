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
