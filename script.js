// correct solutions
let correctas = [1,1,3,2,3,2,4,2,3,3];

// user selection

let op_chosn=[];

let op_chonsok=0;

//Function that takes question and user input

function res(cnum, actual){

    op_chosn[cnum] = actual.value;

    console.log(actual.value);
    // White when another option gets chosen
    id="q" + cnum;

    labels = document.getElementById(id).childNodes;
    labels[3].style.backgroundColor = "white";
    labels[5].style.backgroundColor = "white";
    labels[7].style.backgroundColor = "white";

    // Color for the selected option

    actual.parentNode.style.backgroundColor = "#cec0fc";
}

// Function that corrects the user inputs

function correct(){

    op_chonsok=0;

    for (i=0; i < correctas.length; i++){

        if(correctas[i]==op_chosn[i]){

            op_chonsok++;

        }

    }

    document.getElementById("result").innerHTML = op_chonsok; 
    
    document.getElementById("share").style.display = "block";
}

function share(){

    var url = "https://ggnsw.github.io/Quizard/index.html";
    var text = "I just scored a "+op_chonsok+" out of 10 at quizard.com";
    window.open('http://twitter.com/share?url='+encodeURIComponent(url)+'&text='+encodeURIComponent(text), '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0');

}