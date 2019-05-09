function submit ( ) {
    username = $("#username").val().trim();
    projectname = $("#projectname").val().trim();
    var resultDiv = $("<li>");
    var the = "https://" + username + ".github.io/" + projectname + "/" ;
    resultDiv.attr("href", the);
    resultDiv.attr("target","_blank")
    resultDiv.append(the)
    $("#results").append(resultDiv);
}

$(document).on("click", "#submit", submit);
