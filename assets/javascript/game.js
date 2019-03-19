
// Function to create random target number
function targetNumber() {
    var $tNum = $("#targetN");
    var randomTarget = Math.floor(Math.random() * 101) + 19;
    console.log(randomTarget);
    $("#targetN").text(randomTarget);
}


// Function to assign random values to crystals
function crystalValues() {
    var $crysNum1 = $("#crystal1");
    var $crysNum2 = $("#crystal2");
    var $crysNum3 = $("#crystal3");
    var $crysNum4 = $("#crystal4")

    $crysNum1.click(function () {
        var random1 = Math.floor(Math.random() * 12) + 1;
        console.log("Crystal 1 value = " + random1);
    })
    $crysNum2.click(function () {
        var random2 = Math.floor(Math.random() * 12) + 1;
        console.log("Crystal 2 value = " + random2);
    })
    $crysNum3.click(function () {
        var random3 = Math.floor(Math.random() * 12) + 1;
        console.log("Crystal 3 value = " + random3);
    })
    $crysNum4.click(function () {
        var random4 = Math.floor(Math.random() * 12) + 1;
        console.log("Crystal 4 value = " + random4);
    })

    console.log(random1 + random2 + random3 + random4);
    return random1, random2, random3, random4

}


// Function to add crystal click points and display the ongoing total
// function addition() {
//     var add = "";
//     add += 
    
//    $("#crystal1").on("click", function () {
//     add += random1;
//    })
// }




    // $("#tails").on("click", function() {

    // if () {
    //     add += random1;
    // } else if () {
    //     add += random2;
    // } else if () {
    //     add += random3;
    // } else if ($crysNum4) {
    //     add += random4;
    // }
    //     console.log("score is " + score);
        console.log("add is " + add);
        console.log("yo I'm after the crystal math part");
    


targetNumber();
crystalValues();

