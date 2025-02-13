import {
    getRandomScores,
    getStudentJSON,
    runTitle
} from './lib.js';

runTitle();
warmup1();

function warmup1() {
    console.log("Exercise week 1");

    const button = document.querySelector('#button-1a')
    button.addEventListener("click", function() {
    document.querySelector("#content-1").innerHTML = "<p>Hallo, dit is de oefening van Aimane</p>";
    });

    const button1b = document.querySelector('#button-1b')
    button1b.addEventListener("click", function() {
    document.querySelector("#section-1").style.backgroundColor= "#fff000";
    });

    const button1c = document.querySelector("#button-1c")
    button1c.addEventListener("click", function() {
        document.getElementById("content-1").innerHTML += "<h2>Je bent er klaar voor!</h2>";
    });
    
    
    
}

function warmup2() {
    console.log("Exercise week 2");
    const scores = getRandomScores(10);
}

function warmup3() {
    let student = getStudentJSON();
}

function warmup4() {
    let main, min, max;
}

function warmup5() {

}