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
