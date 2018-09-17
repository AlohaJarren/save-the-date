console.log("test");

var dough = document.getElementsByClassName("day");

var goodScore = 0;

var congrats = document.getElementById("congrats");

function Check() {
    if(goodScore === 7) {
        congrats.play();
        var baldi = document.createElement('img');
        baldi.src = 'images/baldi.png';
        baldi.style.width = '90px';
        dough[21].appendChild(baldi);
    }
}

function AddNotebooks(days) {
    for(var i=0; i < 7; i++) {
        var noteBook = document.createElement('img');
        noteBook.src = "images/notebook.png";
        noteBook.style.width = "90px";

        noteBook.addEventListener("click",function(){
            this.style.display = "none";
            goodScore +=1;
            Check();
        });

        
        days[Math.floor((Math.random() * days.length))].appendChild(noteBook);
    }
}

AddNotebooks(dough);