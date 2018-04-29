// some random hates found on the internets
const positiveStart =
    ['Mmmm, ', 'Joo, ', 'Okey, ', 'Nice, ', 'Pecka, ', 'Pííííčo, ', 'Wow, ', 'Kámo... ',];

const negativeStart =
    ["Achjo, ", "OMG, ", "Blbečku, ", "Kámo... "];

const negativeCore =
    ['jsi hodně z kopce.', 'tak jsi kokot?', 'to by vole neřekl ani Pavel.', 'tak dneska už nehulíš.'];

const positiveSecond = ["dobrá libůska.", "naprosto v pořádku.", "to se říká úplně normálně.", "to bys měl říct v televizi."];

const namesF = ["Nela", "Monča", "Justa","Stella","Vija","Michelle","Pavlovo máma", "Simča"];
const namesM = ["Káca", "Pavel", "Tiep", "Davča", "Gaža","Robin","Mrazík", "Max"];

const positiveThirdF = ["Naposled to říkala ", "Myslím, že to říkala i "," To v hospodě často křičí ", "Hlavně to při šukání prej říká ","Podobnou úchylku má "];
const positiveThirdM = ["Naposled to říkal ", "Myslím, že to říkal i "," To v hospodě často křičí ", "Hlavně to při šukání prej říká ","Podobnou úchylku má "];

function positiveResult(){
    let idx = Math.floor((Math.random() * (positiveStart.length-1)) + 1);
    let result = positiveStart[idx];

    idx = Math.floor((Math.random() * (positiveSecond.length-1)) + 1);
    result = result + positiveSecond[idx];

    const man = Math.floor((Math.random()) + 1);
    if(man === 1){
        idx = Math.floor((Math.random() * (positiveThirdM.length-1)) + 1);
        result = result + positiveThirdM[idx];
        idx = Math.floor((Math.random() * (namesM.length-1)) + 1);
        result = result + namesM[idx];
    } else {
        idx = Math.floor((Math.random() * (positiveThirdF.length-1)) + 1);
        result = result + positiveThirdF[idx];
        idx = Math.floor((Math.random() * (namesF.length-1)) + 1);
        result = result + namesF[idx];
    }
    return result;
}

function negativeResault(){
    let idx = Math.floor((Math.random() * (negativeStart.length-1)) + 1);
    let result = negativeStart[idx];

    idx = Math.floor((Math.random() * (negativeCore.length-1)) + 1);
    result = result + negativeCore[idx];
    return result;
}

function generateResult(){
    let rand = Math.floor((Math.random() * 5) + 1);
    if(rand > 1) return positiveResult();
    else return negativeResault();

}