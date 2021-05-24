var haladas = 1;
var ajdi;
var hossz;

fetch('api/whisky/count')
    .then(result => result.text())
    .then(n => {hossz = parseInt(n)})

window.onload = () => {
    betoltes();

    document.getElementById("addButton").addEventListener("click", () => {

        //Ezt az objektumot fogjuk átküldeni
        let data = {
            Név: document.getElementById("ujWhisky").value
        }


        fetch("api/whisky",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }
        ).then(x => {
            if (x.ok) {
                alert("Siker");

            }
            else {
                alert("Kudarc");
            }
        });
    })

    document.getElementById("RemoveButton").addEventListener("click", () => {
        let id = document.getElementById("torlendoWhisky").value

        fetch(`/api/whisky/delete/${id}`, {
            method: 'DElETE',
        }).then(y => {
            if (y.ok) {
                alert("Siker");
            }
            else {
                alert("Kudarc");
            }
        })
    })

    
}

function betoltes()
{
    fetch('api/whisky/1')
        .then(response => response.json())
        .then(data => whiskyMegjelenites(data)
    );
}

function whiskyBetoltes(id) {
    ajdi = id;
    fetch(`api/whisky/${ajdi}`)
        .then(response => {
            if (!response.ok) {
                console.error(`Hibás válasz: ${response.status}`)
            }
            else {
                return response.json()
            }
        })
        .then(data => whiskyMegjelenites(data));
}

function whiskyMegjelenites(k) {
    console.log(k);
    document.getElementById("szöveg").innerHTML = k.név;
}

function elore() {
    //console.log(hossz);
    haladas++
    if (haladas === hossz) {
        haladas = 1;
    }
    whiskyBetoltes(haladas);
}
function vissza() {
    haladas--;
    if (haladas === 0) {
        haladas = hossz;
    }
    whiskyBetoltes(haladas);
}

