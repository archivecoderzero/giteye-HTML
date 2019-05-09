function submit ( ) {
    username = $("#username").val().trim();
    projectname = $("#projectname").val().trim();
    var resultDiv = $("<li>");
    var linkable = $("<a>");
    var the = "https://" + username + ".github.io/" + projectname + "/" ;
    linkable.attr("href", the);
    linkable.attr("target","_blank")
    linkable.append(the)
    $("#results").append(resultDiv);
    resultDiv.append(linkable);

}

$(document).on("click", "#submit", submit);
