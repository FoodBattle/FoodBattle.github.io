
const dontHtml = "Nedělejte drogy<img src=\"resources/leaf_crossed.png\">";
const doHtml = "A nebo dělejte, co chete<img src=\"resources/leaft.png\">";

function createDiv(className, content){
    const tmp = document.createElement("div");
    tmp.classList.add(className);
    tmp.innerText = content;
    return tmp;
}

function addOriginalSentence(sentence){
    document.querySelector(".main").appendChild(createDiv("original", sentence));
}

function addResult(sentence){
    document.querySelector(".main").appendChild(createDiv("result", sentence));
}

function clearOld(){
    let old = document.querySelector('.result');
    if(old != null) old.remove();
    old = document.querySelector('.original');
    if(old != null) old.remove();
}

function buttonClicked(){
    if(document.getElementById("myInput").value.trim() === ""){
        window.alert("Nezadal jsi žádnou větu kámo");
        return
    }
    clearOld();
    addOriginalSentence(document.getElementById("myInput").value);
    document.getElementById("myInput").value = "";

    addResult(generateResult())
}

function onMobile() {
    return window.innerWidth <= 800 && window.innerHeight <= 600;
}

function handleLogo(){
    const logoDiv = document.querySelector(".logo");
    if(onMobile()) logoDiv.addEventListener("click", () => logoDiv.innerHTML = doHtml);
    else{
        logoDiv.addEventListener("mouseenter", () => logoDiv.innerHTML = doHtml);
        logoDiv.addEventListener("mouseleave", () => logoDiv.innerHTML = dontHtml);
    }
}

(function(){
    document.querySelector(".mybutton").addEventListener("click", buttonClicked);

    handleLogo();
})();

// addOriginalSentence("Tak tohle přidávám");
// addResult("Tak tohle je výsledek");