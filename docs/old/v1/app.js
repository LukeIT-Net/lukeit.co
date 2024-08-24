document.getElementById("heading").innerHTML =
    localStorage["title"] || "Just Write"; //default text
document.getElementById("content").innerHTML = 
    localStorage["text"] ||  "This text is automatically saved every second :) -Real-Luke-James "; //default text


setInterval(function() {
    //function that is saving the innerHTML of the div
    localStorage["title"] = document.getElementById("heading").innerHTML; //heading div
    localStorage["text"] = document.getElementById("content").innerHTML; //content div
})
