var kerdesek;
var haladas = 0;

window.onload = () => {
    letoltes()
}

function letoltes()
{
    fetch('question.json').then(r => r.json()).then(d => letöltésBefejeződött(d));
}

function letöltésBefejeződött(d)
{
    console.log("Sikeres letöltés")
    console.log(d)
    kerdesek = d;
    kerdesMegjelenites(0);
}

function kerdesMegjelenites(k)
{
    document.getElementById("kérdés_szöveg").innerHTML = kerdesek[k].questionText;
    document.getElementById("válasz1").innerHTML = kerdesek[k].answer1;
    document.getElementById("válasz2").innerHTML = kerdesek[k].answer2;
    document.getElementById("válasz3").innerHTML = kerdesek[k].answer3;
    document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/" + kerdesek[k].image;
}

function elore()
{
    haladas++
    if (haladas == kerdesek.length) {
        haladas = 0;
    }
    kerdesMegjelenites(haladas);
}

function vissza()
{
    if (haladas == 0) {
        haladas = 2;
        kerdesMegjelenites(haladas)
    } else {
        haladas--;
        kerdesMegjelenites(haladas);
    }
    kerdesMegjelenites(haladas);
}

function szinez()
{
    var jovalasz = kerdesek[haladas].correctAnswer
    //console.log(jovalasz)
    if () {

    }
}