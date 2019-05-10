function submit ( ) {
    event.preventDefault();
    username = $("#username").val().trim();
    projectname = $("#projectname").val().trim();
    var resultDiv = $("<li>");
    var linkable = $("<a>");
    var the = "https://" + username + ".github.io/" + projectname + "/" ;
    linkable.addClass("links")
    linkable.attr("href", the);
    linkable.attr("target","_blank")
    linkable.append(the)
    $("#results").append(resultDiv);
    resultDiv.append(linkable);
    console.log ("Sending notification to " + username, "that you visited " + projectname + ", star this app to enable Stealth MODE :p" )
}

function clear ( ) {
    event.preventDefault();
    $( "#results" ).empty();
}


$(document).on("click", "#submit", submit);

$(document).on("click", "#clear", clear);
