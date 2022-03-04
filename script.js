var set = new Set();
var arr = []
const tiles = document.querySelectorAll(".grid-item");
var isover = true;

//Random szám generátor
function GetRnDInteger(max) { return Math.floor((Math.random() * max ) + 1) }

//set, egyedi számokkal feltöltése
while (set.size < 15) { set.add(GetRnDInteger(15)); }

//set iterálhatóvá tevése
temp_set = set.values();

//for (let i = 0; i <= set.size; i++) { arr[i] = temp_set.next().value; }

//kockák számokkal feltöltése
for (let i = 0; i < tiles.length; i++) {
    if (!(i == 15)) {
        tiles[i].innerHTML = temp_set.next().value;
    }
}

//számok cserélése
for (let i = 0; i < tiles.length; i++) {
    tiles[i].addEventListener("click", () => {

        if (i < 12 && tiles[i+4].innerHTML == "") {
            tiles[i+4].innerHTML = tiles[i].innerHTML;
            tiles[i].innerHTML = "";
            console.log(i);
        }

        else if (i > 0 && tiles[i-1].innerHTML == "") {
            tiles[i-1].innerHTML = tiles[i].innerHTML;
            tiles[i].innerHTML = "";
            console.log(i);
        }

        else if (i < 15 && tiles[i+1].innerHTML == "") {
            tiles[i+1].innerHTML = tiles[i].innerHTML;
            tiles[i].innerHTML = "";
            console.log(i);
        }

        else if (i > 3 && tiles[i-4].innerHTML == "") {
            tiles[i-4].innerHTML = tiles[i].innerHTML;
            tiles[i].innerHTML = "";
            console.log(i);
        }
    });
}

//Vizsgálat gombnyomással
document.getElementById("doneBtn").addEventListener("click", () => {
    for (let i = 0; i < tiles.length; i++) {
        if (tiles[i].innerHTML > i + 1){
            isover = false;
            break;
        }
    }

    if (isover) { alert("Gratulálok! Nyertél!"); }
    else { alert("Még nincs vége a játéknak!"); }
});