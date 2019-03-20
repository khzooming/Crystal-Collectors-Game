
// Function to create random target number
function targetNumber() {
    var $tNum = $("#targetN");
    var randomTarget = Math.floor(Math.random() * 101) + 19;
    console.log(randomTarget);
    $("#targetN").text(randomTarget);
    return randomTarget;
}
var values = [];
var playerTotal = 0;

targetNumber();
var randomTarget= targetNumber();

function createCrystalValues() {
    for (i = 0; i < 4; i++) {
        values.push(Math.floor(Math.random() * 12) + 1);
    }
}

createCrystalValues();

function crystalAddition() {

    var $crysNum1 = $("#crystal1");
    var $crysNum2 = $("#crystal2");
    var $crysNum3 = $("#crystal3");
    var $crysNum4 = $("#crystal4")

    $crysNum1.click(function () {
        playerTotal += values[0];
        console.log("Crystal 1 value = " + values[0]);
        $("#scoreN").text(playerTotal);
    })
    $crysNum2.click(function () {
        playerTotal += values[1];
        console.log("Crystal 2 value = " + values[1]);
        $("#scoreN").text(playerTotal);
    })
    $crysNum3.click(function () {
        playerTotal += values[2]
        console.log("Crystal 3 value = " + values[2]);
        $("#scoreN").text(playerTotal);
    })
    $crysNum4.click(function () {
        playerTotal += values[3]
        console.log("Crystal 4 value = " + values[3]);

        $("#scoreN").text(playerTotal);
        return playerTotal;
    })

}


function winsLosses() {
    var $wins = $("#winBlock");
    var $losses = $("#lossesBlock");
    if (playerTotal > randomTarget) {
        wins++;
        $("#winBlock").text(wins);
        console.log(wins)
    }
    else if (playerTotal === randomTarget) {
        losses++;
        $("#lossesBlock").text(losses);
    }
}


crystalAddition();
winsLosses();

// reset function
// var wins = 0
// var losses = 0
// start new game button would be tied to reset function







