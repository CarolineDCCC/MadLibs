"use strict"

const $ = function(id) {
    return document.getElementById(id);
};



const createMessage = function() {
    if ($("pluralNoun").validity.valueMissing || $("noun1").validity.valueMissing || $("noun2").validity.valueMissing ||
     $("song").validity.valueMissing || $("verb").validity.valueMissing) {
        alert("Please enter a word in each field.");
        

     }else{
        $("output-container").style.display="block";
        $("word1").innerHTML = $("pluralNoun").value.toUpperCase();
        $("word2").innerHTML = $("noun1").value.toUpperCase();
        $("word3").innerHTML = $("noun2").value.toUpperCase();
        $("word4").innerHTML = $("song").value.toUpperCase();
        $("word5").innerHTML = $("verb").value.toUpperCase();
     }
}

const startOver = function() {
    window.location.reload(false)
}